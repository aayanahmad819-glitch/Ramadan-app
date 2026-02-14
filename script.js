const welcomeScreen = document.getElementById("welcomeScreen");
const loginScreen = document.getElementById("loginScreen");
const ramadanScreen = document.getElementById("ramadanScreen");
const timingModal = document.getElementById("timingModal");
const timingText = document.getElementById("timingText");

const sehriData = `19 Feb 2026  05:24 AM
20 Feb 2026  05:23 AM
21 Feb 2026  05:22 AM`;

const iftarData = `19 Feb 2026  05:56 PM
20 Feb 2026  05:57 PM
21 Feb 2026  05:58 PM`;

function showLogin() {
  welcomeScreen.classList.remove("active");
  loginScreen.classList.add("active");
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("loginMessage");
  const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if(!gmailPattern.test(email)) {
    msg.textContent = "Enter valid Gmail ❌";
  } else if(password !== "ayan4567") {
    msg.textContent = "Wrong Password ❌";
  } else {
    alert("Login Successful 🌙");
    loginScreen.classList.remove("active");
    ramadanScreen.classList.add("active");
  }
}

function showTiming(type) {
  timingText.textContent = type === "sehri" ? sehriData : iftarData;
  timingModal.style.display = "block";
}

function closeModal() {
  timingModal.style.display = "none";
}
