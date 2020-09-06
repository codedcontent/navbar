const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    
    burger.addEventListener("click", () => {
        // Toggle nav
        nav.classList.toggle("nav-active");
        burger.classList.toggle("x-nav");
        burger.classList.toggle("rotate-burger");
        

        // navlinks
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = `nav-link-fade 0.5s ease forwards ${index / 5 + 0.3}s`;
            }
        });
    });

    

};



const app = () => {
    navSlide();

}

app();