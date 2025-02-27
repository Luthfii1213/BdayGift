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

document.getElementById('blowCandle').addEventListener('click', function() {
    let candle = document.getElementById('candle');
    candle.style.background = 'orange';
    document.getElementById('wishMessage').classList.remove('hidden');
    confetti();
});

document.addEventListener('DOMContentLoaded', function () {
    let audio = document.getElementById('background-music');
    audio.volume = 0.1;
    let playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Musik diputar otomatis.");
        }).catch(error => {
            console.log("Pemutaran otomatis diblokir. Silakan klik di mana saja untuk mulai memainkan musik.");
            document.body.addEventListener('click', function() {
                audio.play();
            }, { once: true });
        });
    }
});