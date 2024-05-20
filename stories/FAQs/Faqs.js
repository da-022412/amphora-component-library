import "./faqs.scss";

export const createFaqs = ({ eyebrow, title, cards }) => {
  return `
    <section class="cc--faqs">
      <div class="c--faqs">
        <div class="text-container">
          <div class="title-container">
            <div class="f--eyebrow">
              <span>${eyebrow}</span>
            </div>

            <div class="f--section-title">
              <h2>${title}</h2>
            </div>
          </div>
        </div>

        <div class="accordions-container">
          ${cards
            .map(
              (card) => `
                <div class="accordion-item">
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

    <script>
      let acc = document.getElementsByClassName('accordion-item');
      let i;
      
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
            this.classList.toggle('is-active');
        });
      }
    </script>
  `;
};
