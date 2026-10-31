function lum() {
    let btn = document.getElementById("btn_lum");
    let body = document.querySelector("body");

    /* Applique le thème (classe + icône du bouton) */
    function appliquerTheme(sombre) {
        body.classList.toggle("dark_mode", sombre);
        document.documentElement.classList.toggle("dark_mode", sombre);
        btn.textContent = sombre ? "☾" : "☀";
    }

    /* Au chargement : on relit le thème mémorisé */
    let themeSauvegarde = null;
    try {
        themeSauvegarde = localStorage.getItem("theme");
    } catch (e) {}

    appliquerTheme(themeSauvegarde === "dark");

    /* Au clic : on bascule et on mémorise */
    btn.addEventListener("click", function () {
        let sombre = !body.classList.contains("dark_mode");

        appliquerTheme(sombre);

        try {
            localStorage.setItem("theme", sombre ? "dark" : "light");
        } catch (e) {}
    });
}

lum();