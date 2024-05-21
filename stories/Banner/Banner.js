import "./banner.scss";

export const createBanner = ({ title, activeItem }) => {
  return `
    <section class="cc--banner">
      <div class="c--banner">
        <div class="f--page-title">
          <h1>${title}</h1>
        </div>

        <ul class="breadcrumbs">
          <li>
            <a href="/" aria-label="Back to home">
              Home
            </a>
          </li>
          <li>
            <span>${activeItem}</span>
          </li>
        </ul>
      </div>
    </section>
  `;
};
