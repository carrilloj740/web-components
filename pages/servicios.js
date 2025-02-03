const servicios = document.createElement("div");

servicios.innerHTML = `
     <section class="section section__services" id="servicios">
        <!-- Contenedor personalizado -->
        <div class="custom-section">
            <h1 class="title is-1">{{servicesTitle}}</h1>

            <div class="columns is-multiline">
                <!-- Card 1: Desarrollo de páginas web -->
                <div class="column is- mt-6">
                    <div class="card">
                        <img src="./assets/code-1839406_1280.jpg" alt="" class="p-5 img-card">
                        <div class="card-content">
                            <h2 class="title mt-3 is-4">{{serviceTitleOne}}</h2>
                            <p class="section__services-text">
                                {{sectionServicesDescOne}}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Animaciones para webs -->
                <div class="column is-4 mt-6 ">
                    <div class="card">
                        <img src="./assets/web-design-internet-website-responsive-software-concept.jpg" alt="" class="p-5">
                        <div class="card-content">
                            <h2 class="title mt-3 is-4">{{serviceTitleTwo}}</h2>
                            <p class="section__services-text">
                                {{sectionServicesDescTwo}}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Desarrollo de apps -->
                <div class="column is-4 mt-6">
                    <div class="card">
                        <img src="./assets/startup-849805_1920.jpeg" alt="" class="p-5 img-card">


                        <div class="card-content">
                            <h2 class="title mt-3 is-4">{{serviceTitleThree}}</h2>
                            <p class="section__services-text">
                                {{sectionServicesDescThree}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

const contenedorServicios = document.getElementById("section-servicios");

contenedorServicios.appendChild(servicios);

async function fetchPortfolioData() {
  try {
    const response = await fetch(
      "https://cdn.contentful.com/spaces/ae1vl7smhntt/environments/master/entries?access_token=dS-ovniQMA0Pl1vZm9z0qSfv8ijzm6XEANXdniTZfY4&content_type=portfolioApx"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const servicesTitle =
      data.items[0]?.fields?.sectionServicesTitle || " field not found";

    const serviceTitleOne =
      data.items[0]?.fields?.servicesTitleOne || " field not found";

    const sectionServicesDescOne =
      data.items[0]?.fields?.sectionServicesDescOne || " field not found";

    const serviceTitleTwo =
      data.items[0]?.fields?.servicesTitleTwo || " field not found";

    const sectionServicesDescTwo =
      data.items[0]?.fields?.sectionServicesDescTwo || " field not found";

    const serviceTitleThree =
      data.items[0]?.fields?.servicesTitleThree || " field not found";

    const sectionServicesDescThree =
      data.items[0]?.fields?.sectionServicesDescThree || " field not found";

    // Reemplazar contenido en el HTML
    const htmlContent = document.body.innerHTML;
    document.body.innerHTML = htmlContent

      .replace("{{servicesTitle}}", servicesTitle)
      .replace("{{serviceTitleOne}}", serviceTitleOne)
      .replace("{{sectionServicesDescOne}}", sectionServicesDescOne)
      .replace("{{serviceTitleTwo}}", serviceTitleTwo)
      .replace("{{sectionServicesDescTwo}}", sectionServicesDescTwo)

      .replace("{{serviceTitleThree}}", serviceTitleThree)
      .replace("{{sectionServicesDescThree}}", sectionServicesDescThree);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);

    // Mensaje de error por defecto en el caso de fallo
    document.body.innerHTML = document.body.innerHTML
      .replace("{{titleBanner}}", "Error loading title")
      .replace("{{aboutmeTitle}}", "Error loading about me title")
      .replace("{{aboutmeDesc}}", "Error loading about me description");
  }
}

async function main() {
  await fetchPortfolioData();
  // contactComponent(document.querySelector(".form-container"));
}

main();
