import "./footer.scss";

export const createFooter = ({ image, items, links }) => {
  const year = new Date().getFullYear();

  return `
    <footer class="cc--footer">
      <div class="c--footer">
        <div class="navigation-container">
          <div class="f--image">
            <a href="/" aria-label="Back to home">
              <div class="image-container">
                <img src="${image.src}" alt="${image.alt}" height="${image.height}" width="${image.width}" />
              </div>
            </a>
          </div>

          <nav class="navigation">
            ${items
              .map(
                (item) => `
                <div class="f--link ${item.active ? "is-active" : ""}">
                  <a href="${item.href}" aria-label="${item.ariaLabel}">
                    ${item.cta}
                  </a>
                </div>
              `
              )
              .join("")}
          </nav>
        </div>

        <div class="info-container">
          <div class="icons-container">
            ${links
              .map(
                (link) => `
                  <div class="f--image">
                    <a href="${link.link.href}" aria-label="${link.link.ariaLabel}">
                      <div class="image-container">
                        <img src="${link.src}" alt="${link.alt}" />
                      </div>
                    </a>
                  </div>
                `
              )
              .join("")}
          </div>

          <div class="legal-container">
            <p>&copy; Copyright ${year} - Example Company</p>
          </div>
        </div>
      </div>
    </footer>
  `;
};
