import React from "react";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import FormUploadImage from "./FormUploadImage";


const FormWeddingCouple = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false)
  
  const submitFormData = (e) => {
    e.preventDefault()

    if (!values.name ||
        !values.fatherName ||
        !values.motherName
      ) 
    {
      setError(true)
    } else {
      setError(false)
      nextStep()
    }
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {m: 1, width: '100%'}
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl component="fieldset">
        <FormLabel component="legend">Form Wedding Couple</FormLabel>
        <FormUploadImage />
        <TextField
          name="myname"
          label="Nama pria"
          value={values.name}
          onChange={handleFormData("name")}
          error={error}
          helperText={error && 'this is a required field'}
          margin="normal"
        />
        <TextField
          name="father"
          label="Nama Bapak"
          value={values.fatherName}
          onChange={handleFormData("fatherName")}
          error={error}
          helperText={error && 'this is a required field'}
          margin="normal"
        />
        <TextField
          name="mother"
          label="Nama Ibu"
          value={values.motherName}
          onChange={handleFormData("motherName")}
          error={error}
          helperText={error && 'this is a required field'}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={submitFormData}
        >
          Continue
        </Button>
      </FormControl>
    </Box>
  )
}

export default FormWeddingCouple
