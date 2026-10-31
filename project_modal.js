(function () {
    var root = document.documentElement;

    document.querySelectorAll(".project-card").forEach(function (card) {
        var dialog = card.querySelector(".project-modal");
        var openButton = card.querySelector(".project-more");
        var closeButton = card.querySelector(".project-modal__close");

        if (!dialog || !openButton) return;

        function openModal() {
            dialog.showModal();
            root.classList.add("modal-open");
        }

        function closeModal() {
            dialog.close();
        }

        openButton.addEventListener("click", openModal);

        if (closeButton) {
            closeButton.addEventListener("click", closeModal);
        }

        /* Clic sur le fond sombre : fermer */
        dialog.addEventListener("click", function (event) {
            if (event.target === dialog) closeModal();
        });

        /* Se déclenche aussi avec la touche Échap */
        dialog.addEventListener("close", function () {
            root.classList.remove("modal-open");
        });

        /* Clic n'importe où sur la carte : ouvrir */
        card.addEventListener("click", function (event) {
            if (event.target.closest("a, button, dialog")) return;
            openModal();
        });
    });
})();