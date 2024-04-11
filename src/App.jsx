import React from 'react'
import DisplayImage from './components/DisplayImage';
import InvertedImage from './components/InvertedImage';
import MagnifyImage from './components/MagnifyImage';
import ImageCropper from './components/ImageCropper';

// Note: Magnifyimage file is large 
const App = () => {
  return (
    <>
    <DisplayImage/> 
    <InvertedImage/> 
    <MagnifyImage/>
    <ImageCropper/>
    </>
  )
}

export default App;