document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("changeColorBtn");
    
    button.addEventListener("click", function () {
        const colors = ["#f4f4f4", "#ffcccb", "#d4edda", "#cce5ff", "#fff3cd"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});
