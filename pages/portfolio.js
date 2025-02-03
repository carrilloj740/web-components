const portfolio = document.createElement("div");

portfolio.innerHTML = `
     <section class="section section__services" id="servicios">
        <!-- Contenedor personalizado -->
        <div class="custom-section">
            <h1 class="title is-1">{{portolioSectionTitle}}</h1>

            <div class="columns is-multiline">
                <!-- Card 1: Desarrollo de páginas web -->
                <div class="column is- mt-6">
                    <div class="card">
                        <img src="./assets/trabajo1.png" alt="" class="p-5">
                        <div class="card-content">
                            <h2 class="title mt-3 is-4">{{portolioCardOneTitle}}</h2>
                            <p class="section__services-text">
                                {{portolioCardOneDesc}}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Animaciones para webs -->
                <div class="column is-4 mt-6 ">
                    <div class="card">
                        <img src="./assets/trabajo2.png" alt="" class="p-5">
                        <div class="card-content">
                            <h2 class="title mt-3 is-4">{{portolioCardTwoTitle}}</h2>
                            <p class="section__services-text">
                                {{portolioCardTwoDesc}}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Desarrollo de apps -->
                <div class="column is-4 mt-6">
                    <div class="card">
                        <img src="./assets/trabajo3.png" alt="" class="p-5">

                        <div class="card-content">
                            <h2 class="title mt-3 is-4">{{portolioCardThreeTitle}}</h2>
                            <p class="section__services-text">
                                {{portolioCardThreeDesc}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

const contenedorServicios = document.getElementById("section-portfolio");

contenedorServicios.appendChild(portfolio);

async function fetchPortfolioData() {
  try {
    const response = await fetch(
      "https://cdn.contentful.com/spaces/ae1vl7smhntt/environments/master/entries?access_token=dS-ovniQMA0Pl1vZm9z0qSfv8ijzm6XEANXdniTZfY4&content_type=portfolioApx"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const portolioSectionTitle =
      data.items[0]?.fields?.portolioSectionTitle || " field not found";

    const portolioCardOneTitle =
      data.items[0]?.fields?.portolioCardOneTitle || " field not found";

    const portolioCardOneDesc =
      data.items[0]?.fields?.portolioCardOneDesc || " field not found";

    const portolioCardTwoTitle =
      data.items[0]?.fields?.portolioCardTwoTitle || " field not found";

    const portolioCardTwoDesc =
      data.items[0]?.fields?.portolioCardTwoDesc || " field not found";

    const portolioCardThreeTitle =
      data.items[0]?.fields?.portolioCardThreeTitle || " field not found";

    const portolioCardThreeDesc =
      data.items[0]?.fields?.portolioCardThreeDesc || " field not found";

    // Reemplazar contenido en el HTML
    const htmlContent = document.body.innerHTML;
    document.body.innerHTML = htmlContent

      .replace("{{portolioSectionTitle}}", portolioSectionTitle)
      .replace("{{portolioCardOneTitle}}", portolioCardOneTitle)
      .replace("{{portolioCardOneDesc}}", portolioCardOneDesc)
      .replace("{{portolioCardTwoTitle}}", portolioCardTwoTitle)
      .replace("{{portolioCardTwoDesc}}", portolioCardTwoDesc)

      .replace("{{portolioCardThreeTitle}}", portolioCardThreeTitle)
      .replace("{{portolioCardThreeDesc}}", portolioCardThreeDesc);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);

    // Mensaje de error por defecto en el caso de fallo
    document.body.innerHTML = document.body.innerHTML.replace(
      "{{portolioSectionTitle}}",
      "Error loading title"
    );
  }
}

async function main() {
  await fetchPortfolioData();
}

main();
