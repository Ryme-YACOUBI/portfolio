
function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copied successfully!");
        })
        .catch((error) => {
            console.error("Copy failed:", error);
            alert("Copy failed. Please try again.");
        });
}
