import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label for="username">Name:</label>
        <input type="text" name="username" />
        <label for="password">Password:</label>
        <input type="password" name="password" />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <LoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
