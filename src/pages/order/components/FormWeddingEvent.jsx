import React from "react";
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Stack, Box, FormControlLabel, Checkbox } from "@mui/material";
import { LocalizationProvider, TimePicker, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import idLocale from "date-fns/locale/id"

const FormWeddingEvent = ({ nextStep, prevStep, onChangeInputHandler, values, onClone }) => {
  const { events } = values
  
  const checked = (state) => {
    return state.timeEnd === "selesai"
  }

  const validation = () => {
    // nextStep()
    console.log(values)
  }

  const previous = () => prevStep()

  return (
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">Acara Pernikahan</FormLabel>
      <Stack spacing={3}>
        {events.map((event, index) => (
          <Stack spacing={2} key={index}>
            <TextField
              id="eventname"
              label="Nama Acara"
              name="name"
              defaultValue={event.name}
              onChange={onChangeInputHandler(index)}
              fullWidth
              
            />
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={idLocale}>
              <DatePicker
                label="Tanggal"
                value={event.date}
                minDate={new Date()}
                disableMaskedInput
                onChange={(pickerValue) => {
                  onChangeInputHandler(index)({ name: "date", value: pickerValue })
                }}
                inputFormat="PPP"
                renderInput={(props) => {
                  return (
                    <TextField {...props} />
                  )
                }}
              />
              <Stack spacing={3} direction="row">
                <TimePicker
                  label="Waktu Mulai"
                  ampm={false}
                  value={event.timeStart}
                  onChange={(pickerValue) => {
                    onChangeInputHandler(index)({ name: "timeStart", value: pickerValue })
                  }}
                  renderInput={(props) => {
                    return (
                      <TextField {...props} fullWidth/>
                    )
                  }}
                />
                <Box sx={{ m: 2, alignSelf: "center" }} component="span">Sampai</Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="eventTimeEndChecked"
                      value="selesai"
                      checked={checked(event)}
                      name="timeEnd"
                      onChange={(e) => {
                        onChangeInputHandler(index)(e)
                      }}
                    />
                    }
                  label="Selesai"
                />
                
                {!checked(event) && 
                  <TimePicker
                    label="Waktu Berkahir"
                    ampm={false}
                    value={event.timeEnd}
                    minTime={event.timeStart}
                    onChange={(pickerValue) => {
                      onChangeInputHandler(index)({ name: "timeEnd", value: pickerValue })
                    }}
                    renderInput={(props) => {
                      return (
                        <TextField {...props} fullWidth />
                      )
                    }}
                  />
                }

              </Stack>
            </LocalizationProvider>
            <TextField
              id="eventlocation"
              label="Lokasi Acara"
              name="location"
              defaultValue={event.location}
              onChange={onChangeInputHandler(index)}
              fullWidth

            />
          </Stack>
        ))}
        <Button variant="outlined" color="secondary" onClick={onClone}>
          Tambah Acara
        </Button>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary" onClick={previous}>
            previous
          </Button>
          <Button variant="contained" color="primary" onClick={validation}>
            continue          
          </Button>
        </Stack>

      </Stack>
    </FormControl>
  )
}

export default FormWeddingEvent