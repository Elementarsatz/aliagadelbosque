import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'
import gfm from 'remark-gfm'

const ProjectRender = ({ content }) => {
    useEffect(() => {
        render(<ReactMarkdown remarkPlugins={[gfm]} children={content} />, document.querySelector('#project-content'));
    }, []);
  
    return null;
  };

export default ProjectRender;
