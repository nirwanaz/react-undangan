import React from "react";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import FormUploadImage from "./FormUploadImage";

const FormWeddingCouple = ({ nextStep, handleFormData, values }) => {  
  const [error, setError] = useState(false)
  const { groomFullName, groomCallName, groomFatherName, groomMotherName, groomAdditional } = values
  const { brideFullName, brideCallName, brideFatherName, brideMotherName, brideAdditional } = values

  const submitFormData = (e) => {
    e.preventDefault()

    alert(...{values})

    // nextStep()
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {m: 1, width: '100%'},
        padding: '15px 0'
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl component="fieldset">
        <FormLabel component="legend">Form Wedding Couple</FormLabel>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          padding={2}
          direction="row-reverse"
        >
          <Grid item md>
            <FormUploadImage handleFile={handleFormData} name="bridePhoto" />
            <TextField
              name="fullname"
              label="Nama Wanita"
              defaultValue={brideFullName}
              onChange={handleFormData("brideFullName")}
              error={error}
              helperText={error && 'this is a required field'}
              margin="normal"
              fullWidth
            />
            <TextField
              name="mycallname"
              label="Nama panggilan"
              defaultValue={brideCallName}
              onChange={handleFormData("brideCallName")}
              error={error}
              helperText={error && 'this is a required field'}
              margin="normal"
              fullWidth
            />
            <TextField
              name="father"
              label="Nama Bapak"
              defaultValue={brideFatherName}
              onChange={handleFormData("brideFatherName")}
              error={error}
              helperText={error && 'this is a required field'}
              margin="normal"
              fullWidth
            />
            <TextField
              name="mother"
              label="Nama Ibu"
              defaultValue={brideMotherName}
              onChange={handleFormData("brideMotherName")}
              error={error}
              helperText={error && 'this is a required field'}
              margin="normal"
              fullWidth
            />
            <TextField
              name="additional"
              label="Informasi tambahan"
              defaultValue={brideAdditional}
              onChange={handleFormData("brideAdditional")}
              error={error}
              helperText={error && 'this is a required field'}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item md>
            <FormUploadImage handleFile={handleFormData}/>
            <TextField
              name="myname"
              label="Nama pria"
              defaultValue={groomFullName}
              onChange={handleFormData("groomFullName")}
              error={error}
              helperText={error && 'this is a required field'}
              margin="normal"
              fullWidth
            />
            <TextField
              name="mycallname"
              label="Nama panggilan"
              defaultValue={groomCallName}
              onChange={handleFormData("groomCallName")}
              error={error}
              helperText={error && 'this is a required field'}
              margin="normal"
              fullWidth
            />
            <TextField
              name="father"
              label="Nama Bapak"
              defaultValue={groomFatherName}
              onChange={handleFormData("groomFatherName")}
              error={error}
              helperText={error && 'this is a required field'}
              margin="normal"
              fullWidth
            />
            <TextField
              name="mother"
              label="Nama Ibu"
              defaultValue={groomMotherName}
              onChange={handleFormData("groomMotherName")}
              error={error}
              helperText={error && 'this is a required field'}
              margin="normal"
              fullWidth
            />
            <TextField
              name="mother"
              label="Informasi tambahan"
              defaultValue={groomAdditional}
              onChange={handleFormData("groomAdditional")}
              error={error}
              helperText={error && 'this is a required field'}
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
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
