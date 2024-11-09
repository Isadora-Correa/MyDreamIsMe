// MENU MOBILE
const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');

function isMobile() {
    return window.innerWidth <= 992;
}

mobileMenu.addEventListener('click', () => {
    if (isMobile()) toggleNav();
});

function toggleNav() {
    mobileMenu.classList.toggle('active');
    navList.classList.toggle('active');
    navList.style.visibility = navList.classList.contains('active') ? 'visible' : 'hidden';
}

// SEÇÃO P-TECHS
document.addEventListener("DOMContentLoaded", function () {
    const techItems = document.querySelectorAll(".tech-item");

    techItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            techItems.forEach(i => {
                if (i !== item) {
                    const detail = i.querySelector(".tech-detail");
                    if (detail) {
                        detail.classList.remove("active");
                        detail.style.maxHeight = null;
                    }
                }
            });

            const detail = item.querySelector(".tech-detail");
            if (detail) {
                const isActive = detail.classList.contains("active");
                detail.classList.toggle("active", !isActive);
                detail.style.maxHeight = isActive ? null : detail.scrollHeight + "px";
            }
        });
    });
});
