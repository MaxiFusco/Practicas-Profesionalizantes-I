document.getElementById("form__auth").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const nameInput = document.getElementById("name");
    const lastnameInput = document.getElementById("lastname");
    const edadInput = document.getElementById("edad");
    const actividadInput = document.getElementById("actividad");
    const añosexpInput = document.getElementById("añosexp");
    const sueldoInput = document.getElementById("sueldo");
    const localidadInput = document.getElementById("localidad");
    const messages = document.getElementById("messages");

    messages.innerHTML = ''; 
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    let isValid = true;

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const name = nameInput.value.trim();
    const lastname = lastnameInput.value.trim();
    const edad = edadInput.value.trim();
    const actividad = actividadInput.value.trim();
    const añosexp = añosexpInput.value.trim();
    const sueldo = sueldoInput.value.trim();
    const localidad = localidadInput.value.trim();

    
    if (!email) {
        messages.innerHTML += '<p class="error">El correo electrónico es obligatorio.</p>';
        isValid = false;
    } else if (!email.match(emailRegex)) {
        messages.innerHTML += '<p class="error">El correo electrónico no es válido.</p>';
        isValid = false;
    }
    if (!password) {
        messages.innerHTML += '<p class="error">La contraseña es obligatoria.</p>';
        isValid = false;
    } else if (!password.match(passwordRegex)) {
        messages.innerHTML += '<p class="error">La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula y un número.</p>';
        isValid = false;
    }


    const fields = [
        { value: name, name: 'nombre' },
        { value: lastname, name: 'apellido' },
        { value: edad, name: 'edad' },
        { value: actividad, name: 'actividad' },
        { value: añosexp, name: 'años de experiencia' },
        { value: sueldo, name: 'sueldo' },
        { value: localidad, name: 'localidad' }
    ];

    fields.forEach(field => {
        if (!field.value) {
            messages.innerHTML += `<p class="error">El ${field.name} es obligatorio.</p>`;
            isValid = false;
        }
    });

    if (isValid) {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("name", name);
        formData.append("lastname", lastname);
        formData.append("edad", edad);
        formData.append("actividad", actividad);
        formData.append("añosexp", añosexp);
        formData.append("sueldo", sueldo);
        formData.append("localidad", localidad);

        fetch('http://localhost/modificar.php', {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                messages.innerHTML += `<p class="error">${data.error}</p>`;
            } else if (data.status === "success") {
                messages.innerHTML = '<p class="success">¡Datos actualizados exitosamente!</p>';
                document.getElementById("form__auth").reset();
            } else {
                messages.innerHTML += '<p class="error">Respuesta inesperada del servidor.</p>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            messages.innerHTML += '<p class="error">Hubo un problema con la solicitud.</p>';
        });
    }
});
