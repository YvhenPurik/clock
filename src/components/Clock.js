import React from 'react';
import './App.css';
import moment from 'moment-timezone'
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().zone(this.props.utc).format('HH:MM:ss'),
      // date2: date = new Date(timestamp),
      //dateTimezone: moment().tz(this.props.city).format('z')
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
      date: moment().zone(this.props.utc).format('HH:MM:ss'),
      //dateTimezone: moment().tz(this.props.city)

    })
  }

  render() {

    return (

      <div className="container">

        <p className='city'>{this.props.city}</p>
        {this.props.city == 'Kiev' ?
          <Fab size="small" color="secondary" aria-label="keyboard_arrow_up" >
            <KeyboardArrowUpIcon />
          </Fab> : null}
        <h1 >{this.state.date}</h1>
        {this.props.city == 'Kiev' ?
          <Fab size="small" color="secondary" aria-label="keyboard_arrow_up" >
            <KeyboardArrowDownIcon />
          </Fab> : null}
      </div>

    )
  }
}
export default Clock