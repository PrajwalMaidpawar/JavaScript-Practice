// Add an audio beep file (you can change the sound)
const alarmSound = new Audio("https://www.soundjay.com/button/beep-07.wav");

let alarmTime = null;
let alarmTriggered = false;

// Update clock display
setInterval(() => {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let suffix = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  m = m < 10 ? "0" + m : m;

  const currentTime = `${h}:${m} ${suffix}`;
  document.getElementById("time").textContent = currentTime;

  // Trigger alarm if time matches
  if (alarmTime === currentTime && !alarmTriggered) {
    alarmSound.play();
    document.getElementById("time").style.color = "#f00";
    alarmTriggered = true;
  }
}, 1000);

// Set alarm
document.querySelector(".set").addEventListener("click", () => {
  const input = document.getElementById("alarmTime").value;
  if (!input) return alert("Select a time first!");

  let [hour, minute] = input.split(":");
  hour = parseInt(hour);
  const suffix = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  minute = parseInt(minute);
  minute = minute < 10 ? "0" + minute : minute;
  alarmTime = `${hour}:${minute} ${suffix}`;
  alarmTriggered = false;

  alert(`Alarm set for ${alarmTime}`);
});

// Cancel alarm
document.querySelector(".cancel").addEventListener("click", () => {
  alarmTime = null;
  alarmTriggered = false;
  document.getElementById("time").style.color = "#0ff";
  alert("Alarm canceled");
});