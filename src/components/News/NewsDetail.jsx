import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './news.module.css';
import CloseIconWhite from '../../assets/icons/close-white.svg';

const NewsDetail = ({ selected }) => (
    <div className="modal fade" id="newsModal" tabIndex="-1" aria-labelledby="newsModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 overflow-hidden">
                <button type="button" data-bs-dismiss="modal" aria-label="Close" className={`btn-close ${styles['close-btn']} position-absolute`}>
                    <img alt="Close" src={CloseIconWhite} className="w-100"/>
                </button>
                {selected && (
                    <>
                        <LazyLoadImage
                            alt={selected.title}
                            src={selected.image}
                            width={'100%'}
                            effect="blur"
                            wrapperClassName="d-flex"
                            className={styles['modal-img']}
                        />
                        <div className="modal-body">
                            <h5 className="modal-title mb-3" id="newsModalLabel">{selected && selected.title}</h5>
                            {selected && selected.content}
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
);

export default NewsDetail;
