import React from 'react'
import './Plans.css'
import { plansData } from './../../data/plansData.jsx'
import whiteTick from './../../assets/whiteTick.png'

function Plans() {
    return (
        <div className="plans-container" id='plans'>
            <div className="blur blur-Plans-1"></div>
            <div className="blur blur-Plans-2"></div>
            <div className="program-header" style={{gap: "3rem"}}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>

            {/*Cards*/}
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature" key={i}>
                                    <img src={whiteTick} alt="" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits</span>
                        </div>
                        <button className='Btn'>Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans