import React from 'react';
import './App.css';
import moment from 'moment'
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('HH:MM:ss')
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
      date: moment().format('HH:MM:ss')
    })
  }

  render() {
    console.log(this.state.date)
    return (
      <div className="container">
        <p className='city'>{this.props.city}</p>
        <h1 >{this.state.date}</h1>
      </div >

    )
  }
}
export default Clock