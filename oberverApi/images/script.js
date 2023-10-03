const imageObserver = new IntersectionObserver(
    (entries, observer) => { // callback
        console.log(entries)
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src

                observer.unobserve(entry.target) // cancel observe
            }
        })
    },
    {   // optons
        // rootMargin: "150px 20px 30px 40px" - не работает!!!
        rootMargin: "50px",
        threshold: 0.25
    }
)
const images = document.querySelectorAll('img')

images.forEach((image) => {
    imageObserver.observe(image)
})