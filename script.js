const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const images = document.querySelectorAll(".section-img");

// cacher toutes les sections sauf hero au début
sections.forEach(section => {
    if (section.id !== "hero") {
        section.style.display = "none";
    }
});

// cacher toutes les images au début
images.forEach(img => img.style.display = "none");

links.forEach(link => {
    link.addEventListener("click", () => {

        const target = link.dataset.section;

        // cacher toutes les sections
        sections.forEach(section => {
            section.style.display = "none";
        });

        // cacher toutes les images
        images.forEach(img => img.style.display = "none");

        // afficher la bonne section
        const sectionToShow = document.getElementById(target);
        if (sectionToShow) {
            sectionToShow.style.display = "block";
        }

        // afficher l'image de la section si elle existe
        const imgToShow = sectionToShow.querySelector(".section-img");
        if (imgToShow) {
            imgToShow.style.display = "block";
        }
    });
});
