import React, {Component} from 'react'
export default class Square extends Component {
    constructor(props) {
        super(props);
        this.changeColor= this.changeColor.bind(this);
        this.state = {
            color: this.props.color,
        };
    }
    changeColor() {
     const currentState = this.props.color;
        this.setState({ color: !currentState });
    };

    render() {
        return (
            <button
                className={this.state.color ? 'white-card' : 'black-card'}
                onClick={this.changeColor}
            >
            </button>
        )
  }
}