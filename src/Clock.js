import React from 'react';
import './App.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return <h1 className="container"><p>{this.props.sity}</p>{this.state.date.toLocaleTimeString()}</h1>
  }
}
export default Clock