import React, {useState} from 'react'

const DisplayImage = () => {

    // const ImageComponent = () => {
        const [dimensions, setDimensions] = useState({width:0, height:0});
    
        const handleImageLoad =(event)=>{
          const {naturalWidth, naturalHeight} = event.target;
          setDimensions ({width: naturalWidth, height: naturalHeight});
        
      };
    
  return (
    <>
    <div>
        <p>Step 1: Loading Original Image</p>
          <img src="./Cubinia.svg" onLoad={handleImageLoad} alt="Image Unable to Load"/>
          <p>Original Width:{dimensions.width}</p>
          <p>Original Height:{dimensions.height}</p>
          <hr/>
    </div>
    </>
  )
}
export default DisplayImage;