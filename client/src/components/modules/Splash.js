import React, { Component } from "react";

// Redux Imports
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let lay = this.props.layout;
    return (
      <div className="Splash">

        <div id="hero">
          <h1>X_Trick_Pony Data Viz Boilerplate</h1>
          <h2>Open Express-React-Redux Web App Boilerplate</h2>
          <h4>A Node, Express, React, Redux, D3, Plotly, Boilerplate capable of using a secondary server to communicate with the web as well as R and Python environments (planned).</h4>
        </div>

        <div className="infoDiv"> 
          <p>
            The purpose of this boilerplate is to have a pre-made UI, usefull packages and data architecture for visualization tools that use live and/or static data.
          </p>
          <img src="" alt=""/>
        </div>
        <div className="contentBox">
        <p>URL: https://github.com/EricCasey/Trick-Pony-Boilerplate</p>
          <pre>
            <br/>
            git clone https://github.com/EricCasey/Trick-Pony-Boilerplate my-project
            <br/>
            cd my-project
            <br/>
            npm i
            <br/>
            cd client
            <br/>
            npm i
            <br/>
            cd ..
            <br/>
            npm start
            <br/>
          </pre>
        </div>
      </div>
    );
  }
}

// this is the 'data' that gets bound to props
function mapStateToProps(state) {
  // whatever gets returned will show up as props inside of dispatch fun
  return {
    theme: state.theme,
    layout: state.layout
  };
}

// these are the 'actions' that get bound to props
// function mapDispatchToProps(dispatch) {
//   // whenever <function below> is called result should be passed
//   // to all of our reducers
//   return bindActionCreators({
//     LayoutChange: LayoutChange
//   }, dispatch);
// }

// to promote monoSwitch from component to container it needs
// to know about these things

export default connect(mapStateToProps)(Splash);
// export default App;