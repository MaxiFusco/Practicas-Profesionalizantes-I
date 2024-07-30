document.addEventListener('DOMContentLoaded', function() {
    const deleteButton = document.getElementById('eliBtn'); 
    const emailInput = document.getElementById('mail');
    const responseDiv = document.getElementById('response'); 

    if (deleteButton && emailInput && responseDiv) {
        deleteButton.addEventListener('click', async function() {
            const mail = emailInput.value.trim();

            if (!mail) {
                responseDiv.innerHTML = '<p class="error">Por favor, ingresa el correo electrónico.</p>';
                return;
            }

            const formData = new FormData();
            formData.append('mail', mail);

            try {
                const response = await fetch('http://localhost/usuario.php', {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    throw new Error(`Error en la red: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();

                if (data.status === 'success') {
                    responseDiv.innerHTML = `<p class="success">${data.message}</p>`;
                        setTimeout(function() {
                            window.location.href = 'index.html'; 
                        }, 3000); 
                } else {
                    responseDiv.innerHTML = `<p class="error">${data.message}</p>`;
                }
            } catch (error) {
                console.error('Error:', error);
                responseDiv.innerHTML = `<p class="error">Hubo un problema con la solicitud: ${error.message}</p>`;
            }
        });
    } else {
        console.error('Elementos del DOM no encontrados.');
    }
});

