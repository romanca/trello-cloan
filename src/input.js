import React, { Component } from "react";
import "./input.css";

class Submit extends Component {
  state = { paymentSelection: "abc" };

  toggleContent = (e) => {
    const currentState = this.state.active;
    this.setState({
      paymentSelection: e.target.value,
      active: !currentState,
    });
  };

  switchContent = (value) => {
    switch (value) {
      case "abc":
        return (
          <div>
            <div className='dialogClass3'>
              <button className='dialogClass4' onClick={this.props.closeDialog}>
                <span className='fa fa-times dialogClass5'></span>
              </button>
              <input
                value={this.props.term}
                onChange={this.props.onChange}
                className='dialogClass6'
                type='text'
                placeholder='Add Board Title'
              />
            </div>
          </div>
        );
      case "bcd":
        return (
          <div>
            <div className='dialogClass20'>
              <button className='dialogClass4' onClick={this.props.closeDialog}>
                <span className='fa fa-times dialogClass5'></span>
              </button>
              <input
                value={this.props.term}
                onChange={this.props.onChange}
                className='dialogClass6'
                type='text'
                placeholder='Add Board Title'
              />
            </div>
          </div>
        );
      case "cde":
        return (
          <div className='dialogClass21'>
            <button className='dialogClass4' onClick={this.props.closeDialog}>
              <span className='fa fa-times dialogClass5'></span>
            </button>
            <input
              value={this.props.term}
              onChange={this.props.onChange}
              className='dialogClass6'
              type='text'
              placeholder='Add Board Title'
            />
          </div>
        );
      case "def":
        return (
          <div className='dialogClass22'>
            <button className='dialogClass4' onClick={this.props.closeDialog}>
              <span className='fa fa-times dialogClass5'></span>
            </button>
            <input
              value={this.props.term}
              onChange={this.props.onChange}
              className='dialogClass6'
              type='text'
              placeholder='Add Board Title'
            />
          </div>
        );
      case "efg":
        return (
          <div className='dialogClass23'>
            <button className='dialogClass4' onClick={this.props.closeDialog}>
              <span className='fa fa-times dialogClass5'></span>
            </button>
            <input
              value={this.props.term}
              onChange={this.props.onChange}
              className='dialogClass6'
              type='text'
              placeholder='Add Board Title'
            />
          </div>
        );
      case "fgh":
        return (
          <div className='dialogClass24'>
            <button className='dialogClass4' onClick={this.props.closeDialog}>
              <span className='fa fa-times dialogClass5'></span>
            </button>
            <input
              value={this.props.term}
              onChange={this.props.onChange}
              className='dialogClass6'
              type='text'
              placeholder='Add Board Title'
            />
          </div>
        );
      case "ghi":
        return (
          <div className='dialogClass25'>
            <button className='dialogClass4' onClick={this.props.closeDialog}>
              <span className='fa fa-times dialogClass5'></span>
            </button>
            <input
              value={this.props.term}
              onChange={this.props.onChange}
              className='dialogClass6'
              type='text'
              placeholder='Add Board Title'
            />
          </div>
        );
      case "hij":
        return (
          <div className='dialogClass26'>
            <button className='dialogClass4' onClick={this.props.closeDialog}>
              <span className='fa fa-times dialogClass5'></span>
            </button>
            <input
              value={this.props.term}
              onChange={this.props.onChange}
              className='dialogClass6'
              type='text'
              placeholder='Add Board Title'
            />
          </div>
        );
      case "ijk":
        return (
          <div className='dialogClass27'>
            <button className='dialogClass4' onClick={this.props.closeDialog}>
              <span className='fa fa-times dialogClass5'></span>
            </button>
            <input
              value={this.props.term}
              onChange={this.props.onChange}
              className='dialogClass6'
              type='text'
              placeholder='Add Board Title'
            />
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    const { paymentSelection } = this.state;

    return (
      <div className='dialogClass1'>
        <div className='dialogClass2'>
          <div className='input'>{this.switchContent(paymentSelection)}</div>
          <form onSubmit={this.props.onSubmit}>
            <button className='dialogClass10'>Create Board</button>
          </form>
          <div className='dialogClass9'>
            <div className='dialgClass7'>
              <button
                id='dialogClass11'
                className={paymentSelection === "abc"}
                value='abc'
                onClick={this.toggleContent}></button>
              <button
                id='dialogClass12'
                className={paymentSelection === "bcd"}
                value='bcd'
                onClick={this.toggleContent}></button>
              <button
                className={paymentSelection === "cde"}
                id='dialogClass13'
                value='cde'
                onClick={this.toggleContent}></button>
              <button
                className={paymentSelection === "def"}
                id='dialogClass14'
                value='def'
                onClick={this.toggleContent}></button>
              <button
                id='dialogClass15'
                className={paymentSelection === "efg"}
                value='efg'
                onClick={this.toggleContent}></button>
              <button
                id='dialogClass16'
                className={paymentSelection === "fgh"}
                value='fgh'
                onClick={this.toggleContent}></button>
              <button
                className={paymentSelection === "ghi"}
                id='dialogClass17'
                value='ghi'
                onClick={this.toggleContent}></button>
              <button
                className={paymentSelection === "hij"}
                id='dialogClass18'
                value='hij'
                onClick={this.toggleContent}></button>
              <button
                className={paymentSelection === "ijk"}
                id='dialogClass19'
                value='ijk'
                onClick={this.toggleContent}></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Submit;
