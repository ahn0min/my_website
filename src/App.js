import Header from "./components/Header.js";
import BlogPage from "./pages/BlogPage.js";
export default class App {
  $target;

  constructor($target) {
    this.$target = $target;
    new Header(this.$target);
    new BlogPage(this.$target);
  }
}
