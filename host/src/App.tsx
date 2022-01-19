import { render } from "solid-js/web";
import Counter from "./Counter";

import "./index.css";

const App = () => (
  <div class="container">
    <div>Host</div>
    <Counter />
  </div>
);
render(App, document.getElementById("app"));
