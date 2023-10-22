let registration_div = document.getElementById("registration-div");
let signup = document.getElementById("signup");
let signin_go = document.getElementById("signin-go");


let login_div = document.getElementById("login-div");
let signin = document.getElementById("signin");
let signup_go = document.getElementById("signup-go");


// Hide login part
login_div.style.display = "none";

// SignInGo
signin_go.addEventListener("click", function() {
    login_div.style.display = "block";
    registration_div.style.display = "none";
});

// SignUpGo
signup_go.addEventListener("click", function() {
    registration_div.style.display = "block";
    login_div.style.display = "none";

});


signup.addEventListener("click", function() {
    alert("SIGN UP!");
});


signin.addEventListener("click", function() {
    alert("SIGN IN!");
});


