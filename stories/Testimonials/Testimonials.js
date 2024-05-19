import "./testimonials.scss";

export const createTestimonials = ({ eyebrow, title, description, cards }) => {
  return `
    <section class="cc--testimonials">
      <div class="c--testimonials">
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

        <div class="cards-container">
          ${cards
            .map(
              (card) => `
                <div class="card-item">
                  <span class="item-quote">“</span>
                  <div class="f--description">
                    <p>${card.description}</p>
                  </div>
                  <div class="f--cta-title">
                    <h3>${card.title}</h3>
                  </div>
                  <span class="item-credit">${card.credit}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
};
