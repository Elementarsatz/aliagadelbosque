import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import NewsDetail from './NewsDetail';
import { news } from '../../constants/news';
import styles from './news.module.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

const News = () => {
    const [selected, setSelected] = useState(null);
    return (
        <div className="container py-5">
            <h1 className="section-title">News</h1>
            <hr className="section-divider" />
            <div className="row"> 
                {news.map(item =>  {
                    const getContent = () => (
                        item.body.split("\n").map((meti, windex) => (
                            <p key={`${item.title}-${windex}`}>
                                {meti.match(/[^\]]+(?![^<]*\])/g)}
                                <a target="_blank" rel="noreferrer" href={meti.match(/(?<=\[)(.*?)(?=\])/g)}>{meti.match(/(?<=<)(.*?)(?=>)/g)}</a>
                            </p>
                        ))
                    );
                    const currentNews = { ...item, content: getContent() };
                    return (
                        <>
                            <div
                                className={`col-12 d-flex col-md-6 mb-4 ${styles['news-card']}`}
                                key={item.title}
                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                onClick={() => setSelected(currentNews)}
                            >
                                <div className="card border-0 overflow-hidden">
                                    <div className="row">
                                        <div className="col-4 col-md-12 d-flex align-items-stretch">
                                            <LazyLoadImage
                                                alt={item.title}
                                                src={item.image}
                                                width={'100%'}
                                                effect="blur"
                                                wrapperClassName="d-flex"
                                                className={styles['lazy-img']}
                                            />
                                        </div>
                                        <div className="col-8 col-md-12 card-body px-4">
                                            <h5>{item.title}</h5>
                                            <span className="small text-muted">{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <NewsDetail
                                selected={selected}
                            />
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default News;
