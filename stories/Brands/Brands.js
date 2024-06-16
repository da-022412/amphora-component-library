import "./brands.scss";

export const createBrands = ({ eyebrow, title, description, cards }) => {
  return `
    <section class="cc--brands">
      <div class="c--brands">
        <div class="text-container">
          <div class="f--eyebrow">
            <span>${eyebrow}</span>
          </div>

          <div class="f--section-title">
            <h2>${title}</h2>
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
