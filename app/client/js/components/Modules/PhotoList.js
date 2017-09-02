import React from 'react';
import Photo from './Photo';

class PhotoList extends React.Component {
  render() {
    if (!this.props.photos.length) {
      return (
        <div className="list-items-empty">
          <p>Sorry, couldn't find any photos matching that tag.</p>
        </div>
      );
    }

    return (
      <div className="grid">
        <div className="story-list">
          <ul id="grid_list" className="list-items list-flex">
            {
              this.props.photos.map((photo, index) => {
                return (
                  <Photo key={index} data={photo} selectTag={this.props.selectTag} />
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default PhotoList;

