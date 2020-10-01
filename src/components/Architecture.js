import React from 'react';


function Architecture() {
return(     
    <div>
    <div className="gallery">

        <div className="pic">
            <img src="https://moodboardbucket.s3.amazonaws.com/static/moodboard/images/0vszwr6sivs01.jpg"/>
        </div>
        <div className="pic" >
            <img src="https://preview.redd.it/gcoakop7j5o51.jpg?width=960&crop=smart&auto=webp&s=8f82c5587ba4100ec666fb45f02fb44d292b3e0b"></img>
        </div>
        <div className="pic" >
            <img src="https://preview.redd.it/r8w39eilkgq51.jpg?width=640&height=791&crop=smart&auto=webp&s=46875671118f20ce1150100d5f18bf9e9f5bc763"></img>
        </div>
        
    </div>
   
            <div className="aboutpic">
                
        <img id="mypic"
            src="https://andreyphotos.s3.eu-north-1.amazonaws.com/about+photo/IMG_7448w300.jpg"
            srcSet="
            https://andreyphotos.s3.eu-north-1.amazonaws.com/about+photo/IMG_7448w300.jpg 300w,
            https://andreyphotos.s3.eu-north-1.amazonaws.com/about+photo/IMG_7448w600.jpg 600w, 
            https://andreyphotos.s3.eu-north-1.amazonaws.com/about+photo/IMG_7448!.jpg 1200w"
            sizes="(min-width: 1600px) 1200px,
            (max-width: 1200px) and (min-width: 600px) 600px,
            (max-width: 470px) 300px, "/>
            
           
    </div>
    </div>
)}

export default Architecture