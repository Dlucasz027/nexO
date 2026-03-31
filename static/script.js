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