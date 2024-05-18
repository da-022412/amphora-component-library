import "./call-to-action.scss";

export const createCallToAction = ({
  title,
  link,
}) => {
  return `
    <section class="cc--call-to-action">
      <div class="c--call-to-action">
        <div class="f--section-title">
          <h2>${title}</h2>
        </div>

        <div class="f--link">
          <a href="${link.href}" aria-label="${link.ariaLabel}">
            ${link.cta}
          </a>
        </div>
      </div>
    </section>
  `;
};
