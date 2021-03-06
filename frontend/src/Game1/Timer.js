const React = require('react')
const ms = require('pretty-ms')



class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 3000,
      start: 3000,
      isOn: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer() {
   /* this.setState({
      time: this.state.time,
    /* start: Date.now() - this.state.time  ,*/
   /* start: this.state.time ,
      isOn: true
    })*/
    this.timer = setInterval(() => this.setState({
      time: this.state.start +1000
    }), 1000);
  }

  

  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({time: 3000})
  }
  render() {
    let start = (this.state.time == 3000) ?
      <button onClick={this.startTimer}>start</button> :
      null
    let stop = (this.state.isOn) ?
      <button onClick={this.stopTimer}>stop</button> :
      null
    let reset = (this.state.time != 3000 && !this.state.isOn) ?
      <button onClick={this.resetTimer}>reset</button> :
      null
    let resume = (this.state.time != 3000 && !this.state.isOn) ?
      <button onClick={this.startTimer}>resume</button> :
      null
    return(
      <div>
        <h3>timer: {ms(this.state.time)}</h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    )
  }
}
module.exports = Timer
/*const React = require('react')
const ms = require('pretty-ms')
class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 3
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer() {
    this.timer = setInterval(() => this.setState({
      time: this.state.time - 1
    }), 1000)
    console.log("start")
  }
  stopTimer() {
    clearInterval(this.timer)
    console.log("stop")
  }
  resetTimer() {
    this.setState({time: 3})
    console.log("reset")
  }
  render() {
     return (
       <div>
         <h3>timer: {this.state.time}</h3>
         <button onClick={this.startTimer}>start</button>
         <button onClick={this.stopTimer}>stop</button>
         <button onClick={this.resetTimer}>reset</button>
       </div>
     );
  }
}
module.exports = Timer*/