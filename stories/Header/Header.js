import "./header.scss";

export const createHeader = ({ image, items, links, callout1, callout2 }) => {
  return `
    <header class="cc--header">
      <div class="c--header">
        <div class="top-bar">
          <div class="inner-container">
            <div class="f--image">
              <a href="/" aria-label="Back to home">
                <div class="image-container">
                  <img src="${image.src}" alt="${image.alt}" height="${image.height}" width="${image.width}" />
                </div>
              </a>
            </div>

            <ul class="links-container">
              ${links
                .map(
                  (link) => `
                    <li class="link">
                      <a href="${link.href}" aria-label="${link.ariaLabel}">
                        <div class="f--image">
                          <img src="${link.image.src}" alt="${link.image.alt}" height="${link.image.height}" width="${link.image.width}" />
                        </div>
                        <div class="text-container">
                          <div class="f--cta-title">
                            <h3>${link.cta}</h3>
                          </div>
                          <div class="f--description">
                            <p>${link.description}</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  `
                )
                .join("")}
            </ul>

            <div class="f--link">
              <a href="${callout1.href}" aria-label="${callout1.ariaLabel}">
                ${callout1.cta}
              </a>
            </div>
          </div>
        </div>

        <div class="navigation-container">
          <div class="inner-container">
            <nav class="navigation">
              <ul class="mc--menu">
                ${items
                  .map(
                    (item) => `
                    <li class="menu-item ${item.submenu ? "has-submenu" : ""}">
                        ${
                          item.submenu
                            ? `
                          <button type="button" class="submenu-trigger">
                            ${item.cta}
                          </button>
                        `
                            : `
                          <div class="f--link ${item.active ? "is-active" : ""}">
                            <a href="${item.href}" aria-label="${item.ariaLabel}">
                              ${item.cta}
                            </a>
                          </div>
                        `
                        }
                      ${
                        item.submenu
                          ? `
                        <ul class="submenu">
                          ${item.submenu
                            .map(
                              (subitem) => `
                              <li class="submenu-item">
                                <div class="f--link ${subitem.active ? "is-active" : ""}">
                                  <a href="${subitem.href}" aria-label="${subitem.ariaLabel}">
                                    ${subitem.cta}
                                  </a>
                                </div>
                              </li>
                            `
                            )
                            .join("")}
                        </ul>`
                          : ""
                      }
                    </li>
                  `
                  )
                  .join("")}
                </ul>
            </nav>

            <div class="link-container">
              <a href="${callout2.href}" aria-label="${callout2.ariaLabel}">
                <div class="f--image">
                  <img src="${callout2.image.src}" alt="${callout2.image.alt}" />
                </div>
                <div class="text-container">
                  <div class="f--description">
                    <p>${callout2.description}</p>
                  </div>
                  <div class="f--cta-title">
                    <h3>${callout2.cta}</h3>
                  </div>
                </div>
              </a>
            </div>

            <button type="button" class="mobile-menu-trigger">
              <svg version="1.1" class="icon-hamburger" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                y="0px" viewBox="0 0 35 35" enable-background="new 0 0 35 35" xml:space="preserve">
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="M5,22.5h25v2H5V22.5z M5,16.5h25v2H5
                V16.5z M5,10.5h25v2H5V10.5z"/>
              </svg>
              <svg height="27" width="27" aria-label="Close Icon" class="icon-close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 35 35" enable-background="new 0 0 35 35" xml:space="preserve">
                <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" points="25,8.6 26.4,10 18.9,17.5 26.4,25 
                25,26.4 17.5,18.9 10,26.4 8.6,25 16.1,17.5 8.6,10 10,8.6 17.5,16.1 "/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <script>
      const mobileMenuTrigger = document.querySelector('.mobile-menu-trigger');
      const navigation = document.querySelector('.navigation');
      const submenuTrigger = document.querySelectorAll('.submenu-trigger');

      mobileMenuTrigger.addEventListener('click', () => {
        mobileMenuTrigger.classList.toggle('is-open');
        navigation.classList.toggle('is-open');
      });

      submenuTrigger.forEach((trigger) => {
        trigger.addEventListener('click', () => {
          const submenu = trigger.nextElementSibling;
          if (submenu && submenu.classList.contains('submenu')) {
            submenu.classList.toggle('is-open');
          }
        });
      });
    </script>
  `;
};
