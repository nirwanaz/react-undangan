import React from "react";
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Stack, Box, FormControlLabel, Checkbox } from "@mui/material";
import { LocalizationProvider, TimePicker, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import idLocale from "date-fns/locale/id"

const FormWeddingEvent = ({ nextStep, prevStep, onChangeInputHandler, values }) => {
  const [timeStart, setTimeStart] = React.useState(null)
  const [timeEnd, setTimeEnd] = React.useState(null)
  const [dateStart, setDateStart] = React.useState(null)
  const [checked, setChecked] = React.useState(false)

  const validation = () => {
    // nextStep()
    console.log(values)
  }

  const previous = () => prevStep()

  return (
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">Acara Pernikahan</FormLabel>
      <Stack spacing={3}>
        <TextField
          id="eventname"
          label="Nama Acara"
          name="eventName"
          onChange={onChangeInputHandler}
          fullWidth
          
        />
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={idLocale}>
          <DatePicker
            label="Tanggal"
            value={dateStart}
            minDate={new Date()}
            disableMaskedInput
            onChange={(newValue) => {
              setDateStart(newValue)
            }}
            inputFormat="PPPP"
            renderInput={(props) => {
                values.eventDateStart = props.inputProps.value
                return (
                  <TextField {...props} name="eventDateStart" />
                )
              }}
          />
          <Stack spacing={3} direction="row">
            <TimePicker
              label="Waktu Mulai"
              ampm={false}
              value={timeStart}
              onChange={(newValue) => {
                setTimeStart(newValue)
              }}
              renderInput={(props) => {
                values.eventTimeStart = props.inputProps.value
                return (
                  <TextField {...props} name="eventTimeStart" fullWidth/>
                )
              }}
            />
            <Box sx={{ m: 2, alignSelf: "center" }} component="span">Sampai</Box>
            <FormControlLabel
              control={
                <Checkbox
                  value="selesai"
                  name="eventTimeEnd"
                  onChange={(e) => {
                    onChangeInputHandler(e)
                    setChecked(e.target.checked)
                  }}
                />
                }
              label="Selesai"
            />
            
            {!checked && 
              <TimePicker
                label="Waktu Berkahir"
                ampm={false}
                value={timeEnd}
                onChange={(newValue) => {
                  setTimeEnd(newValue)
                }}
                renderInput={(props) => {
                  values.eventTimeEnd = props.inputProps.value
                  return (
                    <TextField {...props} name="eventTimeEnd" fullWidth/>
                  )
                }}
              />
            }

          </Stack>
        </LocalizationProvider>
        <TextField
          id="eventlocation"
          label="Lokasi Acara"
          name="eventLocation"
          onChange={onChangeInputHandler}
          fullWidth

        />
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