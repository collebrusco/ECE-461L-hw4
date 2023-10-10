import React from 'react'
import { Button } from '@mui/material';
import Project from './Project.js'

function Projects() {

	const toolbarStyle = {
    	width: '100%',
    };

	return (
		<React.Fragment>
		<Project name="Project 1" toolbarStyle={toolbarStyle}/>
		<Project name="Project 2" toolbarStyle={toolbarStyle}/>
		</React.Fragment>
	)
}



export default Projects
