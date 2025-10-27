// COUNTDOWN TIMER
const targetDate = new Date("Dec 25, 2025 18:00:00").getTime();

const countdownTimer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, '0');
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(countdownTimer);
    document.querySelector(".countdown").innerHTML = "<p>Campaign Started!</p>";
  }
}, 1000);

// DONATE BUTTON CLICK
document.getElementById("donateBtn").addEventListener("click", () => {
  window.location.href = "donate.html";
});
