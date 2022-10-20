const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "sankey901@solutions.com" && password === "mindset") {

        window.location = "welcome.html";
        removeErrorMessage();
    } else if (username !== "" && password !== "") {
        displayErrorMessage();
    }
})

const displayErrorMessage = () => {
    let loginErrorSection = document.getElementById('login-error-msg-holder');
    if (loginErrorSection) {
        return;
    }
    loginErrorSection = document.createElement('div');
    loginErrorSection.id = 'login-error-msg-holder';
    loginErrorSection.innerHTML = '<p id="login-error-msg">Invalid username or password</p>';
    loginForm.insertBefore(loginErrorSection, loginButton.nextSibling);
}

const removeErrorMessage = () => {
    const loginErrorSection = document.getElementById('login-error-msg-holder');
    if (loginErrorSection) {
        loginForm.removeChild(loginErrorSection);
    }
}
