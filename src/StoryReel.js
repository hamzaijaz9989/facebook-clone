import React from 'react'
import "./StoryReel.css"
import Story from './Story'
import s1 from "../src/s1.jpg";
import s2 from "../src/s2.jpeg";
import s3 from "../src/s3.jpeg";
import s4 from "../src/s4.jpeg";
function StoryReel() {
  return (
    <div className='storyReel'>
<Story image={s1} profileSrc={s2} title="Tom"/>
<Story image={s2} profileSrc={s1}  title="Andrew"/>
<Story image={s3} profileSrc={s4} title="Ali"/>
<Story image={s4} profileSrc={s3} title="Usman"/>


        
    </div>
  )
}

export default StoryReel