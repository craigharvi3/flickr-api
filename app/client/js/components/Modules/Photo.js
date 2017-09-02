import React from 'react';
import { Link } from 'react-router';

class Photo extends React.Component {
  processTags() {
    let anchorTags = [];
    let stringTags = this.props.data.tags.split(" ");

    for (let i=0; i<stringTags.length; i++) {
      anchorTags.push(<Link className="tag" to={`/tag/${stringTags[i]}`} key={i}>{stringTags[i]}</Link>);
    }

    return anchorTags;
  }

  render() {
    return (
      <li className="col-4">
        <div className="box-item">
          <figure className="rollover">
            <a target="_blank" href={this.props.data.link}>
              <img className="img" src={this.props.data.media.m} alt="" />
            </a>
          </figure>
          <div className="box-info">
            <div className="content small-bottom">
              <h4 className="big">
                <a target="_blank" href={this.props.data.link}>
                  {this.props.data.title}
                </a>
              </h4>
              <p className="row">
                by <a target="_blank" href={`https://www.flickr.com/photos/${this.props.data.author_id}`}>{this.props.data.author}</a>
              </p>
              {/* NOTE: I've left this out because the output is pretty awful and just repeats the image. */}
              {/*<div className="row" dangerouslySetInnerHTML={{__html: this.props.data.description}}>
              </div>*/}
            </div>
            <div className="footer">
              {this.props.data.tags.length ? (
                <span>Tags: {this.processTags()}</span>
              ) : (
                null
              )}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Photo;
