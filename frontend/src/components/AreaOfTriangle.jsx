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

const AreaOfTriangle = () => {
    const classes = useStyles();
    const [areaOfTriangleAnswer, setAreaOfTriangleAnswer] = useState(0);
    const [base, setBaseValue] = useState('');
    const [height, setHeightValue] = useState('');
    const [inputError, setInputError] = useState({ 
        base: false, height: false, 
    })
    const [exceptionMessage, setExceptionMessage] = useState('')
    

    const handleSubmit = async () => {
         if(base.length === 0){
             setInputError({...inputError, base: true});
             return;
         } else {
             setInputError({...inputError, base: false});
         }
         
         if(height.length === 0){
            setInputError({...inputError, height: true});
            return; 
         } else{
            setInputError({...inputError, height: false}); 
         }

         const data = await fetch('http://127.0.0.1:5000/api/area_of_triangle', {
            method: 'POST',  
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            // mode: 'no-cors', 
            body: JSON.stringify({"base": base, "height": height})
         })
         .then(response => response.json())
         .then((res) => {
             if(res.hasOwnProperty('errorMessage')){
              setExceptionMessage(res.errorMessage);            
             } else {
              setExceptionMessage('');    
              setAreaOfTriangleAnswer(res.solution);
             } 
         }).catch((err) => console.log(err))
    }

    return(
        <div style={classes.divStyling}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    onChange={(e) => setBaseValue(e.target.value)} 
                    id="filled-basic" 
                    label="Base of Triangle" 
                    variant="filled"
                    required={true}
                    error={inputError.base} 
                />
                <TextField
                    onChange={(e) => setHeightValue(e.target.value)}   
                    id="filled-basic" 
                    label="Height of Triangle" 
                    variant="filled"
                    required={true} 
                    error={inputError.height}
                />
                <TextField 
                    id="outlined-basic" 
                    value={areaOfTriangleAnswer} 
                    label="Area Of Triangle" 
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

export default AreaOfTriangle;