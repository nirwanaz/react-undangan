import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

const FormStepper = ({ activeStep, steps }) => (
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

export default FormStepper