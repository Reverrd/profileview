const dropContent = document.getElementsByClassName("dropdown-content")[0];
const menuBtn = document.getElementsByClassName("menu-icon")[0];

menuBtn.addEventListener("click", function() {
    // Toggle the visibility of the dropdown content
    if (dropContent.style.display === "block") {
        dropContent.style.display = "none"; // Hide it if it's already shown
    } else {
        dropContent.style.display = "block"; // Show it if it's hidden
    }
});
