import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const NewsDetail = ({ selected }) => (
    <div className="modal fade" id="newsModal" tabIndex="-1" aria-labelledby="newsModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                {selected && (
                    <div className="modal-body">
                        <h5 className="modal-title" id="newsModalLabel">{selected && selected.title}</h5>
                        <LazyLoadImage
                            alt={selected.title}
                            src={selected.image}
                            width={'100%'}
                            effect="blur"
                            wrapperClassName="d-flex"
                            // className={styles['lazy-img']}
                        />
                        {selected && selected.content}
                    </div>
                )}
            </div>
        </div>
    </div>
);

export default NewsDetail;
