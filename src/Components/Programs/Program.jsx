import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import RightArrrow from './../../assets/rightArrow.png'

function Program() {
    return (
        <div className="Programs" id='programs'>
            {/*Header*/}
            <div className="program-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>

            {/*Programs Data*/}
            <div className="program-categories">
                {programsData.map((programs, i) => (
                    <div className="category" key={i}>
                        {programs.image}
                        <span>{programs.heading}</span>
                        <span>{programs.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Program