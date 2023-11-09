import React from 'react';
import { useSelector } from 'react-redux';
import { IProject } from '../../types/project';
import './projectList.css'
import { ProjectSelector } from '../../store/slices/projectSlicer';

function ProjectList() {


  const project: IProject[] = useSelector(ProjectSelector.getProject);

  return <div className="project-list">
    {project?.map((item) => {
      return (
        <div className="project">
          {item.title}
        </div>
      )
    })}
  </div>
}

export default ProjectList