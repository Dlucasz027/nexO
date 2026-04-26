function ri(key) {
    return (window.ROADMAP_I18N && window.ROADMAP_I18N[key]) ? window.ROADMAP_I18N[key] : key;
}

function ri_list(key) {
    const val = ri(key);
    if (!val || val === '—') return ['—'];
    return val.split(',').map(s => s.trim()).filter(Boolean);
}

const ROADMAP_DATA = {
    python: {
        label: 'roadmap.data.python.label',
        careers: {
            backend: {
                label:         'roadmap.data.python.backend.label',
                time:          'roadmap.data.python.backend.time',
                framework:     'roadmap.data.python.backend.framework',
                database:      'roadmap.data.python.backend.database',
                complementary: 'roadmap.data.python.backend.complementary',
                tip:           'roadmap.data.python.backend.tip'
            },
            fullstack: {
                label:         'roadmap.data.python.fullstack.label',
                time:          'roadmap.data.python.fullstack.time',
                framework:     'roadmap.data.python.fullstack.framework',
                database:      'roadmap.data.python.fullstack.database',
                complementary: 'roadmap.data.python.fullstack.complementary',
                tip:           'roadmap.data.python.fullstack.tip'
            },
            data: {
                label:         'roadmap.data.python.data.label',
                time:          'roadmap.data.python.data.time',
                framework:     'roadmap.data.python.data.framework',
                database:      'roadmap.data.python.data.database',
                complementary: 'roadmap.data.python.data.complementary',
                tip:           'roadmap.data.python.data.tip'
            },
            ai: {
                label:         'roadmap.data.python.ai.label',
                time:          'roadmap.data.python.ai.time',
                framework:     'roadmap.data.python.ai.framework',
                database:      'roadmap.data.python.ai.database',
                complementary: 'roadmap.data.python.ai.complementary',
                tip:           'roadmap.data.python.ai.tip'
            }
        }
    },

    javascript: {
        label: 'roadmap.data.javascript.label',
        careers: {
            frontend: {
                label:         'roadmap.data.javascript.frontend.label',
                time:          'roadmap.data.javascript.frontend.time',
                framework:     'roadmap.data.javascript.frontend.framework',
                database:      'roadmap.data.javascript.frontend.database',
                complementary: 'roadmap.data.javascript.frontend.complementary',
                tip:           'roadmap.data.javascript.frontend.tip'
            },
            fullstack: {
                label:         'roadmap.data.javascript.fullstack.label',
                time:          'roadmap.data.javascript.fullstack.time',
                framework:     'roadmap.data.javascript.fullstack.framework',
                database:      'roadmap.data.javascript.fullstack.database',
                complementary: 'roadmap.data.javascript.fullstack.complementary',
                tip:           'roadmap.data.javascript.fullstack.tip'
            }
        }
    },

    java: {
        label: 'roadmap.data.java.label',
        careers: {
            backend: {
                label:         'roadmap.data.java.backend.label',
                time:          'roadmap.data.java.backend.time',
                framework:     'roadmap.data.java.backend.framework',
                database:      'roadmap.data.java.backend.database',
                complementary: 'roadmap.data.java.backend.complementary',
                tip:           'roadmap.data.java.backend.tip'
            },
            fullstack: {
                label:         'roadmap.data.java.fullstack.label',
                time:          'roadmap.data.java.fullstack.time',
                framework:     'roadmap.data.java.fullstack.framework',
                database:      'roadmap.data.java.fullstack.database',
                complementary: 'roadmap.data.java.fullstack.complementary',
                tip:           'roadmap.data.java.fullstack.tip'
            }
        }
    },

    csharp: {
        label: 'roadmap.data.csharp.label',
        careers: {
            backend: {
                label:         'roadmap.data.csharp.backend.label',
                time:          'roadmap.data.csharp.backend.time',
                framework:     'roadmap.data.csharp.backend.framework',
                database:      'roadmap.data.csharp.backend.database',
                complementary: 'roadmap.data.csharp.backend.complementary',
                tip:           'roadmap.data.csharp.backend.tip'
            },
            fullstack: {
                label:         'roadmap.data.csharp.fullstack.label',
                time:          'roadmap.data.csharp.fullstack.time',
                framework:     'roadmap.data.csharp.fullstack.framework',
                database:      'roadmap.data.csharp.fullstack.database',
                complementary: 'roadmap.data.csharp.fullstack.complementary',
                tip:           'roadmap.data.csharp.fullstack.tip'
            }
        }
    },

    ruby: {
        label: 'roadmap.data.ruby.label',
        careers: {
            backend: {
                label:         'roadmap.data.ruby.backend.label',
                time:          'roadmap.data.ruby.backend.time',
                framework:     'roadmap.data.ruby.backend.framework',
                database:      'roadmap.data.ruby.backend.database',
                complementary: 'roadmap.data.ruby.backend.complementary',
                tip:           'roadmap.data.ruby.backend.tip'
            },
            fullstack: {
                label:         'roadmap.data.ruby.fullstack.label',
                time:          'roadmap.data.ruby.fullstack.time',
                framework:     'roadmap.data.ruby.fullstack.framework',
                database:      'roadmap.data.ruby.fullstack.database',
                complementary: 'roadmap.data.ruby.fullstack.complementary',
                tip:           'roadmap.data.ruby.fullstack.tip'
            }
        }
    },

    rust: {
        label: 'roadmap.data.rust.label',
        careers: {
            backend: {
                label:         'roadmap.data.rust.backend.label',
                time:          'roadmap.data.rust.backend.time',
                framework:     'roadmap.data.rust.backend.framework',
                database:      'roadmap.data.rust.backend.database',
                complementary: 'roadmap.data.rust.backend.complementary',
                tip:           'roadmap.data.rust.backend.tip'
            },
            systems: {
                label:         'roadmap.data.rust.systems.label',
                time:          'roadmap.data.rust.systems.time',
                framework:     'roadmap.data.rust.systems.framework',
                database:      'roadmap.data.rust.systems.database',
                complementary: 'roadmap.data.rust.systems.complementary',
                tip:           'roadmap.data.rust.systems.tip'
            }
        }
    },

    golang: {
        label: 'roadmap.data.golang.label',
        careers: {
            backend: {
                label:         'roadmap.data.golang.backend.label',
                time:          'roadmap.data.golang.backend.time',
                framework:     'roadmap.data.golang.backend.framework',
                database:      'roadmap.data.golang.backend.database',
                complementary: 'roadmap.data.golang.backend.complementary',
                tip:           'roadmap.data.golang.backend.tip'
            },
            devops: {
                label:         'roadmap.data.golang.devops.label',
                time:          'roadmap.data.golang.devops.time',
                framework:     'roadmap.data.golang.devops.framework',
                database:      'roadmap.data.golang.devops.database',
                complementary: 'roadmap.data.golang.devops.complementary',
                tip:           'roadmap.data.golang.devops.tip'
            }
        }
    },

    typescript: {
        label: 'roadmap.data.typescript.label',
        careers: {
            frontend: {
                label:         'roadmap.data.typescript.frontend.label',
                time:          'roadmap.data.typescript.frontend.time',
                framework:     'roadmap.data.typescript.frontend.framework',
                database:      'roadmap.data.typescript.frontend.database',
                complementary: 'roadmap.data.typescript.frontend.complementary',
                tip:           'roadmap.data.typescript.frontend.tip'
            },
            fullstack: {
                label:         'roadmap.data.typescript.fullstack.label',
                time:          'roadmap.data.typescript.fullstack.time',
                framework:     'roadmap.data.typescript.fullstack.framework',
                database:      'roadmap.data.typescript.fullstack.database',
                complementary: 'roadmap.data.typescript.fullstack.complementary',
                tip:           'roadmap.data.typescript.fullstack.tip'
            },
            backend: {
                label:         'roadmap.data.typescript.backend.label',
                time:          'roadmap.data.typescript.backend.time',
                framework:     'roadmap.data.typescript.backend.framework',
                database:      'roadmap.data.typescript.backend.database',
                complementary: 'roadmap.data.typescript.backend.complementary',
                tip:           'roadmap.data.typescript.backend.tip'
            }
        }
    },

    networking: {
        label: 'roadmap.data.networking.label',
        careers: {
            infra: {
                label:         'roadmap.data.networking.infra.label',
                time:          'roadmap.data.networking.infra.time',
                framework:     'roadmap.data.networking.infra.framework',
                database:      'roadmap.data.networking.infra.database',
                complementary: 'roadmap.data.networking.infra.complementary',
                tip:           'roadmap.data.networking.infra.tip'
            },
            fttx: {
                label:         'roadmap.data.networking.fttx.label',
                time:          'roadmap.data.networking.fttx.time',
                framework:     'roadmap.data.networking.fttx.framework',
                database:      'roadmap.data.networking.fttx.database',
                complementary: 'roadmap.data.networking.fttx.complementary',
                tip:           'roadmap.data.networking.fttx.tip'
            },
            routing: {
                label:         'roadmap.data.networking.routing.label',
                time:          'roadmap.data.networking.routing.time',
                framework:     'roadmap.data.networking.routing.framework',
                database:      'roadmap.data.networking.routing.database',
                complementary: 'roadmap.data.networking.routing.complementary',
                tip:           'roadmap.data.networking.routing.tip'
            },
            wireless: {
                label:         'roadmap.data.networking.wireless.label',
                time:          'roadmap.data.networking.wireless.time',
                framework:     'roadmap.data.networking.wireless.framework',
                database:      'roadmap.data.networking.wireless.database',
                complementary: 'roadmap.data.networking.wireless.complementary',
                tip:           'roadmap.data.networking.wireless.tip'
            }
        }
    },

    cybersecurity: {
        label: 'roadmap.data.cybersecurity.label',
        careers: {
            pentest: {
                label:         'roadmap.data.cybersecurity.pentest.label',
                time:          'roadmap.data.cybersecurity.pentest.time',
                framework:     'roadmap.data.cybersecurity.pentest.framework',
                database:      'roadmap.data.cybersecurity.pentest.database',
                complementary: 'roadmap.data.cybersecurity.pentest.complementary',
                tip:           'roadmap.data.cybersecurity.pentest.tip'
            },
            soc: {
                label:         'roadmap.data.cybersecurity.soc.label',
                time:          'roadmap.data.cybersecurity.soc.time',
                framework:     'roadmap.data.cybersecurity.soc.framework',
                database:      'roadmap.data.cybersecurity.soc.database',
                complementary: 'roadmap.data.cybersecurity.soc.complementary',
                tip:           'roadmap.data.cybersecurity.soc.tip'
            },
            grc: {
                label:         'roadmap.data.cybersecurity.grc.label',
                time:          'roadmap.data.cybersecurity.grc.time',
                framework:     'roadmap.data.cybersecurity.grc.framework',
                database:      'roadmap.data.cybersecurity.grc.database',
                complementary: 'roadmap.data.cybersecurity.grc.complementary',
                tip:           'roadmap.data.cybersecurity.grc.tip'
            },
            forense: {
                label:         'roadmap.data.cybersecurity.forense.label',
                time:          'roadmap.data.cybersecurity.forense.time',
                framework:     'roadmap.data.cybersecurity.forense.framework',
                database:      'roadmap.data.cybersecurity.forense.database',
                complementary: 'roadmap.data.cybersecurity.forense.complementary',
                tip:           'roadmap.data.cybersecurity.forense.tip'
            }
        }
    },

    cloud: {
        label: 'roadmap.data.cloud.label',
        careers: {
            aws: {
                label:         'roadmap.data.cloud.aws.label',
                time:          'roadmap.data.cloud.aws.time',
                framework:     'roadmap.data.cloud.aws.framework',
                database:      'roadmap.data.cloud.aws.database',
                complementary: 'roadmap.data.cloud.aws.complementary',
                tip:           'roadmap.data.cloud.aws.tip'
            },
            azure: {
                label:         'roadmap.data.cloud.azure.label',
                time:          'roadmap.data.cloud.azure.time',
                framework:     'roadmap.data.cloud.azure.framework',
                database:      'roadmap.data.cloud.azure.database',
                complementary: 'roadmap.data.cloud.azure.complementary',
                tip:           'roadmap.data.cloud.azure.tip'
            },
            gcp: {
                label:         'roadmap.data.cloud.gcp.label',
                time:          'roadmap.data.cloud.gcp.time',
                framework:     'roadmap.data.cloud.gcp.framework',
                database:      'roadmap.data.cloud.gcp.database',
                complementary: 'roadmap.data.cloud.gcp.complementary',
                tip:           'roadmap.data.cloud.gcp.tip'
            },
            devops: {
                label:         'roadmap.data.cloud.devops.label',
                time:          'roadmap.data.cloud.devops.time',
                framework:     'roadmap.data.cloud.devops.framework',
                database:      'roadmap.data.cloud.devops.database',
                complementary: 'roadmap.data.cloud.devops.complementary',
                tip:           'roadmap.data.cloud.devops.tip'
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
        btn.textContent = ri(career.label);  // ← ri() aqui
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

    const stackLabel  = ri(stack.label);
    const careerLabel = ri(career.label);
    const careerTime  = ri(career.time);
    const timeSuffix  = ri('roadmap.result.time_suffix');
    const secFw       = ri('roadmap.result.section.frameworks');
    const secDb       = ri('roadmap.result.section.database');
    const secCo       = ri('roadmap.result.section.complementary');
    const copyBtn     = ri('roadmap.result.copy_btn');
    const careerTip   = ri(career.tip);
    const copyPrefix  = ri('roadmap.result.copy_time_prefix');

    const fwList  = ri_list(career.framework);
    const dbList  = ri_list(career.database);
    const coList  = ri_list(career.complementary);

    const result = document.getElementById('roadmapResult');

    result.innerHTML = `
        <div class="roadmap-result-header">
            <span class="roadmap-badge">${stackLabel} · ${careerLabel}</span>
            <div class="roadmap-header-right">
                <span class="roadmap-time">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    ${careerTime} ${timeSuffix}
                </span>
                <button class="btn btn-outline roadmap-copy-btn" onclick="copyRoadmap()">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    ${copyBtn}
                </button>
            </div>
        </div>
        <div class="roadmap-grid">
            <div class="roadmap-block">
                <p class="roadmap-block-label">${secFw}</p>
                <ul class="roadmap-list">
                    ${fwList.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <div class="roadmap-block">
                <p class="roadmap-block-label">${secDb}</p>
                <ul class="roadmap-list">
                    ${dbList.map(d => `<li>${d}</li>`).join('')}
                </ul>
            </div>
            <div class="roadmap-block">
                <p class="roadmap-block-label">${secCo}</p>
                <ul class="roadmap-list">
                    ${coList.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
        </div>
        <p class="roadmap-tip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            ${careerTip}
        </p>
    `;

    result.style.display = 'block';

    result.dataset.copyText = [
        `Roadmap: ${stackLabel} · ${careerLabel}`,
        `${copyPrefix} ${careerTime} ${timeSuffix}`,
        ``,
        `${secFw}: ${fwList.join(', ')}`,
        `${secDb}: ${dbList.join(', ')}`,
        `${secCo}: ${coList.join(', ')}`,
        ``,
        `Tip: ${careerTip}`
    ].join('\n');
}

function copyRoadmap() {
    const text = document.getElementById('roadmapResult').dataset.copyText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.roadmap-copy-btn');
        const original = btn.innerHTML;
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> ${ri('roadmap.result.copied')}`;
        btn.style.color = 'var(--accent)';
        setTimeout(() => { btn.innerHTML = original; btn.style.color = ''; }, 2000);
    });
}