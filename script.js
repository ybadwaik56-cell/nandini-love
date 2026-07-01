function showLove() {
    document.getElementById("message").innerHTML = `
    ❤️ I Love You Forever, Nandini ❤️<br><br>

    Dear Nandini,<br><br>

    Every moment with you is a beautiful memory.
    Your smile brightens my darkest days, and your love makes my life complete.
    Thank you for being my happiness, my peace, and my biggest blessing.

    <br><br>

    🌸 Forever Yours,<br>
    <b>Yash ❤️</b>
    `;

    createHeart();
}

function gallery() {
    document.getElementById("photos").scrollIntoView({
        behavior: "smooth"
    });
}

function createHeart() {
    for (let i = 0; i < 25; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.pointerEvents = "none";
        heart.style.transition = "all 3s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.top = "-100px";
            heart.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}