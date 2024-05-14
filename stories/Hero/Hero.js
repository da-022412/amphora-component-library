import "./hero.scss";

export const createHero = ({ eyebrow, title, cards }) => {
  return `
    <section class="cc--hero">
      <div class="c--hero">
        <div class="f--eyebrow">
          <span>${eyebrow}</span>
        </div>

        <div class="f--page-title">
          <h1>${title}</h1>
        </div>

        <div class="cards">
          ${cards
            .map(
              (card) => `
                <div class="card">
                  <img src="${card.image}" alt="${card.title}" />
                  <h2>${card.title}</h2>
                  <p>${card.description}</p>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
};
