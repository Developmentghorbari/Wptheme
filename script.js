document.addEventListener("DOMContentLoaded", function() {
    const registerButton = document.getElementById("registerButton");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");

    registerButton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    const registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("নিবন্ধন সফল হয়েছে! ধন্যবাদ!");
        modal.style.display = "none";
    });
});
