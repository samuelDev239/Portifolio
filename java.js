class MobileNavBar {
    constructor(mobileMenu, navList, navLinks, centralNav) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks)
        this.centralNav = document.querySelector(centralNav)
        this.activeClass = "active"
        this.handleClick = this.handleClick.bind(this)
      
    }

    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation 
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`)
        }

        )
    }

    handleClick() {
        
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click",this.handleClick)
    }
    init() {
        if (this.mobileMenu) {
            this.addClickEvent()
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    ".central-nav"
)
mobileNavBar.init()

window.sr = ScrollReveal({reset: true});
sr.reveal('.area-1', {
    
    duration: 2000});

sr.reveal('.area-2', {
   
    duration: 2000});
    sr.reveal('.area-8', {duration: 4000});

sr.reveal('.area-3', {duration: 2000});
sr.reveal('.area-4', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 2500

})
sr.reveal('.area-4', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 2500

})
sr.reveal('.area-5', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 2500

})
sr.reveal('.area-6', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 3000

})
sr.reveal('.area-7', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 3500

})

