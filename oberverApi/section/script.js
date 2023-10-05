const sections = document.querySelectorAll('.section')
const nav = document.querySelectorAll('.menu-item')


const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {

            nav.forEach((item) => {
                item.classList.remove('active')
            })

            const activeId = entry.target.id

            const activeItem = document.querySelector(
                    `.menu-item[href="#${activeId}"]`)

            if (activeItem) {
                activeItem.classList.add('active')
            }
        }
    })
}

const sectionObserver = new IntersectionObserver(callback, {
    threshold: [.2, .5, .8]
})

sections.forEach((section) => {
    sectionObserver.observe(section)
})