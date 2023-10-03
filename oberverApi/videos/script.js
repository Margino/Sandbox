const videos = document.querySelectorAll('video')

const videoObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {

            if (entry.target.currentTime === 0) return // video hasn't played

            if (!entry.isIntersecting || entry.intersectionRatio < 0.2) {
                entry.target.pause()
            } else {
                entry.target.play()
            }
            
        })
    },
    {
        threshold: [0.2, 0.8]
    }
)

videos.forEach((video) => {
    videoObserver.observe(video)
})