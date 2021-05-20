import React, {Fragment}  from 'react';
import {news} from '../../constants/news'

const News = () => (
    <Fragment>
        <h1>News</h1>
        {news.map(item =>  (
            <Fragment>
                <h3>{item.title}</h3>
                {item.body.split("\n").map((meti,windex) => (
                    

                        <p>{(windex == 0) && `${item.date}: `}{meti.match(/[^\]]+(?![^<]*\])/g)}<a target="_blank" href={meti.match(/(?<=\[)(.*?)(?=\])/g)}>{meti.match(/(?<=\<)(.*?)(?=\>)/g)}</a></p>

                
                ))}

                    
            </Fragment>
        ))}
        </Fragment>

    
);

export default News;
