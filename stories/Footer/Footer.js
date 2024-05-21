import "./footer.scss";

export const createFooter = ({ image, links, icons }) => {
  const year = new Date().getFullYear();

  return `
    <footer class="cc--footer">
      <div class="c--footer">
        <div class="navigation-container">
          <div class="f--image">
            <a href="/" aria-label="Back to home">
              <div class="image-container">
                <img src="${image.src}" alt="${image.alt}" />
              </div>
            </a>
          </div>

          <nav class="navigation">
            ${links
              .map(
                (link) => `
                <div class="f--link ${link.active ? "is-active" : ""}">
                  <a href="${link.href}" aria-label="${link.ariaLabel}">
                    ${link.cta}
                  </a>
                </div>
              `
              )
              .join("")}
          </nav>
        </div>

        <div class="info-container">
          <div class="icons-container">
            ${icons
              .map(
                (icon) => `
                  <div class="f--image">
                    <a href="${icon.link.href}" aria-label="${icon.link.ariaLabel}">
                      <div class="image-container">
                        <img src="${icon.src}" alt="${icon.alt}" />
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
