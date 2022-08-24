import React, { useReducer } from "react"
import { useState } from "react"
import { Container, Box } from "@mui/material"
import FormWeddingCouple from "./components/FormWeddingCouple"
import FormStepper from "./components/FormStepper"
import FormWeddingEvent from "./components/FormWeddingEvent"
import initialOrder from "./components/utils/initialOrder"

const steps = ['one', 'two', 'three']
const ACTIONS = {
  UPDATE: {
    COUPLE: "update-couple",
    EVENTS: "update-events"
  },
  ADD: {
    EVENT: "add-event"
  },
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE.COUPLE:
      return { 
        ...state, 
        couple: {
          ...state.couple,
          [action.object]: {
            ...state.couple[action.object],
            [action.field]: action.payload
          }
        }
      }
    case ACTIONS.ADD.EVENT:
      return {
        ...state,
        events: [
          ...state.events,
          action.data
        ]
      }
    case ACTIONS.UPDATE.EVENTS:
      return {
        ...state,
        events: state.events.map((event, index) => {
          return index === action.index ? { ...event, [action.field]: action.payload } : event
        })
      }
    default:
      return state
  }
}

const Order = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialOrder)

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const prevStep = () => {
    setActiveStep(activeStep - 1)
  }

  const handleFormCouple = e => {
    const { name, value, files, type } = e.target
    const names = name.split('.')
    
    dispatch({
      type: ACTIONS.UPDATE.COUPLE,
      object: names[0],
      field: names[1],
      payload: type === "file" ? files[0] : value
    })
  }

  const addNewFormEvent = () => {
    dispatch({
      type: ACTIONS.ADD.EVENT,
      data: { name: "", date: null, timeStart: null, timeEnd: null, location: "" }
    })
  }

  const handleFormEvent = index => (e) => {
    const target = e.target || e
    const { name, value } = target

    dispatch({
      type: ACTIONS.UPDATE.EVENTS,
      index: index,
      field: name,
      payload: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const fd = new FormData()

    fd.append("groomImg", state.groomImg)
  }

  const renderForm = (step) => {
    switch (step) {
      case 0:
        return (
          <FormWeddingCouple
            nextStep={nextStep}
            onChangeInputHandler={handleFormCouple}
            values={state}
          />
        )
      case 1:
        return (
          <FormWeddingEvent
            nextStep={nextStep}
            prevStep={prevStep}
            onChangeInputHandler={handleFormEvent}
            values={state}
            onClone={addNewFormEvent}
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
