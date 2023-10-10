
import { Button, Grid, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HWset from './HWset.js'

function Project(props) {


	const {
		name,
		toolbarStyle
	} = props;

	const itemStyle = {
		flex: '1',
		margin: '5px',
	};

	return (
	<Toolbar style={props.toolbarStyle}>
        <Typography component="h2" variant="h6" noWrap sx={{ flexGrow: 1 }}>
          {props.name}
        </Typography>
        <div>
			<HWset name="HWSet 1" cap="100" style={props.toolbarStyle}/>
	        <HWset name="HWSet 2" cap="200" style={props.toolbarStyle}/>
        </div>
  	</Toolbar>
	)
}



export default Project
