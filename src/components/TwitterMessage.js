import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage=(e)=>{
    this.setState({
      message: e.target.value
    })
  }
  
  render() {
    let charsLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={e => this.handleMessage(e)} />
        <br></br><strong>Chars Left: {charsLeft}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
