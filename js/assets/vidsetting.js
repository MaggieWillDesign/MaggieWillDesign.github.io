const video = document.getElementById("scrollVideo");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};

const videoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.currentTime = 0; // Rewind to the beginning
            video.play(); // Start playing
        } else {
            video.pause();
        }
    });
}, options);

videoObserver.observe(video);


// transparent video controls not working

// const socialvideo = document.getElementById('socialVideo');
// const customControls = document.createElement('div');
// customControls.classList.add('custom-controls');

// const playButton = document.createElement('button');
// playButton.textContent = 'Play';
// playButton.addEventListener('click', () => {
//     if (video.paused) {
//         video.play();
//     } else {
//         video.pause();
//     }
// });

// customControls.appendChild(playButton);

// video.parentNode.insertBefore(customControls, video.nextSibling);