import { createBlogPost } from "./BlogPost";

export default {
  title: "Blog Post",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createBlogPost({ ...args });
  },
  argTypes: {
    eyebrow: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    cards: { control: "array" },
  },
};

export const Primary = {
  args: {
    primary: true,
    eyebrow: "Eyebrow Lorem Ipsum",
    title: "Title Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus. Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo consectetur felis augue.",
    image: {
      src: "https://picsum.photos/1920/1080",
      alt: "Alt 1",
    },
    meta: {
      date: "January 1, 2021",
      author: "Author Name",
    },
    markup: `<p class=\'large\'><a href=\'#\'>Cras dignissim mauris bibendum</a> aliquet volutpat. <strong>In venenatis id neque quis</strong> facilisis. <em>In fermentum</em> facilisis arcu eget lacinia. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat. Cras dignissim mauris bibendum aliquet volutpat. In venenatis id neque quis facilisis. In fermentum facilisis arcu eget lacinia. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat.</p><p><a href=\'#\'>Cras dignissim mauris bibendum</a> aliquet volutpat. <strong>In venenatis id neque quis</strong> <em>In fermentum</em> facilisis. In fermentum facilisis arcu eget lacinia. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat. Cras dignissim mauris bibendum aliquet volutpat. In venenatis id neque quis facilisis. In fermentum facilisis arcu eget lacinia. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat.</p><blockquote><p>An impressive pull quote from this article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper, nulla ac molestie suscipit, neque justo euismod mauris, dignissim finibus justo lacus quis nibh.”</p></blockquote><h2>H2 Lorem Ipsum</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">Pellentesque at mi libero.</a> Pellentesque tincidunt lacus neque, nec ornare massa porta non. Phasellus risus erat, ornare vel tupis ac, elementum egestas risus. Suspendisse a velit sapien. Curabitur at sodales massa, eu pretium risus. Aenean lectus leo, posuere eget luctus sagittis, mollis eu arcu. Praesent arcu enim, fingilla vel pharetra facilisis.</p><h3>H3 Lorem Ipsum</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">Pellentesque at mi libero.</a> Pellentesque tincidunt lacus neque, nec ornare massa porta non. Phasellus risus erat, ornare vel tupis ac, elementum egestas risus. Suspendisse a velit sapien. Curabitur at sodales massa, eu pretium risus. Aenean lectus leo, posuere eget luctus sagittis, mollis eu arcu. Praesent arcu enim, fingilla vel pharetra facilisis.</p><p><a class=\'cta-link\' href="#">Visit A Page</a></p><p>Bold, italic, in-line link. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in varius purus. Nullam ut sodales ante. Fusce justo nisi, suscipit a lacus et, posuere sagittus ex. Nulla convallis ante elit, at consequat ipsum ultricies ut. Alliquam erat volputat.</p><p>Cras dignissim mauris bibendum aliquet volutpat. In venenatis id neque quis facilisis. In fermentum facilisis arcu eget lacinia. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat.</p><div class="align-center"><div><div><picture><img data-src="https://picsum.photos/1200/675" class=" lazyloaded" alt="Image Alt Text4" src="https://picsum.photos/1200/675"></picture></div></div></div><h4>H4 Lorem Ipsum</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in varius purus. Nullam ut sodales ante. Fusce justo nisi, suscipit a lacus et, posuere sagittus ex. Nulla convallis ante elit, at consequat ipsum ultricies ut. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat.</p><div class="align-left"><div><div><picture><img data-src="https://picsum.photos/1920/1080" class=" lazyloaded" alt="Image Alt Text4" src="https://picsum.photos/1920/1080"></picture></div></div></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in varius purus. Nullam ut sodales ante. Fusce justo nisi, suscipit a lacus et, posuere sagittus ex. Nulla convallis ante elit, at consequat ipsum ultricies ut. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in varius purus. Nullam ut sodales ante. Fusce justo nisi, suscipit a lacus et, posuere sagittus ex. Nulla convallis ante elit, at consequat ipsum ultricies ut. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in varius purus. Nullam ut sodales ante. Fusce justo nisi, suscipit a lacus et, posuere sagittus ex. Nulla convallis ante elit, at consequat ipsum ultricies ut. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in varius purus. Nullam ut sodales ante. Fusce justo nisi, suscipit a lacus et, posuere sagittus ex. Nulla convallis ante elit, at consequat ipsum ultricies ut. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in varius purus. Nullam ut sodales ante. Fusce justo nisi, suscipit a lacus et, posuere sagittus ex. Nulla convallis ante elit, at consequat ipsum ultricies ut. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in varius purus. Nullam ut sodales ante. Fusce justo nisi, suscipit a lacus et, posuere sagittus ex. Nulla convallis ante elit, at consequat ipsum ultricies ut. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat.</p><figure class="align-right"><div><div><picture><img data-src="https://picsum.photos/1920/1080" class=" lazyloaded" alt="Image Alt Text4" src="https://picsum.photos/1920/1080"></picture></div></div><figcaption>An image floated to the right with optional caption. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</figcaption></figure><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in varius purus. Nullam ut sodales ante. Fusce justo nisi, suscipit a lacus et, posuere sagittus ex. Nulla convallis ante elit, at consequat ipsum ultricies ut. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in varius purus. Nullam ut sodales ante. Fusce</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in varius purus. Nullam ut sodales ante. Fusce justo nisi, suscipit a lacus et, posuere sagittus ex. Nulla convallis ante elit, at consequat ipsum ultricies ut. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in varius purus. Nullam ut sodales ante. Fusce justo nisi, suscipit a lacus et, posuere sagittus ex. Nulla convallis ante elit, at consequat ipsum ultricies ut. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat.</p><hr><h4>H4 Here\'s an Ordered List</h4><ol><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Aliquam in varius purus. Nullam ut sodales ante.<ol><li>Fusce justo nisi, suscipit a lacus et, posuere sagittis ex.</li><li>Nulla convallis ante elit, at consequat ipsum ultricies ut.</li><li>Vivamus gravida tellus ut lacinia feugiat.<ol><li>Aliquam in varius purus.</li><li>Nullam ut sodales ante.</li></ol></li></ol></li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Aliquam in varius purus. Nullam ut sodales ante.</li><li>Fusce justo nisi, suscipit a lacus et, posuere sagittis ex.</li><li>Fusce justo nisi, suscipit a lacus et, posuere sagittis ex.</li><li>Fusce justo nisi, suscipit a lacus et, posuere sagittis ex.</li><li>Fusce justo nisi, suscipit a lacus et, posuere sagittis ex.</li><li>Fusce justo nisi, suscipit a lacus et, posuere sagittis ex.</li><li>Fusce justo nisi, suscipit a lacus et, posuere sagittis ex. Fusce justo nisi, suscipit a lacus et, posuere sagittis ex. Fusce justo nisi, suscipit a lacus et, posuere sagittis ex. Fusce justo nisi, suscipit a lacus et, posuere sagittis ex.</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lorem dui. Donec ac nunc erat. Curabitur blandit quam ut erat dignissim feugiat.</li><li>Nulla facilisi. Suspendisse mattis ultricies urna, sit amet vulputate erat mattis in. Morbi nisi odio, feugiat nec facilisis ac, tristique volutpat diam.</li><li>Maecenas congue, metus a placerat luctus, libero arcu ullamcorper leo, non sollicitudin quam nisi sed enim.</li></ol><h4>H4 Here\'s an Unordered List</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Aliquam in varius purus. Nullam ut sodales ante.<ul><li>Fusce justo nisi, suscipit a lacus et, posuere sagittis ex.</li><li>Nulla convallis ante elit, at consequat ipsum ultricies ut.</li><li>Vivamus gravida tellus ut lacinia feugiat.<ul><li>Aliquam in varius purus.</li><li>Nullam ut sodales ante.</li></ul></li></ul></li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Aliquam in varius purus. Nullam ut sodales ante.</li><li>Fusce justo nisi, suscipit a lacus et, posuere sagittis ex.</li></ul><h4>H4 Mixed list</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Aliquam in varius purus. Nullam ut sodales ante.<ol><li>Fusce justo nisi, suscipit a lacus et, posuere sagittis ex.</li><li>Nulla convallis ante elit, at consequat ipsum ultricies ut.</li><li>Vivamus gravida tellus ut lacinia feugiat.<ul><li>Aliquam in varius purus.</li><li>Nullam ut sodales ante.</li></ul></li></ol></li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Aliquam in varius purus. Nullam ut sodales ante.</li><li>Fusce justo nisi, suscipit a lacus et, posuere sagittis ex.</li></ul><ol><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Aliquam in varius purus. Nullam ut sodales ante.<ul><li>Fusce justo nisi, suscipit a lacus et, posuere sagittis ex.</li><li>Nulla convallis ante elit, at consequat ipsum ultricies ut.</li><li>Vivamus gravida tellus ut lacinia feugiat.<ol><li>Aliquam in varius purus.</li><li>Nullam ut sodales ante.</li></ol></li></ul></li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Aliquam in varius purus. Nullam ut sodales ante.<ul><li>Fusce justo nisi, suscipit a lacus et, posuere sagittis ex.</li><li>Nulla convallis ante elit, at consequat ipsum ultricies ut.</li><li>Vivamus gravida tellus ut lacinia feugiat.<ul><li>Aliquam in varius purus.</li><li>Nullam ut sodales ante.</li></ul></li></ul></li><li>Fusce justo nisi, suscipit a lacus et, posuere sagittis ex.</li></ol><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in varius purus. Nullam ut sodales ante. Fusce justo nisi, suscipit a lacus et, posuere sagittus ex. Nulla convallis ante elit, at consequat ipsum ultricies ut. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in varius purus. Nullam ut sodales ante. Fusce justo nisi, suscipit a lacus et, posuere sagittus ex. Nulla convallis ante elit, at consequat ipsum ultricies ut. Suspendisse dignissim urna sed libero porttitor, et rhoncus lorem mattis. Vivamus gravida tellus ut lacinia feugiat.</p><h1>H1 Title</h1><h2>H2 Title</h2><h3>H3 Title</h3><h4>H4 Title</h4><h5>H5 Title</h5><table border="0" cellpadding="0" cellspacing="0"><thead><tr><th>Test 1</th><th>Aliquam in varius purus. Nullam ut sodales ante.</th><th>Aliquam in varius purus. Nullam ut sodales ante.</th></tr></thead><tbody><tr><td>Test 1</td><td>Aliquam in varius purus. Nullam ut sodales ante.</td><td>Aliquam in varius purus. Nullam ut sodales ante.</td></tr><tr><td><p>Test 2</p></td><td><ul><li>Fusce justo nisi, suscipit a lacus et, posuere sagittus ex.</li><//ul></td><td>Aliquam in varius purus. Nullam ut sodales ante.</td></tr><tr><td>Test 3</td><td>Ilipsum dolor sit amet, consectetur adipiscing elit.</td><td>Ilipsum dolor sit amet, consectetur adipiscing elit.</td></tr></tbody></table>`,
  },
};
