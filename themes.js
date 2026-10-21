function lum() {
    let btn = document.getElementById("btn_lum");
    let body = document.querySelector("body");

    btn.addEventListener("click", function () {
        body.classList.toggle("dark_mode");

        if (body.classList.contains("dark_mode")) {
            btn.textContent = "☾";
        } else {
            btn.textContent = "☀";
        }

        console.log("Classe du body :", body.className);
    });
}

lum();