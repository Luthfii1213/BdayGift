document.getElementById("openGift").addEventListener("click", showGiftBox);

function showGiftBox() {
    const giftBox = document.getElementById("giftBox");
    const giftImg = document.querySelector(".gift-img");
    giftBox.classList.remove("hidden");
    giftImg.classList.add("show");
    confettiEffect();
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
}`;
document.head.appendChild(style);

function confettiEffect() {
    confetti({
        particleCount: 250,
        spread: 100,
        origin: { y: 0.6 }
    });
}