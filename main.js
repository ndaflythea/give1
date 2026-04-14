window.addEventListener('click', () => {
    const audio = document.getElementById('flowerMusic');
    if (audio.paused) {
        audio.play().catch(error => {
            console.log("Autoplay was prevented. Music will start after interaction.");
        });
    }
});

// Optional: Logic to play once the window finishes loading 
// (Note: This may still be blocked by browsers if no click occurs)
window.onload = () => {
  const audio = document.getElementById('flowerMusic');
  audio.volume = 0.5; // Set volume to 50%
};
onload = () =>{
        document.body.classList.remove("container");
};
