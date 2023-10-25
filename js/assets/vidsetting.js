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


