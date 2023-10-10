import React from 'react'
import { useState } from 'react'
import { Button, Grid, Typography, Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';


function HWset(props) {

	const [tf, setTf] = useState('0');
	const [out, setOut] = useState(0);

	const {
		name,
		cap,
		style
	} = props;

  const handleChange = (event) => {
    setTf(event.target.value);
  };

  const handleCin = (event) => {
  	let newout = out + parseInt(tf,10);
  	if (newout <= props.cap){
  		setOut(newout);
  	}
  }

  const handleCout = (event) => {
  	let newout = out - parseInt(tf,10);
	  if (newout >= 0){
			setOut(newout);	
	  }
  }

	const containerStyle = {
		display: 'flex',
		flexDirection: 'row',
	};

	const itemStyle = {
		flex: '1',
		margin: '5px',
	};

	return (
	<Toolbar  style={props.style}>
    <Typography component="h3" variant="h6">
      {props.name}
    </Typography>
    <span>&nbsp; &nbsp;</span>
    <Typography component="h5" variant="h6">
      {out}
    </Typography>
    <Typography component="h5" variant="h6">
      {'/' + props.cap}
    </Typography>
    <TextField
      label="Quantity"
      variant="outlined"
      size="small"
      value={tf}
      onChange={handleChange}
    />
    <Button variant="text" onClick={handleCin}>Check in</Button>
		<Button variant="text" onClick={handleCout}>Check out</Button>
  </Toolbar>
	)
}



export default HWset
