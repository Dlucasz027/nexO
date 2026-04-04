const ROADMAP_DATA = {
    python: {
        label: 'Python',
        careers: {
            backend: {
                label: 'Backend',
                time: '14 meses',
                framework: ['Django', 'FastAPI', 'Flask'],
                database: ['PostgreSQL', 'Redis'],
                complementary: ['Docker', 'SQL', 'Linux'],
                tip: 'Django é o mais pedido em vagas. FastAPI cresce rápido para APIs modernas.'
            },
            fullstack: {
                label: 'Fullstack',
                time: '22 meses',
                framework: ['Django + React', 'FastAPI + Next.js'],
                database: ['PostgreSQL', 'Redis'],
                complementary: ['JavaScript', 'TypeScript', 'Docker'],
                tip: 'Combinar Django no backend com React no front é o combo mais solicitado.'
            },
            data: {
                label: 'Dados',
                time: '18 meses',
                framework: ['Pandas', 'NumPy', 'Spark'],
                database: ['PostgreSQL', 'MongoDB', 'BigQuery'],
                complementary: ['SQL', 'Power BI', 'Airflow'],
                tip: 'SQL é obrigatório. Pandas é o primeiro passo, Spark é o próximo nível.'
            },
            ai: {
                label: 'IA / Machine Learning',
                time: '24 meses',
                framework: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
                database: ['PostgreSQL', 'MongoDB'],
                complementary: ['SQL', 'Docker', 'MLflow'],
                tip: 'PyTorch domina pesquisa e cresce em produção. Scikit-learn é essencial para ML clássico.'
            }
        }
    },
    javascript: {
        label: 'JavaScript',
        careers: {
            frontend: {
                label: 'Frontend',
                time: '12 meses',
                framework: ['React', 'Next.js', 'TypeScript'],
                database: ['—'],
                complementary: ['CSS/Tailwind', 'Git', 'Figma basics'],
                tip: 'React é pedido em praticamente 80% das vagas frontend. TypeScript é requisito cada vez mais comum.'
            },
            fullstack: {
                label: 'Fullstack',
                time: '20 meses',
                framework: ['Next.js', 'React + Node.js', 'TypeScript'],
                database: ['PostgreSQL', 'MongoDB', 'Prisma ORM'],
                complementary: ['Docker', 'REST/GraphQL', 'Git'],
                tip: 'Next.js virou padrão de mercado para fullstack JS. Node no backend com Express ou Fastify.'
            }
        }
    },
    java: {
        label: 'Java',
        careers: {
            backend: {
                label: 'Backend',
                time: '18 meses',
                framework: ['Spring Boot', 'Quarkus'],
                database: ['PostgreSQL', 'MySQL', 'Redis'],
                complementary: ['Docker', 'Kafka', 'SQL'],
                tip: 'Spring Boot é absoluto no mercado Java. Quarkus cresce em ambientes cloud-native.'
            },
            fullstack: {
                label: 'Fullstack',
                time: '26 meses',
                framework: ['Spring Boot + React', 'Spring Boot + Angular'],
                database: ['PostgreSQL', 'MySQL'],
                complementary: ['JavaScript/TypeScript', 'Docker', 'SQL'],
                tip: 'Java no backend com React ou Angular no front é combo comum em grandes empresas.'
            }
        }
    },
    csharp: {
        label: 'C#',
        careers: {
            backend: {
                label: 'Backend',
                time: '16 meses',
                framework: ['.NET 8', 'ASP.NET Core', 'Entity Framework'],
                database: ['SQL Server', 'PostgreSQL', 'Redis'],
                complementary: ['Docker', 'Azure', 'SQL'],
                tip: '.NET 8 é moderno e performático. Azure é a cloud natural para o ecossistema Microsoft.'
            },
            fullstack: {
                label: 'Fullstack',
                time: '24 meses',
                framework: ['ASP.NET Core + React', 'Blazor'],
                database: ['SQL Server', 'PostgreSQL'],
                complementary: ['JavaScript/TypeScript', 'Docker', 'Azure'],
                tip: 'Blazor é interessante se quiser fullstack C# puro. ASP.NET + React é o mais pedido em vagas.'
            }
        }
    },
    ruby: {
        label: 'Ruby',
        careers: {
            backend: {
                label: 'Backend',
                time: '14 meses',
                framework: ['Ruby on Rails', 'Sinatra'],
                database: ['PostgreSQL', 'Redis', 'MySQL'],
                complementary: ['Docker', 'SQL', 'Sidekiq'],
                tip: 'Rails ainda domina o mercado Ruby. Muito usado em startups e empresas como Shopify e GitHub.'
            },
            fullstack: {
                label: 'Fullstack',
                time: '22 meses',
                framework: ['Rails + React', 'Rails + Hotwire'],
                database: ['PostgreSQL', 'Redis'],
                complementary: ['JavaScript', 'Docker', 'SQL'],
                tip: 'Hotwire é a aposta moderna do Rails para fullstack sem muito JS. React é a opção mais pedida.'
            }
        }
    },
    rust: {
        label: 'Rust',
        careers: {
            backend: {
                label: 'Backend',
                time: '20 meses',
                framework: ['Actix-web', 'Axum', 'Tokio'],
                database: ['PostgreSQL', 'Redis'],
                complementary: ['Docker', 'SQL', 'Linux'],
                tip: 'Actix-web e Axum são os frameworks mais usados. Rust é muito pedido em sistemas de alta performance e fintech.'
            },
            systems: {
                label: 'Sistemas / Embarcado',
                time: '24 meses',
                framework: ['Tokio', 'Embassy', 'no_std'],
                database: ['—'],
                complementary: ['Linux', 'WebAssembly', 'C/C++ basics'],
                tip: 'Rust está substituindo C/C++ em sistemas embarcados e WebAssembly. Muito valorizado em empresas de infra e cloud.'
            }
        }
    },
    golang: {
        label: 'Go',
        careers: {
            backend: {
                label: 'Backend',
                time: '14 meses',
                framework: ['Gin', 'Echo', 'Fiber'],
                database: ['PostgreSQL', 'Redis', 'MongoDB'],
                complementary: ['Docker', 'Kubernetes', 'SQL'],
                tip: 'Go é a linguagem padrão de infra em grandes empresas. Gin é o framework mais pedido em vagas.'
            },
            devops: {
                label: 'DevOps / Cloud',
                time: '18 meses',
                framework: ['—'],
                database: ['PostgreSQL', 'Redis'],
                complementary: ['Kubernetes', 'Docker', 'Terraform', 'Linux'],
                tip: 'Kubernetes, Docker e Terraform são escritos em Go. Conhecer Go abre portas direto para DevOps sênior.'
            }
        }
    },
    typescript: {
        label: 'TypeScript',
        careers: {
            frontend: {
                label: 'Frontend',
                time: '13 meses',
                framework: ['React + TypeScript', 'Next.js', 'Angular'],
                database: ['—'],
                complementary: ['CSS/Tailwind', 'Git', 'Zod'],
                tip: 'TypeScript é requisito em praticamente todas as vagas frontend modernas. Angular já usa TS nativamente.'
            },
            fullstack: {
                label: 'Fullstack',
                time: '22 meses',
                framework: ['Next.js', 'NestJS + React', 'tRPC'],
                database: ['PostgreSQL', 'MongoDB', 'Prisma ORM'],
                complementary: ['Docker', 'REST/GraphQL', 'Zod'],
                tip: 'NestJS é o backend TypeScript mais pedido em vagas. tRPC é tendência para fullstack tipado de ponta a ponta.'
            },
            backend: {
                label: 'Backend',
                time: '16 meses',
                framework: ['NestJS', 'Fastify', 'Express + TypeScript'],
                database: ['PostgreSQL', 'Redis', 'Prisma ORM'],
                complementary: ['Docker', 'SQL', 'Jest'],
                tip: 'NestJS domina o backend TypeScript em empresas maiores. Fastify é mais leve e cresce rápido.'
            }
        }
    }
};


let currentSlide = 0;  
let carouselInterval = null;
const CAROUSEL_DELAY = 13000;

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

function startCarouselAuto() {
    stopCarouselAuto();
    carouselInterval = setInterval(() => {
        carouselMove(1);
    }, CAROUSEL_DELAY);
}

function stopCarouselAuto() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
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
        const title   = card.dataset.title   || '';
        const company = card.dataset.company || '';
        const match   = title.includes(q) || company.includes(q);
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
        if (e.key === 'ArrowLeft')  { carouselMove(-1); stopCarouselAuto(); }
        if (e.key === 'ArrowRight') { carouselMove(1);  stopCarouselAuto(); }
    });

    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopCarouselAuto);
        carousel.addEventListener('mouseleave', startCarouselAuto);

        carousel.querySelectorAll('.carousel-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                stopCarouselAuto();
                startCarouselAuto();
            });
        });

        startCarouselAuto();
    }
});


function updateSuggCount(el) {
    document.getElementById('suggCount').textContent = el.value.length;
}

function submitSuggestion() {
    const email    = document.getElementById('suggEmail').value.trim();
    const subject  = document.getElementById('suggSubject').value.trim();
    const message  = document.getElementById('suggMessage').value.trim();
    const feedback = document.getElementById('suggFeedback');
    const btn      = document.getElementById('suggBtn');

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


function selectStack(stackKey) {
    const data = ROADMAP_DATA[stackKey];
    if (!data) return;

    document.querySelectorAll('.stack-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-stack="${stackKey}"]`).classList.add('active');

    const careersEl = document.getElementById('roadmapCareers');
    careersEl.innerHTML = '';

    Object.entries(data.careers).forEach(([key, career]) => {
        const btn = document.createElement('button');
        btn.className = 'career-btn';
        btn.dataset.career = key;
        btn.textContent = career.label;
        btn.onclick = () => selectCareer(stackKey, key);
        careersEl.appendChild(btn);
    });

    careersEl.style.display = 'flex';
    document.getElementById('roadmapResult').style.display = 'none';
    document.getElementById('roadmapCareersSection').style.display = 'block';
}

function selectCareer(stackKey, careerKey) {
    const career = ROADMAP_DATA[stackKey].careers[careerKey];
    const stack  = ROADMAP_DATA[stackKey];

    document.querySelectorAll('.career-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-career="${careerKey}"]`).classList.add('active');

    const result = document.getElementById('roadmapResult');

    result.innerHTML = `
        <div class="roadmap-result-header">
            <span class="roadmap-badge">${stack.label} · ${career.label}</span>
            <div class="roadmap-header-right">
                <span class="roadmap-time">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    ${career.time} estudando ~1h/dia
                </span>
                <button class="btn btn-outline roadmap-copy-btn" onclick="copyRoadmap()">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    Copiar
                </button>
            </div>
        </div>
        <div class="roadmap-grid">
            <div class="roadmap-block">
                <p class="roadmap-block-label">Frameworks / Libs</p>
                <ul class="roadmap-list">
                    ${career.framework.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <div class="roadmap-block">
                <p class="roadmap-block-label">Banco de dados</p>
                <ul class="roadmap-list">
                    ${career.database.map(d => `<li>${d}</li>`).join('')}
                </ul>
            </div>
            <div class="roadmap-block">
                <p class="roadmap-block-label">Complementares</p>
                <ul class="roadmap-list">
                    ${career.complementary.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
        </div>
        <p class="roadmap-tip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            ${career.tip}
        </p>
    `;

    result.style.display = 'block';

    result.dataset.copyText = [
        `Roadmap: ${stack.label} · ${career.label}`,
        `Tempo estimado: ${career.time} estudando ~1h/dia`,
        ``,
        `Frameworks / Libs: ${career.framework.join(', ')}`,
        `Banco de dados: ${career.database.join(', ')}`,
        `Complementares: ${career.complementary.join(', ')}`,
        ``,
        `Dica: ${career.tip}`
    ].join('\n');
}

function copyRoadmap() {
    const text = document.getElementById('roadmapResult').dataset.copyText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.roadmap-copy-btn');
        const original = btn.innerHTML;
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copiado!`;
        btn.style.color = 'var(--accent)';
        setTimeout(() => { btn.innerHTML = original; btn.style.color = ''; }, 2000);
    });
}