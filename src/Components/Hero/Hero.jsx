import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from './../../assets/hero_image.png'
import hero_image_back from './../../assets/hero_image_back.png'
import Heart from './../../assets/Heart.png'
import Calories from './../../assets/Calories.png'
import {motion} from "motion/react"
import CountUp from 'react-countup';

function Hero() {

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true : false;
    return (
        <div className="Hero" id='Hero'>
            <div className="blur hero-blur"></div>
            <div className="left-side">
                <Header />
                {/*Add Slider in the left slider*/}
                <div className="the-best-ad">
                    <motion.div
                        initial={{left: mobile? "178px" : "238px"}}
                        whileInView={{left: '6px'}}
                        transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>The best fitness club in town</span>
                </div>

                {/*Main text Designing*/}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to build and shape your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                {/*Figures under the Main Text*/}
                <div className="figures">
                    <div>
                        <span><CountUp end={140} start={0} delay={1} prefix='+'/></span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span><CountUp end={978} start={0} delay={1} prefix='+'/></span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span><CountUp end={50} start={0} delay={1} prefix='+'/></span>
                        <span>Fitness Programs</span>
                    </div>
                </div>
                {/*Explore More and Learn more Button*/}
                <div className='hero-button'>
                    <button className='Btn'>Explore More</button>
                    <button className='Btn'>Learn More</button>
                </div>
            </div>

            {/*Right Side*/}
            <div className="right-side">
                <button className='Btn'>Join Now</button>

                <motion.div 
                    transition={transition}
                    whileInView={{right: '4rem'}}
                    initial={{right: '-1rem'}}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/*Hero Image*/}
                <img src={hero_image} alt="" className='hero-image' />
                <motion.img 
                    transition={transition}
                    whileInView={{right: '21rem'}}
                    initial={{right: '15rem'}}
                src={hero_image_back} alt="" className='hero-image-back' />

                {/*Calories*/}
                <motion.div 
                    transition={transition}
                    whileInView={{right: '28rem'}}
                    initial={{right: '32rem'}}
                    className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span><span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero