import "./gallery.scss";

export const createGallery = ({ cards }) => {
  return `
    <section class="cc--gallery">
      <div class="c--gallery">
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
