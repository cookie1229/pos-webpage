import React from 'react';
import { Animated } from 'react-animated-css';

export default function Logo( {className, value}) {
    return (
        <div>
            <Animated animationIn="pulse" isVisible={true}>
            <a href="#">
                <h1 className={className}>{value}</h1>
            </a>
            </Animated>
        </div>
    )
    
}