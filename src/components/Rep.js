import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'


function Rep() {
    return(
        <SRLWrapper>
        <div>
            <div className="pic" >
            <picutre>
                <source media="(max-width: 450px)" srcset="https://preview.redd.it/aqa1lhk2ybk51.jpg?width=640&crop=smart&auto=webp&s=60bb247123c49e99f891072f3a7960b490bd6973"/>
                <source media="(max-width: 800px)" srcset="https://moodboardbucket.s3.amazonaws.com/static/moodboard/images/q1n9f3x3k5d31_ombAZuZ.jpg"/>
                <img src="https://storage.yandexcloud.net/am-photo/architecture/DJI_0014.jpg"/>
            </picutre>
            </div>
        </div>
        </SRLWrapper>
    )
}

export default Rep