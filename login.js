var formulario1 = document.getElementById('form__auth');

function validarInicioSesion() {
    var usuario = document.getElementById("mail").value;
    var contraseña = document.getElementById("password").value;
}
formulario1.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("click registro correcto")

    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;


    const formData = new FormData();
    formData.append("mail", mail);
    formData.append("password", password);

    fetch('login.php', {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data==='correcto'){
            window.location.href = "usuario.html";
        }
    })
    .catch(error => {
        console.error(error);
    });
});