import smtplib
import re
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
from django.conf import settings


class EmailValidationError(Exception):
    pass


class EmailServer:
    GMAIL_PATTERN = re.compile(r'^[a-zA-Z0-9._%+\-]+@gmail\.com$', re.IGNORECASE)
    LINK_PATTERN   = re.compile(r'https?://|ftp://|www\.', re.IGNORECASE)
    HTML_PATTERN   = re.compile(r'<[^>]+>')
    CONTROL_PATTERN = re.compile(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]')


    def __init__(self):
        self.smtp_host     = getattr(settings, 'EMAIL_HOST',     'smtp.gmail.com')
        self.smtp_port     = getattr(settings, 'EMAIL_PORT',     587)
        self.smtp_user     = getattr(settings, 'EMAIL_HOST_USER', '')
        self.smtp_password = getattr(settings, 'EMAIL_HOST_PASSWORD', '')
        self.destination   = getattr(settings, 'SUGGESTION_DESTINATION', 'meusaas.027@gmail.com')


    def validate_sender(self, email: str) -> str:
        email = email.strip().lower()
        if not self.GMAIL_PATTERN.match(email):
            raise EmailValidationError('Only @gmail.com addresses are allowed.')
        return email


    def validate_subject(self, subject: str) -> str:
        subject = subject.strip()
        if not subject:
            raise EmailValidationError('Subject is required.')
        if len(subject) > 120:
            raise EmailValidationError('Subject must be at most 120 characters.')
        return subject


    def validate_body(self, body: str) -> str:
        body = body.strip()
        if not body:
            raise EmailValidationError('Content is required.')
        if self.LINK_PATTERN.search(body):
            raise EmailValidationError('Links are not allowed in the content.')
        # Sanitiza
        body = self.HTML_PATTERN.sub('', body)
        body = self.CONTROL_PATTERN.sub('', body)
        if len(body) > 500:
            raise EmailValidationError('Content must be at most 500 characters.')
        return body


    def build(self, sender: str, subject: str, body: str, attachments: list = None) -> MIMEMultipart:
        msg = MIMEMultipart()
        msg['From']    = sender
        msg['To']      = self.destination
        msg['Subject'] = f'[NexO Suggestion] {subject}'
        msg['Reply-To'] = sender

        text_body = (
            f'De: {sender}\n'
            f'Assunto: {subject}\n'
            f'{"─" * 40}\n\n'
            f'{body}'
        )
        msg.attach(MIMEText(text_body, 'plain', 'utf-8'))

        if attachments:
            for file_path, file_name, mime_type in attachments:
                self._attach_file(msg, file_path, file_name, mime_type)

        return msg


    def _attach_file(self, msg: MIMEMultipart, file_path: str, file_name: str, mime_type: str):
        maintype, subtype = mime_type.split('/', 1)
        with open(file_path, 'rb') as f:
            part = MIMEBase(maintype, subtype)
            part.set_payload(f.read())
        encoders.encode_base64(part)
        part.add_header('Content-Disposition', 'attachment', filename=file_name)
        msg.attach(part)


    def send(self, sender: str, subject: str, body: str, attachments: list = None):
        sender  = self.validate_sender(sender)
        subject = self.validate_subject(subject)
        body    = self.validate_body(body)

        msg = self.build(sender, subject, body, attachments)

        with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
            server.ehlo()
            server.starttls()
            server.login(self.smtp_user, self.smtp_password)
            server.sendmail(self.smtp_user, self.destination, msg.as_string())