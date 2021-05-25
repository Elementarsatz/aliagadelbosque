import React from 'react';
import {news} from '../../constants/news'

const News = () => (
    <div className="container py-5">
        <h1 className="section-title">News</h1>
        <hr className="section-divider" />
        <div className="row"> 
            {news.map(item =>  (
                <div className="col col-md-6 mb-3">
                    <div className="card border-0 h-100">
                        <div className="card-body">
                            <h5>{item.title}</h5>
                            <span className="small text-muted">{item.date}</span>
                            {item.body.split("\n").map((meti,windex) => (
                                <p>
                                    {/* <span className="text-muted">{(windex == 0) && `${item.date}: `}</span> */}
                                    {meti.match(/[^\]]+(?![^<]*\])/g)}<a target="_blank" href={meti.match(/(?<=\[)(.*?)(?=\])/g)}>{meti.match(/(?<=\<)(.*?)(?=\>)/g)}</a></p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>

    
);

export default News;
