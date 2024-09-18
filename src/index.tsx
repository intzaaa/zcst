import "./index.css";

/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { Framework } from "./components/Framework";
import { Home } from "./router/Home";
import { Major } from "./router/Major";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Router root={({ children }) => <Framework>{children}</Framework>}>
      <Route path="/" component={() => <Home></Home>}></Route>
      <Route path="/major" component={() => <Major />}></Route>
    </Router>
  ),
  root!,
);
