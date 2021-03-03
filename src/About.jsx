import React from 'react';
import Common from './Common';
import web from '../src/images/robo.jpg';
const About = () => {
    return (
                <>
                <Common
                          name="WelCome To About Page"
                          imgsrc={web}
                          visit="/contact"
                          btname="Contact Us"  
                      />
                </>
    )
}

export default About;
