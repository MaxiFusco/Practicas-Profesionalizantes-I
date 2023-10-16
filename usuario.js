var formulario1 = document.getElementById('form__auth');


formulario1.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("click registro correcto")

    const nac = document.getElementById("nac").value;
    const number = document.getElementById("number").value;
    const province = document.getElementById("province").value;
    const localidad = document.getElementById("localidad").value;
    const job = document.getElementById("job").value;
    const education = document.getElementById("education").value;
    const experiencie = document.getElementById("experiencie").value;
  



    const formData = new FormData();
    formData.append("nac", nac);
    formData.append("number", number);
    formData.append("province",province);
    formData.append("localidad", localidad);
    formData.append("job", job);
    formData.append("education",education);
    formData.append("experiencie", experiencie);

    fetch('usuario.php', {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        if(data==='error'){
         
        }
    })
    .catch(error => {
        console.error(error);
    });
});