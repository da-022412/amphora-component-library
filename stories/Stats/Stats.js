import "./stats.scss";

export const createStats = ({ cards }) => {
  return `
    <section class="cc--stats">
      <div class="c--stats">
        <ul class="cards-container">
          ${cards
            .map(
              (card) => `
                <li class="card-item">
                  <div class="f--image">
                    <img src="${card.image.src}" alt="${card.image.alt}" />
                  </div>
                  <div class="text-container">
                    <div class="f--cta-title">
                      <h3>${card.title}</h3>
                    </div>
                    <div class="f--description">
                      <p>${card.description}</p>
                    </div>
                  </div>
                </li>
              `
            )
            .join("")}
        </ul>
      </div>
    </section>
  `;
};
