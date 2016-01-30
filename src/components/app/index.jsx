import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./index.css";

@CSSModules(styles)
export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 styleName="title">Try CSS Modules</h1>
        </header>
        <section styleName="content">
          <div styleName="leftContainer">
            Left Content
          </div>
          <div styleName="rightContainer">
            Right Content
          </div>
        </section>
      </div>
    );
  }
}
