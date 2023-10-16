
var formulario1 = document.getElementById('form__auth');
var respuesta = document.getElementById('respuesta');

formulario1.addEventListener("submit", function(event) {
    event.preventDefault();
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