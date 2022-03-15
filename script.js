const d = document,
    $menu = d.querySelector(".menu"),
    $menuIcon = d.querySelector(".menu-hamburguer"),
    $menuLinks = d.querySelectorAll(".nav .menu__link");

d.addEventListener("click", e => {

    $menuLinks.forEach(link => {
        link.classList.remove("menu__link--active")
    });
    if (e.target.matches(".nav .menu__link")) {
        e.target.classList.add("menu__link--active");
    }

    /* ########## MENU MOVIL ########## */
    if (e.target.matches(".menu-hamburguer")) {
        $menu.classList.toggle("menu-visible");
        $menuIcon.textContent = "close";
    }
    if (!$menu.classList.contains("menu-visible")) {
        $menuIcon.textContent = "menu";
    }
    if (e.target.matches(".menu__link")) {
        $menu.classList.remove("menu-visible");
        $menuIcon.textContent = "menu";
    }
});
