import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'


function Rep() {
    return(

        <div>
            <div className="pic" >
           
    <SRLWrapper>
                
                <img srcset="https://storage.yandexcloud.net/am-photo/DJI_0014.webp 1200w,
                https://moodboardbucket.s3.amazonaws.com/static/moodboard/images/q1n9f3x3k5d31_ombAZuZ.jpg 750w,
                https://preview.redd.it/aqa1lhk2ybk51.jpg?width=640&crop=smart&auto=webp&s=60bb247123c49e99f891072f3a7960b490bd6973 1200w" alt="main"/>
            
            </SRLWrapper>
            </div>
        </div>

    )
}

export default Rep