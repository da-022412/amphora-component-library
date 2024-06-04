import "./blog-posts.scss";

export const createBlogPosts = ({ eyebrow, title, description, cards }) => {
  return `
    <section class="cc--blog-posts">
      <div class="c--blog-posts">
        <div class="text-container">
          <div class="title-container">
            <div class="f--eyebrow">
              <span>${eyebrow}</span>
            </div>

            <div class="f--section-title">
              <h2>${title}</h2>
            </div>
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
                  <a href="${card.link}">
                    <div class="f--image">
                      <img src="${card.image.src}" alt="${card.image.alt}" height="${card.image.height}" width="${card.image.width}" />
                    </div>
                    <div class="f--cta-title">
                      <h3>${card.title}</h3>
                    </div>
                  </a>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
};
