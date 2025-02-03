document.addEventListener("DOMContentLoaded", () => {
  console.log("Script.js cargado");

  // Crear el HTML del formulario
  const formHTML = `
            <div class="contacto is-centered">
            <section class="contact">
              <form id="messageForm">
                <div class="container section__about_me-content">
                  <div class="columns is-vcentered">
                    <div class="column is-7 mb-0-desktop p-5">
                      <h2 class="has-text-left has-mw-xl mt-8 mb-8 mb-12-desktop title is-1 is-size-2-mobile section__about_me-content-title">
                        Escribime
                      </h2>
                    </div>
                    <div class="column">
                      <div class="custom-section">
                        <div class="field">
                          <label class="label">Nombre</label>
                          <div class="control">
                            <input class="input" id="nameInput" name="nombre" type="text" placeholder="Ingresa tu nombre" required>
                          </div>
                          </div>
                          <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                              <input class="input" id="emailInput" name="email" type="email" placeholder="Ingresa tu email" required>
                            </div>
                          </div>
                        <div class="field">
                          <label class="label">Mensaje</label>
                          <div class="control">
                            <textarea class="textarea" id="messageInput" name="mensaje" placeholder="Ingresa tu mensaje" required></textarea>
                          </div>
                        </div>
                        <div class="field">
                          <div class="control">
                           <button class="btn-form" type="submit" id="send-button">
                              <span id="button-text">Enviar</span>
                              <span id="button-spinner" class="icon is-hidden">
                                <i class="fas fa-spinner fa-spin"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>
    `;

  // Agregar el formulario al documento
  const formContainer = document.getElementById("form-container");
  if (formContainer) {
    console.log("Contenedor del formulario encontrado");
    formContainer.innerHTML = formHTML;

    // Esperar un momento para asegurarnos de que el DOM se ha actualizado
    setTimeout(() => {
      const form = document.getElementById("messageForm");
      console.log("Intentando encontrar el formulario después de un delay");

      if (form) {
        console.log("Formulario encontrado y agregando listener");
        form.addEventListener("submit", async function (e) {
          console.log("🚀 Formulario enviado - Dentro del evento submit");
          e.preventDefault();

          // Verificar que los elementos del botón existen
          const buttonText = document.getElementById("button-text");
          const buttonSpinner = document.getElementById("button-spinner");
          const sendButton = document.getElementById("send-button");

          console.log("Elementos del botón:", {
            buttonText: buttonText ? "encontrado" : "no encontrado",
            buttonSpinner: buttonSpinner ? "encontrado" : "no encontrado",
            sendButton: sendButton ? "encontrado" : "no encontrado",
          });

          // Verificar los valores del formulario
          const name = document.getElementById("nameInput").value;
          const email = document.getElementById("emailInput").value;
          const message = document.getElementById("messageInput").value;

          console.log("Valores del formulario:", { name, email, message });

          // Deshabilitar el botón y mostrar spinner
          sendButton.disabled = true;
          buttonText.classList.add("is-hidden");
          buttonSpinner.classList.remove("is-hidden");

          const data = {
            name: name,
            to: email,
            message: message,
          };

          try {
            console.log("Iniciando fetch request...");
            const response = await fetch(
              "https://apx.school/api/utils/email-to-student",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              }
            );

            console.log("Estado de la respuesta:", response.status);

            if (response.ok) {
              const responseData = await response.json();
              console.log("Respuesta exitosa:", responseData);

              // Crear y mostrar la notificación
              const notification = document.createElement("div");
              notification.style.cssText = `
                  position: fixed;
                  top: 20px;
                  right: 20px;
                  background-color: #4CAF50;
                  color: white;
                  padding: 15px;
                  border-radius: 5px;
                  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                  z-index: 1000;
                `;
              notification.textContent = "¡Mensaje enviado con éxito!";
              document.body.appendChild(notification);

              // Eliminar la notificación después de 3 segundos
              setTimeout(() => {
                notification.remove();
              }, 3000);

              // Limpiar el formulario después del éxito
              form.reset();
            } else {
              throw new Error(`Error HTTP: ${response.status}`);
            }
          } catch (error) {
            console.error("Error detallado:", {
              mensaje: error.message,
              nombre: error.name,
              stack: error.stack,
            });
            alert(
              `Error al enviar el mensaje. Por favor, intenta nuevamente más tarde.`
            );
          } finally {
            // Restaurar el botón a su estado original
            sendButton.disabled = false;
            buttonText.classList.remove("is-hidden");
            buttonSpinner.classList.remove("is-hidden");
          }
        });
      } else {
        console.error("No se pudo encontrar el formulario después del delay");
      }
    }, 100);
  } else {
    console.error("No se encontró el elemento con id 'form-container'");
  }
});
