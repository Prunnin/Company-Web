const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide"),
  loginForm = document.querySelector(".login_form"),
  signupForm = document.querySelector(".signup_form"),
  logoutBtn = document.querySelector("#logout"),
  userInfo = document.querySelector("#user-info");

// Simulated login functionality (replace with your actual authentication logic)
function login(email, password) {
  // Simulating successful login
  if (email === "admin@gmail.com" && password === "admin123") {
    return {
      name: "Admin",
    };
  } else {
    return null;
  }
}

// Function to update UI after successful login
function updateUIAfterLogin(user) {
  debugger;
  userInfo.textContent = user.name;
  userInfo.style.display = "inline-block";
  logoutBtn.style.display = "inline-block";
  loginForm.style.display = "none";
  signupForm.style.display = "none";
}

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = loginForm.querySelector("input[type='email']");
  const passwordInput = loginForm.querySelector("input[type='password']");
  const user = login(emailInput.value, passwordInput.value);
  if (user) {
    updateUIAfterLogin(user);
  } else {
    alert("Invalid credentials. Please try again.");
  }
});

logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userInfo.style.display = "none";
  logoutBtn.style.display = "none";
  loginForm.style.display = "block";
  signupForm.style.display = "none";
});

// Function to reset UI state after logging out
function resetUIState() {
  userInfo.style.display = "none";
  logoutBtn.style.display = "none";
  loginBtn.style.display = "inline-block";
  loginForm.style.display = "block";
  signupForm.style.display = "none";
  formOpenBtn.style.display = "inline-block";

  const toggleFormDisplay = (formToShow, formToHide) => {
    formContainer.classList.add("active");
    formToShow.style.display = "block";
    formToHide.style.display = "none";
  };

  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleFormDisplay(signupForm, loginForm);
  });

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleFormDisplay(loginForm, signupForm);
  });

  showCreatePost(false);
}

function showCreatePost(isLoggedIn) {
  const newPost = document.querySelector(".create-post");
  newPost.style.display = isLoggedIn ? "flex" : "none";
}

// Function to update UI after successful login
function updateUIAfterLogin(user) {
  userInfo.textContent = user.name;
  userInfo.style.display = "inline-block";
  userInfo.style.color = "ghostwhite";
  userInfo.style.margin = "16px";
  logoutBtn.style.display = "inline-block";
  loginBtn.style.display = "none";
  loginForm.style.display = "none";
  signupForm.style.display = "none";
  home.classList.remove("show");
  formOpenBtn.style.display = "none";

  // Redirect to blog-login.html after successful login
  window.location.href = "blog-login.html";

  showCreatePost(true);
}

// Function to update UI after successful signup
function updateUIAfterSignup() {
  alert("Sign up success");
}

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Here you would perform the necessary validation and backend processing
  // In this example, we simply call the updateUIAfterSignup function
  updateUIAfterSignup();
});

logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  resetUIState();
});
showCreatePost(false);
// Show the success contact
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element by its ID
  const btnContactUs = document.getElementById("btnContactUs");

  // Add a click event listener to the button
  btnContactUs.addEventListener("click", function () {
    // Show the alert when the button is clicked
    alert("Send message successful");
  });
});
