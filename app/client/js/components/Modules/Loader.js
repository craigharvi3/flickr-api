import React from 'react';
import search from '../../../img/loader.svg';

class Loader extends React.Component {
  render() {
    return (
      <div className="loader">
        <img src="/img/loader.svg" alt="Loading..." />
      </div>
    );
  }
}

export default Loader;

