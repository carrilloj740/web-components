const header = document.createElement("header");

header.innerHTML = `
   <header class="header">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand ">
                <!-- Logo -->
                <img src="../assets/logo.png" class="logo" alt="" srcset="">

                <a class="navbar-burger" 
                   aria-label="menu" 
                   aria-expanded="false"
                   data-target="navMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <!-- Menú de navegación -->
            <div id="navMenu" class="navbar-menu ">
                <div class="navbar-end">
                    <a class="navbar-item" href="./index.html">
                        Inicio
                    </a>
                    <a class="navbar-item" href="./portfolio.html">
                        Portfolio
                    </a>

                    <a class="navbar-item" href="./servicios.html">
                        Servicios
                    </a>

                    <a class="navbar-item" href="./contacto.html">
                        Contactos
                    </a>
                </div>
            </div>
        </nav>
    </header>
`;

// Seleccionar el contenedor donde se añadirá el header
const contenedor = document.getElementById("header");

// Añadir el header al contenedor
contenedor.appendChild(header);

// Asegurarnos que el código se ejecute después de que el contenido esté disponible
setTimeout(() => {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.querySelector("#navMenu");

  if (burger && menu) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  }
}, 100);
