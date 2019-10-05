import React from 'react';
import './App.css';
import Clock from './Clock';












class App extends React.Component {
  state = {
    kievUtc: -180,
    London: 0,
    New_york: +300
  }
  setNewTime() {

  }
  render() {
    let { London, kievUtc, New_york } = this.state
    console.log(London, kievUtc, New_york)
    return (
      <div className="" >
        <Clock city={'London'} utc={London} />

        <Clock city={'Kiev'} utc={kievUtc} />

        <Clock city={'New_york'} utc={New_york} />
      </div>


    );
  }

}

export default App;
