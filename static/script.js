let currentSlide = 0;

function carouselGoTo(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots   = document.querySelectorAll('.dot');
    if (!slides.length) return;

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function carouselMove(dir) {
    carouselGoTo(currentSlide + dir);
}


function filterCourses(query) {
    const cards       = document.querySelectorAll('.course-card');
    const emptySearch = document.getElementById('emptySearch');
    const clearBtn    = document.getElementById('searchClear');
    const countEl     = document.getElementById('visibleCount');
    const termEl      = document.getElementById('searchTerm');

    const q = query.trim().toLowerCase();
    let visible = 0;

    cards.forEach(card => {
        const title = card.dataset.title || '';
        const match = title.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) visible++;
    });

    clearBtn.style.display = q.length ? 'flex' : 'none';

    if (countEl) countEl.textContent = visible + ' curso' + (visible !== 1 ? 's' : '');

    if (emptySearch) {
        if (visible === 0 && q.length > 0) {
            emptySearch.style.display = 'flex';
            if (termEl) termEl.textContent = query;
        } else {
            emptySearch.style.display = 'none';
        }
    }
}


function clearSearch() {
    const input = document.getElementById('searchInput');
    if (input) {
        input.value = '';
        filterCourses('');
        input.focus();
    }
}


function previewImage(input) {
    const preview     = document.getElementById('image-preview');
    const placeholder = document.getElementById('upload-placeholder');

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
            preview.src = e.target.result;
            preview.style.display = 'block';
            if (placeholder) placeholder.style.display = 'none';
        };
        reader.readAsDataURL(input.files[0]);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.course-card').forEach((card, i) => {
        card.style.animationDelay = `${i * 45}ms`;
    });

    document.addEventListener('keydown', e => {
        if (!document.querySelector('.carousel')) return;
        if (e.key === 'ArrowLeft')  { carouselMove(-1); }
        if (e.key === 'ArrowRight') { carouselMove(1);  }
    });
});


function updateSuggCount(el) {
    document.getElementById('suggCount').textContent = el.value.length;
}

function submitSuggestion() {
    const email   = document.getElementById('suggEmail').value.trim();
    const subject = document.getElementById('suggSubject').value.trim();
    const message = document.getElementById('suggMessage').value.trim();
    const feedback = document.getElementById('suggFeedback');
    const btn     = document.getElementById('suggBtn');

    feedback.className = 'footer-feedback';
    feedback.textContent = '';

    if (!email || !subject || !message) {
        feedback.textContent = window.i18n.required;
        feedback.classList.add('feedback-error');
        return;
    }

    if (!/^[^\s@]+@gmail\.com$/i.test(email)) {
        feedback.textContent = window.i18n.email;
        feedback.classList.add('feedback-error');
        return;
    }

    if (/https?:\/\/|www\.|ftp:\/\//i.test(message)) {
        feedback.textContent = window.i18n.link;
        feedback.classList.add('feedback-error');
        return;
    }

    btn.disabled = true;
    btn.textContent = window.i18n.sending;

    const csrf = document.querySelector('[name=csrfmiddlewaretoken]');

    fetch('/suggestion/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            email:   email,
            subject: subject,
            message: message,
            csrfmiddlewaretoken: csrf ? csrf.value : ''
        })
    })
    .then(r => r.json())
    .then(data => {
        if (data.ok) {
            document.getElementById('suggEmail').value   = '';
            document.getElementById('suggSubject').value = '';
            document.getElementById('suggMessage').value = '';
            document.getElementById('suggCount').textContent = '0';

            feedback.textContent = window.i18n.success;
            feedback.classList.add('feedback-ok');
        } else {
            feedback.textContent = data.message || window.i18n.generic;
            feedback.classList.add('feedback-error');
        }
    })
    .catch(() => {
        feedback.textContent = window.i18n.connection;
        feedback.classList.add('feedback-error');
    })
    .finally(() => {
        btn.disabled = false;
        btn.innerHTML = `
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg> ${window.i18n.send}`;
    });
}