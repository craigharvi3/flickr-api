import React from 'react';
import { connect } from 'react-redux';
import data from '../../data';
import PhotoList from '../Modules/PhotoList';
import PhotoSearch from '../Modules/PhotoSearch';
import Loader from '../Modules/Loader';

const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  loading: (payload) => dispatch({type: 'PHOTOS_LOADING'}),
  loadPhotos: (payload) => dispatch({type: 'PHOTOS_LOADED', payload}),
  updateTagVal: (payload) => dispatch({type: 'TAG_VAL', payload})
});

class Home extends React.Component {

	componentWillMount() {
    if (this.props.params.tag) {
      this.props.updateTagVal(this.props.params.tag);
    }
		this.props.loadPhotos(data.Photos.get(this.props.params.tag));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.tag !== this.props.params.tag) {
      this.props.loading();
      this.props.updateTagVal(this.props.params.tag);
      this.props.loadPhotos(data.Photos.get(this.props.params.tag));
    }
  }

  search(e) {
    e.preventDefault();
    if (this.props.photos.tag.length) {
      this.context.router.push(`/tag/${this.props.photos.tag}`);
    }
  }

  change(e) {
    this.props.updateTagVal(e.target.value);
  }

  render() {
    return (
    	<div>
        <PhotoSearch tag={this.props.photos.tag} search={this.search.bind(this)} value={this.props.photos.tag} change={this.change.bind(this)} />
        {this.props.photos.loading ? (
          <Loader />
        ) : (
          <PhotoList photos={this.props.photos.list} />
        )}
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
