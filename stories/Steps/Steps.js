import "./steps.scss";

export const createSteps = ({
  eyebrow,
  title,
  description,
  cards,
  link,
}) => {
  return `
    <section class="cc--steps">
      <div class="c--steps">
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
                      <img src="${card.image.src}" alt="${card.image.alt}" />
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

        <div class="f--link">
          <a href="${link.href}" aria-label="${link.ariaLabel}">
            ${link.cta}
          </a>
        </div>
      </div>
    </section>
  `;
};
