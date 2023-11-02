
document.getElementById("form__auth").addEventListener("submit", function (event) {
    const emailInput = document.getElementById("mail");
    const passwordInput = document.getElementById("password");
    const nameInput = document.getElementById("name");
    const lastnameInput = document.getElementById("lastname");
    const registroBtn = document.getElementById("registroBtn");
    const errorMensaje = document.getElementById("errorMensaje");

    const email = emailInput.value;
    const password = passwordInput.value;  
    const name = nameInput.value;
    const lastname = lastnameInput.value;

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    let valid = true;

    if (!email.match(emailRegex)) {
        valid = false;
        emailInput.classList.add("invalid");
    } else {
        emailInput.classList.remove("invalid");
    }

    if (!password.match(passwordRegex)) {
        valid = false;
        passwordInput.classList.add("invalid");
    } else {
        passwordInput.classList.remove("invalid");
    }

    if (valid) {
        errorMensaje.style.display = "none";
        registroBtn.removeAttribute("disabled");
        emailInput.value = "";
        passwordInput.value = "";
    } else {
        errorMensaje.style.display = "block";
        registroBtn.setAttribute("disabled", "disabled");
        event.preventDefault();
    }

    const formData = new FormData();
    formData.append("email", email); 
    formData.append("password", password);
    formData.append("name", name);
    formData.append("lastname", lastname);

    fetch('register.php', {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data === 'error') {
            // Manejar el error de registro si es necesario.
        }
    })
    .catch(error => {
        console.error(error);
    });
});
