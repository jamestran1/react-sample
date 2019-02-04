import React from "react";

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
