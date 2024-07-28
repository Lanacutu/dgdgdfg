function popBalloon(message, balloonElement) {
  const popSound = document.getElementById('pop-sound');
  popSound.play(); // Play pop sound

  // Add pop animation
  balloonElement.classList.add('pop-animation');
  
  // Hide the balloon after the animation
  setTimeout(() => {
    balloonElement.style.display = 'none'; // Hide balloon
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = `<p>${message}</p>`;
    messageElement.classList.add('show'); // Show message
  }, 500); // Duration of the pop animation
}