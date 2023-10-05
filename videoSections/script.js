const links = document.querySelectorAll('.links__lk')
const video = document.querySelector('.video')

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const selectedVideo = link.getAttribute('href')
        const currentVideo = video.getAttribute('src')
        
        if (selectedVideo !== currentVideo) {
            video.pause()
            video.src = selectedVideo
            video.play()
        } 
        else if (selectedVideo === currentVideo && video.paused == true) {
            video.play()
        } 
        else if (selectedVideo === currentVideo && video.paused == false) {
            video.pause()
        }
    })
})