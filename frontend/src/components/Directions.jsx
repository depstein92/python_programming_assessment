import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    subheader: {
        textAlign: 'center'
    },
    listItem: {
        textAlign: 'center', 
        fontSize: '28px',
    }
}

const Directions = ({ classes }) => {
    
    return(
      <>
        <CssBaseline />
        <Container maxWidth="lg">
            <Typography 
                style={{textAlign: 'center', textDecoration: 'underline', marginBottom: '30px'}} 
                variant="h1" 
                component="h2"
            >
            About
            </Typography>
            <Typography className={classes.subheader} variant="h3">
                        You will notice in the top left, a Menu Bar.
            </Typography>
            <ul>
                <li>
                <Typography className={classes.listItem} variant="span">
                    1) Get Area of Triangle:  This is an input that will take a base and height, 
                    it will then return the area.   
                </Typography>    
                </li>
                <li>
                <Typography className={classes.listItem} variant="span">
                    2) See a String Repeat: This will repeat a string using recursion in order to repeat
                    a set consecutive times. 
                </Typography>
                </li>
                <li>
                    <Typography className={classes.listItem} variant="span">
                    3) Convert Minutes and Hours into Seconds: This will convert hours and minutes into seconds 
                    </Typography>
                </li>
                <li>
                    <Typography className={classes.listItem} variant="span">
                    4) Get the Maximum Highest Edge: This will get the hoghest maximum edge of a triangle 
                    </Typography>
                </li>
            </ul>
        </Container>
      </>
    ) 
}

export default withStyles(styles)(Directions);