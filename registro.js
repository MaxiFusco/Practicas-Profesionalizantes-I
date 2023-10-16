
var formulario1 = document.getElementById('form__auth');
var respuesta = document.getElementById('respuesta');
var contrasena = document.getElementById('password');

function validarContraseña(contrasena) {

    if (contrasena.length < 8) {
        return false;
    }

   else if (!/[A-Z]/.test(contrasena)) {
        return false;
    }

  else if (!/\d/.test(contrasena)) {
        return false;
    }
    return true;
}
if (!validarContraseña(contrasena)) {
    alert("contraseña correcta.");
}else{
    alert("La contraseña es incorrrecta.");
}



formulario1.addEventListener("submit", function(event) {
    if (!validarContraseña(contrasena)) {
        event.preventDefault(); 
    }else{
        alert("La contraseña no cumple con los requisitos.");
    }
    console.log("click registro correcto")

    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;


    const formData = new FormData();
    formData.append("mail", mail);
    formData.append("password", password);
    formData.append("name",name);
    formData.append("lastname", lastname);

    fetch('register.php', {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data==='error'){

        }
    })
    .catch(error => {
        console.error(error);
    });
});