import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import PageContainer from '../common/PageContainer';
import PageTitle from '../common/PageTitle';
import ProjectRender from './ProjectRender';

import { projects } from '../../utils/data';
import styles from './projects.module.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const selectProject = projectLabel => {
        const selected = projects.find(project => project.label === projectLabel);
        setSelectedProject(selected);
    }
    return (
        <PageContainer>
            <PageTitle title="Current projects & al." />
            <div className="row">
                <div className="col-12 col-md-3">
                    <ul className={styles['project-list']}>
                        {projects.map(project => (
                            <li key={`project-${project.label}`} className={`${styles['project-label']} ${project.label === selectedProject.label ? styles.selected : ''}`} onClick={() => selectProject(project.label)}>{project.label}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-12 col-md-9 card">
                    <div className="card-body">
                        <div id="project-content">
                            <ProjectRender content={selectedProject.content}/>
                        </div>
                        {selectedProject.embeded && (<div className="row">
                            {selectedProject.embeded.map(item => (
                                <div className="col-12 col-md-6 mb-4" key={item.musicTitle}>
                                    <div className="row">
                                        <h4>{item.title} <i className={`fas fa-external-link-alt ${styles['external-link']}`}></i></h4>
                                        <div className="col-12 col-sm-4 mb-3 mb-sm-0">
                                            <LazyLoadImage
                                                alt={item.title}
                                                src={item.image}
                                                width={'100%'}
                                                effect="blur"
                                                wrapperClassName="d-flex h-100"
                                                className={styles['lazy-img']}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            {item.media}
                                        </div>
                                    </div>
                                    <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere',wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/jcadb" title="Juan Carlos Aliaga Del Bosque" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Juan Carlos Aliaga Del Bosque</a> · <a href={item.musicLink} title={item.musicTitle} target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>{item.musicTitle}</a></div>
                                </div>
                            ))}
                        </div>)}
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default Projects;
