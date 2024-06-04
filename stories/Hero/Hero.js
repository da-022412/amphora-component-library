import "./hero.scss";

export const createHero = ({ eyebrow, title, link, cards }) => {
  return `
    <section class="cc--hero">
      <div class="c--hero">
        <div class="inner-container">
          <div class="text-container">
            <div class="f--eyebrow">
              <span>${eyebrow}</span>
            </div>

            <div class="f--page-title">
              <h1>${title}</h1>
            </div>

            <div class="f--link">
              <a href="${link.href}" aria-label="${link.ariaLabel}">
                ${link.cta}
              </a>
            </div>
          </div>
        </div>

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
      </div>
    </section>
  `;
};
