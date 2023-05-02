import React from 'react';
import { Animated } from 'react-animated-css';

export default function NavLi( {href, className, value} ) {
    return (
        <div>
            <Animated animationIn="pulse" isVisible={true}>
            <li>
                <a href={href} className={className}> {value}</a>
            </li>
            </Animated>
        </div>
    )
}