import React, { useRef, useEffect } from 'react';
import {  Power3, TimelineLite } from 'gsap'
import { SRLWrapper } from 'simple-react-lightbox'

function Gallery(props) {

let images = useRef(null)
let horImage = useRef(null)
let tl = new TimelineLite()

  useEffect(() =>  {
    // IMAGES VARS  
    const verticalImage = images.firstElementChild
    const horizontalImage = horImage.firstElementChild

    if (!props.animationPlayed) {
    tl.from(verticalImage, 2.2,{x:400, ease: Power3.easeOut}, .5)
    .from(verticalImage, 2, {scale:1.4, ease: Power3.easeOut},.5)
    tl.from(horizontalImage, 2.9,{y:-500, ease: Power3.easeOut}, 0.6).
    from(horizontalImage, 2.9, {scale:0.4, ease: Power3.easeOut}, 0.4)
    props.toggleAnimation()
  }
}, [props.animationPlayed])
  
return(     
    <SRLWrapper>
    <div className="gallery">

        <div className="pic">
            <img src="https://moodboardbucket.s3.amazonaws.com/static/moodboard/images/0vszwr6sivs01.jpg"/>
        </div>
        <div className="pic pic-6" ref={el => horImage = el}> 
            <img src="https://moodboardbucket.s3.amazonaws.com/static/moodboard/images/paul-chadeisson-testspeed-0153b2.jpg"></img>
        </div>
        <div className="pic"><img src="https://moodboardbucket.s3.amazonaws.com/static/moodboard/images/q1n9f3x3k5d31_ombAZuZ.jpg"></img></div>
        <div className="pic">
            <img src="https://preview.redd.it/aqa1lhk2ybk51.jpg?width=640&crop=smart&auto=webp&s=60bb247123c49e99f891072f3a7960b490bd6973"></img>
        </div>

        <div className="pic" >
            <img src="https://preview.redd.it/gcoakop7j5o51.jpg?width=960&crop=smart&auto=webp&s=8f82c5587ba4100ec666fb45f02fb44d292b3e0b"></img>
        </div>
        <div className="pic" >
            <img src="https://preview.redd.it/6q1eh8gsltn51.jpg?width=640&crop=smart&auto=webp&s=9b0fe3975cb660b126c8b405be2722660f810696"></img>
        </div>

        <div className="pic pic-5" ref={el => images = el}>
            <img src="https://graziamagazine.com/wp-content/uploads/2020/08/101079119_273770263817813_3278452479109445686_n.jpg?resize=1080%2C1350"></img>
        </div>
        <div className="pic"><img src="https://preview.redd.it/aqa1lhk2ybk51.jpg?width=640&crop=smart&auto=webp&s=60bb247123c49e99f891072f3a7960b490bd6973"></img></div>
        <div className="pic">
            <img src="https://preview.redd.it/gcoakop7j5o51.jpg?width=960&crop=smart&auto=webp&s=8f82c5587ba4100ec666fb45f02fb44d292b3e0b"></img>
        </div>
  
        <div className="pic">
            <img src="https://preview.redd.it/3gwagimeswj51.jpg?width=640&crop=smart&auto=webp&s=db2a33086a502d1a9872bc6cb50d20b1171decd8"></img>
        </div>

    </div>
    </SRLWrapper>
)
}

export default Gallery   