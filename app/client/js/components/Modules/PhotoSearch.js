import React from 'react';
import Photo from './Photo';
import search from '../../../img/search.svg';

class PhotoSearch extends React.Component {
  render() {
    return (
      <form method="get" onSubmit={this.props.search.bind(this)}>
        <div className="control slat">
          <input type="text" placeholder="Search Flickr tags..." name="s" value={this.props.value} onChange={this.props.change} />
          <button className="slat-item" type="submit">
            <img src="/img/search.svg" alt="" />
          </button>
        </div>
      </form>
    );
  }
}

export default PhotoSearch;

