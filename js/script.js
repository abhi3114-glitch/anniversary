function openEnvelope() {
    let envelopeTop = document.querySelector(".flap");
    let letter = document.querySelector(".letter");
    let envelope = document.querySelector(".envelope-container");
    let photos = document.querySelectorAll(".photo");
    let gallery = document.querySelector(".photo-gallery");

    // Open Envelope Animation
    envelopeTop.style.transform = "rotateX(180deg)";
    letter.style.opacity = "0";

    setTimeout(() => {
        envelope.style.opacity = "0"; // Smoothly fade out instead of disappearing instantly
        setTimeout(() => {
            envelope.style.display = "none"; // Hide completely after fading
            gallery.style.visibility = "visible";

            // Animate Photos One by One
            photos.forEach((photo, index) => {
                setTimeout(() => {
                    photo.classList.remove("hidden");
                    photo.style.opacity = "1";
                    photo.style.transform = `translateY(0px) rotate(${index % 2 === 0 ? '-10deg' : '10deg'})`;
                }, index * 500); // Delay each photo for better effect
            });
        }, 500); // Delay hiding envelope after fade-out
    }, 1000);
}

document.getElementById("bunnyTalk").addEventListener("click", function() {
    // Stop AI Voice
    speechSynthesis.cancel();

    // Restart and Play Recorded Voice
    let customVoice = document.getElementById("customVoice");
    customVoice.currentTime = 0; // Ensure it plays from the beginning
    customVoice.play();

    // Bunny Jump Animation Using Keyframes
    let bunny = document.getElementById("bunny");
    bunny.classList.add("jump"); // Add jump animation
    setTimeout(() => { bunny.classList.remove("jump"); }, 500); // Remove class after jump
});
