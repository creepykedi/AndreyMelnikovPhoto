import React from 'react'

function About() {
    return(
        <div className="about"> 
            <h3 id="about-title">О Дике Членсе</h3>
            <div className="aboutpic">
                
                <img id="mypic"
                    src="https://andreyphotos.s3.eu-north-1.amazonaws.com/about+photo/IMG_7448w300.jpg"
                    srcSet="
                    https://andreyphotos.s3.eu-north-1.amazonaws.com/about+photo/IMG_7448w300.jpg 300w,
                    https://andreyphotos.s3.eu-north-1.amazonaws.com/about+photo/IMG_7448w600.jpg 600w, 
                    https://andreyphotos.s3.eu-north-1.amazonaws.com/about+photo/IMG_7448!.jpg 1200w"
                    sizes="(min-width: 1600px) 1200px,
                    (max-width: 1200px) and (min-width: 600px) 600px,
                    (max-width: 470px) 300px, "
                />
            </div>
            <div>
                <p className="about-text">Полицейский пристав Ричард Членс получает очередное задание, целью которого является ни много ни мало — спасение всей Земли. Дело в том, что его начальство подозревает, что на данный момент в кресле президента сидит не он сам, а его клон, и чтобы прозондировать почву относительного этого вопроса, засылает Членса на Луну. Судя по всему, именно там и базируется эта самая клонирующая фабрика, намеревающаяся в скором времени заполонить Землю клонами известных личностей.</p>
    
            </div>
        
           
        </div>
    )}

export default About