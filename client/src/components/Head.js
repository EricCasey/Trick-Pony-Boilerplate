import React, { Component } from "react";

// React-Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// React-Redux Actions
import { LayoutChange } from '../rr_actions/rr_a_layoutChange';
import { ThemeChange } from '../rr_actions/rr_a_themeChange';

// Project Object
import Projects from '../objects/projects.js';

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let lay = this.props.layout;
    return (
      <div className="Head" style={{
        height: this.props.layout.head ? '300px' : '36px',
        width: lay.right ? 'calc(100% - 300px)' : 'calc(100% - 38px)',
    }}>
        
        <img src={require('../img/Sleipnir.png')} alt="horse" id="hoverBox-Head" onClick={this.props.LayoutChange} />
        
        <h5 style={{
        width: this.props.layout.head ? 'calc(100% - 40px)' : '300px',
        fontSize: this.props.layout.head ? '28px' : '26px'
        }}>X_TRICK_PONY BOILDERPLATE by Casey_Works</h5>

        <div id="tricksCont" style={{ opacity: this.props.layout.head ? 1 : 0 }}>

          <div className="trick">
            <h6>0.trickpony.tools</h6>
            <p>THIS BOILERPLATE</p>
          </div>

          <div className="trick">
            <h6>1.trickpony.tools</h6>
            <p>PASTE TRADER, ICEBERG, OTHER</p>
          </div>

          <div className="trick">
            <h6>2.trickpony.tools</h6>
            <p>BTC Puzzle Decoder</p>
          </div>

          <div className="trick">
            <h6>3.trickpony.tools</h6>
            <p>TPB 201 trailers</p>
          </div>

          <div className="trick">
            <h6>4.trickpony.tools</h6>
            <p>Fortnite Tracker</p>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    theme: state.theme,
    layout: state.layout
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    LayoutChange: LayoutChange,
    ThemeChange: ThemeChange
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Head);
