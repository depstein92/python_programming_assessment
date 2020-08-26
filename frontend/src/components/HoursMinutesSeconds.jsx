import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    divStyling: {
        border: '1px solid black',
        width: '75%',
        margin: '30% auto'
     }  
    },
}));

const HoursMinutesSeconds = () => {
    
    const classes = useStyles();
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState('');
    const [hours, setHours] = useState('');
    const [inputError, setInputError] = useState({ 
        minutes: false, hours: false 
    });
    const [exceptionMessage, setExceptionMessage] = useState('');

    const handleSubmit = async () => {
         if(minutes.length === 0){
             setInputError({...inputError, minutes: true});
             return;
         } else {
             setInputError({...inputError, minutes: false});
         }
         
         if(hours.length === 0){
             setInputError({...inputError, hours: true});
            return; 
         } else{
             setInputError({...inputError, hours: false}); 
         }

         const data = await fetch('http://127.0.0.1:5000/api/convert_hours_and_minutes_to_seconds', 
         {
            method: 'POST',  
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            // mode: 'no-cors', 
            body: JSON.stringify({"minutes": minutes, "hours": hours})
         })
         .then(response => response.json())
         .then((res) => { 
            if(res.hasOwnProperty('errorMessage')){
                setExceptionMessage(res.errorMessage);            
            } else {
                setExceptionMessage('');    
                setSeconds(res.solution);
            } 
          })
         .catch((err) => console.log(err))
    }

    return(
        <div style={classes.divStyling}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    onChange={(e) => setMinutes(e.target.value)} 
                    id="filled-basic" 
                    label="Minutes" 
                    variant="filled"
                    required={true}
                    error={inputError.minutes} 
                />
                <TextField
                    onChange={(e) => setHours(e.target.value)}   
                    id="filled-basic" 
                    label="Hours" 
                    variant="filled"
                    required={true} 
                    error={inputError.hours}
                />
                <TextField 
                    id="outlined-basic" 
                    value={seconds} 
                    label="Seconds" 
                    disabled={true} 
                    variant="outlined" 
                />
                <Button onClick={() => handleSubmit()} variant="outlined" color="primary">
                    Submit
                </Button>
            </form>
            {exceptionMessage.length !== 0 && (
                <Alert severity="error">
                    {exceptionMessage}
                </Alert>)}
        </div>
    )
}

export default HoursMinutesSeconds;