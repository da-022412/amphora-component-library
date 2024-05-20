import "./contact-form.scss";

export const createContactForm = ({ eyebrow, title, description, items }) => {
  return `
    <section class="cc--contact-form">
      <div class="c--contact-form">
        <div class="content-container">
          <div class="f--eyebrow">
            <span>${eyebrow}</span>
          </div>

          <div class="f--section-title">
            <h2>${title}</h2>
          </div>

          <div class="f--description">
            <p>${description}</p>
          </div>

          <ul class="items-container">
            ${items
              .map(
                (item) => `
                  <li class="item">
                    <div class="f--image">
                      <img src="${item.image.src}" alt="${item.image.alt}" />
                    </div>
                    <div class="text-container">
                      <div class="f--cta-title">
                        <h3>${item.title}</h3>
                      </div>
                      <div class="f--description">
                        <p>${item.description}</p>
                      </div>
                    </div>
                  </li>
                `
              )
              .join("")}
          </ul>
        </div>

        <div class="form-container">
          <div class="f--cta-title">
            <h3>Make An Appointment</h3>
          </div>
          <form>
            <fieldset class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Name" required />
            </fieldset>

            <fieldset class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" required />
            </fieldset>

            <fieldset class="form-group">
              <label for="phone">Phone</label>
              <input type="phone" id="phone" name="phone" placeholder="Phone" required />
            </fieldset>

            <fieldset class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="Write message" required></textarea>
            </fieldset>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  `;
};
