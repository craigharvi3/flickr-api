import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <div className="container">
          {this.props.children}
        </div>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
