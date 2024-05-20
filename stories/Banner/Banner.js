import "./banner.scss";

export const createBanner = ({ title, link }) => {
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
            <a href="${link.href}" aria-label="${link.ariaLabel}">
              ${link.cta}
            </a>
          </li>
        </ul>
      </div>
    </section>
  `;
};
