import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'


function Rep(props) {
    return(
        <div className={!props.wide? "pic" : "pic pic-6"}>
            <picture>
            <source media="(max-width: 600px)  and (max-resolution: 200dpi)" srcset={props.w600}
                type="image/webp" 
                />
                <source media="(max-width: 900px) and (max-resolution: 200dpi)" srcset={props.w900}
                type="image/webp" 
                />
                <source media="(max-width: 900px) and (min-resolution: 200dpi)" srcset={props.w900}
                type="image/webp" 
                />
                <source media="(max-width: 1200px)" srcset={props.w600}
                type="image/webp" 
                />
                <source media="(min-width: 1200px)" srcset={props.w1200}
                type="image/webp" 
                />
                <img srcset={props.fallback}/>
            </picture>
    </div>
    )}

export default Rep