import React from 'react';
import "./WorkCardStyles.css";
import WorkData from "./WorkData"
import WorkCard  from './WorkCard';

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className="heading">Projects</h1>
        <div className="project-cont">
        {
            WorkData.map((value,ind)=>{
                return <WorkCard 
                    key={ind}
                    imgsrc={value.imgsrc}
                    title={value.title}                    
                    description={value.description}
                    view={value.view}
                    source={value.source}
                />
            })
        }
        </div>
    </div>
  )
}

export default Work;