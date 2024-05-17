import "./side-by-side.scss";

export const createHero = ({
  eyebrow,
  title,
  description,
  link,
  items,
  card,
  imageMain,
  imageSecondary,
  cards,
  reverse,
  primary,
}) => {
  const variant = primary ? "" : "secondary";

  return `
    <section class="cc--side-by-side">
      <div class="c--side-by-side ${variant}">
        <div class="inner-container ${reverse === "yes" ? "reverse" : ""}">
          <div class="images-container">
            <div class="f--image">
              <img src="${imageMain.src}" alt="${imageMain.alt}" />
            </div>


            <div class="f--image">
              <img src="${imageSecondary.src}" alt="${imageSecondary.alt}" />
            </div>

            ${
              card
                ? `<div class="card-item">
                <div class="f--cta-title">
                  <h3>${card.title}</h3>
                </div>
                <div class="f--description">
                  <p>${card.description}</p>
                </div>
              </div>`
                : ""
            }

            ${
              cards
                ? `
              <div class="cards-container">
                ${cards
                  .map(
                    (card) => `
                      <div class="card-item">
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

            ${
              items
                ? `
              <ul class="items">
                ${items
                  .map(
                    (item) => `
                      <li class="item">
                        <span>${item.description}</span>
                      </li>
                    `
                  )
                  .join("")}
              </ul>`
                : ""
            }

            ${
              link
                ? `<div class="f--link">
                <a href="${link.href}" aria-label="${link.ariaLabel}">${link.cta}</a>
              </div>`
                : ""
            }

            ${variant === "secondary" ? `
              <div class="f--image">
                <img src="${imageSecondary.src}" alt="${imageSecondary.alt}" />
              </div>
            ` : ""}
          </div>
        </div>
      </div>
    </section>
  `;
};
