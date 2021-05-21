import React, {Fragment} from 'react';
import {works} from '../../constants/works'

const Works = () => (
    <Fragment>
        <h1>Works</h1>
        {works.map(item =>  (
            <Fragment>
                <h3>{item.title}</h3>
                {
                item.instrumentation && <p>for {item.instrumentation}</p>        
                }
                <p>{item.year}</p>
                <p>duration: {item.duration}</p>
            </Fragment>
        ))}
        </Fragment>

);

export default Works;
