import React, { Component } from 'react';
import './css/controls.css';
import leftArrow from './images/left-arrow.png';
import rightArrow from './images/right-arrow.png';
import bottomArrow from './images/arrow-pointing-downwards.png';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRotating: false,
      startAngle: 0
    };
    this.wheelRef = React.createRef();
  }

  getAngle = (e, rect) => {
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    return angle * (180 / Math.PI);
  };

  handleMouseDown = (e) => {
    if (e.target.id === 'ok-button' || e.target.id === 'menu-button') return;
    
    this.setState({ isRotating: true });
    const rect = this.wheelRef.current.getBoundingClientRect();
    this.setState({ startAngle: this.getAngle(e, rect) });
  };

  handleMouseMove = (e) => {
    if (!this.state.isRotating) return;
    
    const rect = this.wheelRef.current.getBoundingClientRect();
    const currentAngle = this.getAngle(e, rect);
    const deltaAngle = currentAngle - this.state.startAngle;
    
    if (Math.abs(deltaAngle) > 30) {
      this.props.onRotate(deltaAngle > 0 ? 'clockwise' : 'counterclockwise');
      this.setState({ startAngle: currentAngle });
    }
  };

  handleMouseUp = () => {
    this.setState({ isRotating: false });
  };

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  render() {
    return (
      <section id="controls">
        <div 
          id="wheel"
          ref={this.wheelRef}
          onMouseDown={this.handleMouseDown}
        >
          <span 
            id="menu-button"
            className="buttons" 
            style={{ top: 20 }}
            onClick={this.props.onMenuClick}
          >
            Menu
          </span>
          <img className="buttons" draggable="false"
            src={leftArrow} alt="left" 
            style={{ left: 13, width: 40 }}>
          </img>
          <img className="buttons" draggable="false"
            src={rightArrow} alt="right" 
            style={{ right: 13, width: 40 }}>
          </img>
          <img className="buttons" draggable="false"
            src={bottomArrow} alt="bottom" 
            style={{ bottom: 13, width: 30, height: 37 }}>
          </img>
          <div id="ok-button" onClick={this.props.onOkClick}>
            <b>OK</b>
          </div>
        </div>
      </section>
    );
  }
}
  
export default Controls;
  