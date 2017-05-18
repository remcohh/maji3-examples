import { h, render } from "preact";
import App from "src/containers/App";

describe("App container", function() {
  beforeEach(function() {
    this.scratch = document.createElement("div");
    this.mount = jsx => {
      render(jsx, this.scratch);
    };
  });

  afterEach(function() {
    this.scratch.innerHtml = "";
  });

  it("says hello to stranger", function() {
    this.mount(<App />);
    expect(this.scratch.querySelector("p")).to.have.text("Hello stranger!");
  });
});
