document.getElementById("botonregistro").addEventListener("click", function() {
    this.classList.add("animate");

    this.addEventListener("animationend", function() {
        this.classList.remove("animate");
    });
});


var formulario1 = document.getElementById('form__auth');

formulario1.addEventListener("submit", function(event) {
    event.preventDefault();
    

    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
   
    if (!mail || !password) {
        alert("Todos los campos son requeridos.");
        return;
    }

    const formData = new FormData();
    formData.append("mail", mail);
    formData.append("password", password);

   

    fetch('http://localhost/login.php', {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('respuesta no valida');
        }
        return response.json();  
    })
    .then(data => {
        console.log(data);  
        if (data.status === 'success') {  
            window.location.href = "usuario.html"; 
        } else {
            document.getElementById('messages').innerHTML = `<p class="error">${data.message}</p>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);  
        document.getElementById('messages').innerHTML = '<p class="error">Hubo un problema con la solicitud.</p>';
    });
});