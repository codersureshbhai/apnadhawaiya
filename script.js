// Toggle dark/light mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Open lightbox
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');

    lightbox.style.display = 'flex';
    if (element.tagName === 'IMG') {
        lightboxImg.src = element.src;
        lightboxImg.style.display = 'block';
        lightboxVideo.style.display = 'none';
    } else if (element.tagName === 'VIDEO') {
        lightboxVideo.src = element.querySelector('source').src;
        lightboxImg.style.display = 'none';
        lightboxVideo.style.display = 'block';
    }
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.getElementById('lightbox-img').src = '';
    document.getElementById('lightbox-video').src = '';
}
