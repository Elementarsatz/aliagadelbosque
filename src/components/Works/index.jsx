import React, { useState } from 'react';

import PageContainer from '../common/PageContainer';
import PageTitle from '../common/PageTitle';
import { works } from '../../utils/data';
import { genres } from '../../utils/constants';
import styles from './works.module.css';

const Works = () => {
    const [filter, setFilter] = useState('All');
    const [filteredWorks, setFilteredWorks] = useState(works);

    const filterWorks = (filter) => {
        if (filter === 'All') {
            setFilteredWorks(works);
        }
        const filtered = works.filter(work => work.genre.value === filter);
        setFilteredWorks(filtered);
    };

    return (
        <PageContainer>
            <PageTitle title="Works" />
            <div className="row">
                <div className="col-12 col-md-6">
                    <select
                        className="form-select form-select-sm border-0 mb-3 shadow-none"
                        aria-label="Genre select"
                        value={filter}
                        onChange={(event) => {
                            setFilter(event.target.value);
                            filterWorks(event.target.value);
                        }}
                    >
                        <option value="All" key="filter-All">All</option>
                        {genres.map(genre => (
                            <option value={genre.value} key={`filter-${genre.value}`}>{genre.label}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row">
                {filteredWorks.map(item =>  (
                    <div
                        className="d-flex col-12 col-md-6 mb-4"
                        key={`works-${item.title}`}
                    >
                        <div className="card flex-fill border-0 overflow-hidden">
                            <div className="card-body">
                                <h5>{item.title}</h5>
                                {
                                item.instrumentation && <p>for {item.instrumentation}</p>        
                                }
                                <p>{item.year}</p>
                                <p>duration: {item.duration}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </PageContainer>
    );
};

export default Works;
