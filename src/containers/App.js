import React, { useState, useEffect, Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import PhotoContainer from '../components/PhotoContainer';
import { requestImage } from '../actions';

const mapStateToProps = state => {
  return {
    imageData: state.requestImage.imageData,
    isPending: state.requestImage.isPending,
    error: state.requestImage.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestImage: () => dispatch( requestImage() )
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestImage();
  }

  render() {
    
    const { imageData, isPending } = this.props;

    return isPending ?
      <h1>Loading</h1> :
      (
        <div className="App">
          <PhotoContainer imageData={ imageData } />
        </div>
      )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App );
