import React from "react";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import { Box, Button, FormControl, FormGroup, FormHelperText, FormLabel, OutlinedInput, TextField } from "@mui/material";

const FormWeddingCouple = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false)
  
  const submitFormData = (e) => {
    e.preventDefault()
    setError(false)

    if (!values.name) setError(true)
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
        <FormGroup>
          <TextField
            name="myname"
            label="Nama pria"
            value={values.name}
            onChange={handleFormData("name")}
            error={error}
            margin="normal"
          />
          {error && <FormHelperText>This is a required field</FormHelperText>}
        </FormGroup>
        <FormGroup>
          <TextField
            name="father"
            label="Nama Bapak"
            value={values.fatherName}
            onChange={handleFormData("fatherName")}
            error={error}
            margin="normal"
          />
          {error && <FormHelperText>This is a required field</FormHelperText>}
        </FormGroup>
        <FormGroup>
          <TextField
            name="mother"
            label="Nama Ibu"
            value={values.motherName}
            onChange={handleFormData("motherName")}
            error={error}
            margin="normal"
          />
          {error && <FormHelperText>This is a required field</FormHelperText>}
        </FormGroup>
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
