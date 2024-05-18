import "./why-choose-us.scss";

export const createWhyChooseUs = ({
  eyebrow,
  title,
  description,
  link,
  images,
  cards,
}) => {
  return `
    <section class="cc--why-choose-us">
      <div class="c--why-choose-us">
        <div class="inner-container">
          <div class="images-container">
            ${images
              .map(
                (image) => `
                  <div class="f--image">
                    <img src="${image.src}" alt="${image.alt}" />
                  </div>
                `
              )
              .join("")}
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

            <ul class="cards-container">
              ${cards
                .map(
                  (card) => `
                    <li class="card-item">
                      <div class="title-container">
                        <div class="f--image">
                          <img src="${card.image.src}" alt="${card.image.alt}" />
                        </div>
                        <div class="f--cta-title">
                          <h3>${card.title}</h3>
                        </div>
                      </div>
                      <div class="f--description">
                        <p>${card.description}</p>
                      </div>
                    </li>
                  `
                )
                .join("")}
            </ul>
  
            <div class="f--link">
              <a href="${link.href}" aria-label="${link.ariaLabel}">${link.cta}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
