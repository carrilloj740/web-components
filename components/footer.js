const footer = document.createElement("footer");

footer.innerHTML = `
   <div class="footer">
        <footer class=" footer__section">
            <div class="container has-text-centered">
                <!-- Logo -->
                <div class="mb-4">
                    <img src="../assets/logo.png" alt="" class="logo">
                </div>

                <!-- Navigation Menu -->
                <div class="mb-4">
                    <div class="is-flex is-justify-content-center">
                        <a href="./index.html" class="mx-3 has-text-white is-flex is-align-items-center">
                            <span class="icon mr-1">
                                <i class="fas fa-home"></i>
                            </span>
                            <span>inicio</span>
                        </a>
                        <a href="./servicios.html" class="mx-3 has-text-white is-flex is-align-items-center">
                            <span class="icon mr-1">
                                <i class="fas fa-user"></i>
                            </span>
                            <span>Servicios</span>
                        </a>
                        <a href="./contacto.html" class="mx-3 has-text-white is-flex is-align-items-center">
                            <span class="icon mr-1">
                                <i class="fas fa-phone"></i>
                            </span>
                            <span>Contacto</span>
                        </a>
                    </div>
                </div>

                <!-- Social Media Icons -->
                <div class="mb-4">
                    <div class="is-flex is-justify-content-center">
                        <a href="#" class="mx-2 has-text-white">
                            <span class="icon">
                                <i class="fab fa-linkedin"></i>
                            </span>
                        </a>
                        <a href="#" class="mx-2 has-text-white">
                            <span class="icon">
                                <i class="fab fa-github"></i>
                            </span>
                        </a>
                        <a href="#" class="mx-2 has-text-white">
                            <span class="icon">
                                <i class="fab fa-twitter"></i>
                            </span>
                        </a>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="has-text-grey-light is-size-7">
                    ©2025 | Portfolio | Jc
                </div>
            </div>
        </footer>

    </div>
`;

const contenedorFooter = document.getElementById("contenedor-footer");

contenedorFooter.appendChild(footer);
