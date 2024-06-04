import "./services.scss";

export const createServices = ({ eyebrow, title, description, cards, primary }) => {
  const variant = primary ? "" : "secondary";

  return `
    <section class="cc--services">
      <div class="c--services ${variant}">
        <div class="text-container">
          <div class="title-container">
            <div class="f--eyebrow">
              <span>${eyebrow}</span>
            </div>

            <div class="f--section-title">
              <h2>${title}</h2>
            </div>
          </div>

          <div class="f--description">
            <p>${description}</p>
          </div>
        </div>

        ${
          cards
            ? `
          <div class="cards-container">
            ${cards
              .map(
                (card) => `
                  <div class="card-item">
                    <div class="f--image">
                      <img src="${card.image.src}" alt="${card.image.alt}" height="${card.image.height}" width="${card.image.width}" />
                    </div>
                    <div class="f--cta-title">
                      <h3>${card.title}</h3>
                    </div>
                    <div class="f--description">
                      <p>${card.description}</p>
                    </div>
                  </div>
                `
              )
              .join("")}
          </div>
        `
            : ""
        }
      </div>
    </section>
  `;
};
