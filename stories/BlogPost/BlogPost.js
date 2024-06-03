import "./blog-post.scss";

export const createBlogPost = ({ eyebrow, title, description, image, meta, markup }) => {
  return `
    <section class="cc--blog-post">
      <div class="c--blog-post">
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

        <div class="f--image">
          <img src="${image.src}" alt="${image.alt}" height="1080" width="1920" />
        </div>

        <main class="cc--markup">
          <div class="c--markup">
            <div class="f--eyebrow">
              <span>By ${meta.author}</span>
              <span>${meta.date}</span>
            </div>
            ${markup}
          </div>
        </main>
      </div>
    </section>
  `;
};
