import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    going: false,
    color: "#" + Math.floor(Math.random() * 16777215).toString(16)
  };

  // add your code here
  componentDidMount() {
    this.startClock();
  };

  componentWillUnmount() {
    this.stopClock();
  }

  render() {
    const { time, color } = this.state;
    return (
      <section className="Timer" style={{ background: color }}>
        <h1>{time}</h1>
        { this.state.going ? 
          <button onClick={this.stopClock}>Stop</button> :
          <button onClick={this.startClock}>Start</button> 
        }
        <aside className="mountText">Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }

  //clock functions
  startClock = () => {
    this.interval = setInterval(this.clockTick, 1000);
    this.setState({going: true})
  }

  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  stopClock = () => {
    clearInterval(this.interval);
    this.setState({going: false})
  };

  // for the 'x' button,
  handleClose = () => {
    this.props.removeTimer(this.props.id);
  };
}

export default Timer;
