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

const StringRepeat = () => {
    const classes = useStyles();
    const [combinedString, setCombinedString] = useState(0);
    const [repetition, setNumberOfRepetitions] = useState(0);
    const [inputString, setInputString] = useState('');
    const [inputError, setInputError] = useState({ 
        base: false, height: false 
    });
    const [exceptionMessage, setExceptionMessage] = useState('')

    const handleSubmit = async () => {
         
         if(inputString.length === 0){
            setInputError({...inputError, inputString: true});
            return; 
         } else{
            setInputError({...inputError, inputString: false}); 
         }

         const data = await fetch('http://127.0.0.1:5000/api/string_repeat', {
            method: 'POST',  
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            // mode: 'no-cors', 
            body: JSON.stringify({
                "repetition": repetition, "str_to_repeat": inputString
            })
         })
         .then(response => response.json())
         .then(res =>  { 
            if(res.hasOwnProperty('errorMessage')){
                setExceptionMessage(res.errorMessage);            
            } else {
                setExceptionMessage('');    
                setCombinedString(res.solution);
            } 
          })
         .catch(err => console.log(err))
    }

    return(
        <div style={classes.divStyling}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    onChange={(e) => setNumberOfRepetitions(e.target.value)} 
                    id="filled-basic" 
                    label="Number of Repetitions" 
                    variant="filled"
                    required={true}
                    error={inputError.base} 
                />
                <TextField
                    onChange={(e) => setInputString(e.target.value)}   
                    id="filled-basic" 
                    label="String to be Repeated" 
                    variant="filled"
                    required={true} 
                    error={inputError.height}
                />
                <TextField 
                    id="outlined-basic" 
                    value={combinedString} 
                    label="Combined String" 
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

export default StringRepeat;