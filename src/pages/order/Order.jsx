import React from "react"
import { useState } from "react"
import { Container, Box } from "@mui/material"
import FormWeddingCouple from "./components/FormWeddingCouple"
import FormStepper from "./components/FormStepper"

const steps = ['one', 'two', 'three']

const Order = () => {
  const [activeStep, setActiveStep] = useState(0)

  const [formData, setFormData] = useState({
    groomFullName: "",
    groomCallName: "",
    groomFatherName: "",
    groomMotherName: "",
    groomAdditional: "",
    groomPhoto: "",
    brideFullName: "",
    brideCallName: "",
    brideFatherName: "",
    brideMotherName: "",
    brideAdditional: "",
    bridePhoto: "",
  })

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const prevStep = () => {
    setActiveStep(activeStep - 1)
  }

  const handleInputData = input => e => {
    const target = e.target
    const value = target.type === "file" ? target.files[0] : target.value

    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }))
  }

  const renderForm = (step) => {
    switch (step) {
      case 0:
        return (
          <FormWeddingCouple
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        )
      default:
        return (
          <div>default</div>
        )
    }
  }

  return (
    <Container maxWidth="md">
      <Box
        component="div"
        sx={{
          padding: ".75rem 0"
        }}
      >
        <FormStepper activeStep={activeStep} steps={steps} />
        {renderForm(activeStep)}
      </Box>
    </Container>
  )
}

export default Order
