import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: null,
      password: null
    };
  }

  handleUsername=(e)=>{
    this.setState({
      username: e.target.value
    })
  }

  handlePassword=(e)=>{
    this.setState({
      password: e.target.value
    })
  }

  signIn=(e)=>{
    e.preventDefault()

    if (this.state.username && this.state.password){
      return this.props.handleLogin(this.state)
    }
  }


  render() {
    return (
      <form onSubmit={this.signIn}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={e=>{this.handleUsername(e)}}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={e=>{this.handlePassword(e)}}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
