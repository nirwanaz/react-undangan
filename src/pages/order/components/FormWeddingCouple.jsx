import React from "react";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import FormUploadImage from "./FormUploadImage";

const FormWeddingCouple = ({ nextStep, onChangeInputHandler, values }) => {  
  const [error, setError] = useState(false)
  const { groomFullName, groomCallName, groomFatherName, groomMotherName, groomAdditional } = values
  const { brideFullName, brideCallName, brideFatherName, brideMotherName, brideAdditional } = values

  const submitFormData = (e) => {
    e.preventDefault()

    nextStep()
  }

return (
    <FormControl component="fieldset" fullWidth>
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
          <FormUploadImage handleFile={onChangeInputHandler} name="bridePhoto" values={values}/>
          <TextField
            name="brideFullName"
            label="Nama Wanita"
            defaultValue={brideFullName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="brideCallName"
            label="Nama panggilan"
            defaultValue={brideCallName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="brideFatherName"
            label="Nama Bapak"
            defaultValue={brideFatherName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="brideMotherName"
            label="Nama Ibu"
            defaultValue={brideMotherName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="brideAdditional"
            label="Informasi tambahan"
            defaultValue={brideAdditional}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item md>
          <FormUploadImage handleFile={onChangeInputHandler} name="groomPhoto" values={values}/>
          <TextField
            name="groomFullName"
            label="Nama pria"
            defaultValue={groomFullName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="groomCallName"
            label="Nama panggilan"
            defaultValue={groomCallName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="groomFatherName"
            label="Nama Bapak"
            defaultValue={groomFatherName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="groomMotherName"
            label="Nama Ibu"
            defaultValue={groomMotherName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="groomAdditional"
            label="Informasi tambahan"
            defaultValue={groomAdditional}
            onChange={onChangeInputHandler}
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
  )
}

export default FormWeddingCouple
