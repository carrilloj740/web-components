async function fetchPortfolioData() {
  try {
    const response = await fetch(
      "https://cdn.contentful.com/spaces/ae1vl7smhntt/environments/master/entries?access_token=dS-ovniQMA0Pl1vZm9z0qSfv8ijzm6XEANXdniTZfY4&content_type=portfolioApx"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Accedemos a los campos
    const titleBanner = data.items[0]?.fields?.titleBanner || "Title not found";

    const aboutmeTitle =
      data.items[0]?.fields?.aboutmeTitle || "About me title not found";

    const aboutmeDesc =
      data.items[0]?.fields?.aboutmeDesc || "About me description not found";

    const servicesTitle =
      data.items[0]?.fields?.sectionServicesTitle ||
      "About me description not found";

    const serviceTitleOne =
      data.items[0]?.fields?.servicesTitleOne ||
      "About me description not found";

    const sectionServicesDescOne =
      data.items[0]?.fields?.sectionServicesDescOne ||
      "About me description not found";

    const serviceTitleTwo =
      data.items[0]?.fields?.servicesTitleTwo ||
      "About me description not found";

    const sectionServicesDescTwo =
      data.items[0]?.fields?.sectionServicesDescTwo ||
      "About me description not found";

    const serviceTitleThree =
      data.items[0]?.fields?.servicesTitleThree ||
      "About me description not found";

    const sectionServicesDescThree =
      data.items[0]?.fields?.sectionServicesDescThree ||
      "About me description not found";

    // Reemplazar contenido en el HTML
    const htmlContent = document.body.innerHTML;
    document.body.innerHTML = htmlContent
      .replace("{{titleBanner}}", titleBanner)
      .replace("{{aboutmeTitle}}", aboutmeTitle)
      .replace("{{aboutmeDesc}}", aboutmeDesc)
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
}

main();
