import React from "react"
import { useState } from "react"
import { Container, Typography, Box, Stepper, Step, StepLabel } from "@mui/material"
import FormWeddingCouple from "./components/FormWeddingCouple"

const steps = ['one', 'two', 'three']

const Order = () => {
  const [activeStep, setActiveStep] = useState(1)

  const [formData, setFormData] = useState({
    name: ""
  })

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const prevStep = () => {
    setActiveStep(activeStep - 1)
  }

  const handleInputData = input => e => {
    const { value } = e.target

    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }))
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default Order
