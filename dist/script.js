import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

import marked from "https://cdn.skypack.dev/marked";
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

class MarkdownExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ' <section class="main-section" id="Hello_World_Application"> \n <h1 id="header">Hello World Application</h1> \n <h2 id="sub-header">React basic application</h2> \n <ul> \n  <li><b>JSX</b> Element.</li> \n  <p><b>JSX</b> element looks exactly same as HTML. Only difference is it in JavaScript file. You can write as simple as <code><p>Hello</p></code></p>  \n    <p>The following is one examples code:</p> \n  <code class="code"> \n const title = &lsaquo;h1&rsaquo;Hello world&lsaquo;/h1&rsaquo;; \n </code>    \n    <p><br></p> \n    <li>Rendering JSX</li>   \n      <p>We use React render method to display "Hello World". The following is the whole code:</p>   \n     <code class="code">   \n        import React from "react"; <br>\n import ReactDOM from "react-dom"; <br> \n         const title = &lsaquo;h1&rsaquo;Hello world&lsaquo;/h1&rsaquo;; <br> \n         ReactDOM.render(title, document.getElementById("app")); \n</code> \n </ul> \n </section> \n <a href="https://reactjs.org/" target="_blank">For more, please check React website</a> \n <div> \n <blockquote> \n <p>Have a rest when you feel tired! </p> \n  <blockquote>\n <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Westminstpalace.jpg"/> \n </div>' };


    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      content: e.target.value });

  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/

    React.createElement("label", { for: "editor", id: "label_editor" }, "Editor"), /*#__PURE__*/
    React.createElement("textarea", { id: "editor", rows: "10", cols: "40", value: this.state.content, onChange: this.handleChange }), /*#__PURE__*/

    React.createElement("label", { for: "preview", id: "label_preview" }, "Preview"), /*#__PURE__*/
    React.createElement("div", { dangerouslySetInnerHTML: {
        __html: marked(this.state.content, { renderer: renderer }) }, id: "preview" })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MarkdownExample, null), document.getElementById('root'));