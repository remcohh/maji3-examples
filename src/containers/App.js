import { h } from "preact";
import Router from "preact-router";

const Greeter = ({ name }) => <p>Hello {name}!</p>;

export default () => (
  <Router>
    <Greeter path="/hello/:name" />
    <div default>
      <Greeter name="stranger" />
      <a href="/hello/friend">Say hello to friend!</a>
    </div>
  </Router>
);
