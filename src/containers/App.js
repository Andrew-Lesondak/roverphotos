import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import PhotoContainer from '../components/PhotoContainer';
import { requestImage, imageLoadedSuccess, imageLoadedPending } from '../actions';

const mapStateToProps = state => {
  return {
    imageData: state.requestImage.imageData,
    isPending: state.requestImage.isPending,
    error: state.requestImage.error,
    imageLoaded: state.setImageLoaded.imageLoaded,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestImage: () => dispatch( requestImage() ),
    onImageLoadedSuccess: () => dispatch( imageLoadedSuccess() ),
    onImageLoadedPending: () => dispatch( imageLoadedPending() ),
  }
}

const tweetClick = ( imageDetails ) => {

  const [ imageSrc, roverName, cameraName, earthDate ] = imageDetails;
  const twitterUrl = `https://twitter.com/intent/tweet?text=Check%20out%20this%20Mars%20Rover%20photo!%0ARover:%20${roverName}%0ACamera:%20${cameraName}%0AEarth%20Date:%20${earthDate}%0A&url=${imageSrc}`.trim();

  window.open(twitterUrl, '_blank');
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestImage();
    this.props.onImageLoadedSuccess();
    this.props.onImageLoadedPending();
  }

  render() {

    const { 
      imageData, 
      isPending, 
      onRequestImage, 
      onImageLoadedSuccess, 
      onImageLoadedPending, 
      imageLoaded
    } = this.props;
    
    let whenLoaded = new Date();

    if(imageLoaded) {
      whenLoaded = '';
      onImageLoadedPending();
    }

    return isPending && whenLoaded ?
      <div className="loader center">
          <div className="loading-text">Loading Photo</div>
          <br></br>
          <i className="fa fa-cog fa-spin fa-5x" />
      </div> : 
      (
        <div className="App">
          <PhotoContainer 
            imageData={ imageData }
            imageRequest={ onRequestImage } 
            photoLoaded={ onImageLoadedSuccess } 
            tweetImage={ tweetClick }/>
        </div>
      )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App );
