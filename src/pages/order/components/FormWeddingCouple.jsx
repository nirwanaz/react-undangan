import React from "react";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import FormUploadImage from "./FormUploadImage";

const FormWeddingCouple = ({ nextStep, onChangeInputHandler, onDeleteImgHandler, values }) => {  
  const [error, setError] = useState(false)
  const { groom, bride } = values.couple
  const submitFormData = (e) => {
    e.preventDefault()

    console.log(values.couple)
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
          <FormUploadImage handleFile={onChangeInputHandler} name="bride.photo" values={bride} deleteFile={onDeleteImgHandler("bride")}/>
          <TextField
            name="bride.fullName"
            label="Nama Wanita"
            defaultValue={bride.fullName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="bride.callName"
            label="Nama panggilan"
            defaultValue={bride.callName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="bride.fatherName"
            label="Nama Bapak"
            defaultValue={bride.fatherName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="bride.motherName"
            label="Nama Ibu"
            defaultValue={bride.motherName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="bride.additional"
            label="Informasi tambahan"
            defaultValue={bride.additional}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
        </Grid>

        <Grid item md>
          <FormUploadImage handleFile={onChangeInputHandler} name="groom.photo" values={groom} deleteFile={onDeleteImgHandler("groom")}/>
          <TextField
            name="groom.fullName"
            label="Nama pria"
            defaultValue={groom.fullName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="groom.callName"
            label="Nama panggilan"
            defaultValue={groom.callName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="groom.fatherName"
            label="Nama Bapak"
            defaultValue={groom.fatherName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="groom.motherName"
            label="Nama Ibu"
            defaultValue={groom.motherName}
            onChange={onChangeInputHandler}
            error={error}
            helperText={error && 'this is a required field'}
            margin="normal"
            fullWidth
          />
          <TextField
            name="groom.additional"
            label="Informasi tambahan"
            defaultValue={groom.additional}
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
