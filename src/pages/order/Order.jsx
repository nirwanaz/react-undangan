import React, { useReducer } from "react"
import { useState } from "react"
import { Container, Box } from "@mui/material"
import FormWeddingCouple from "./components/FormWeddingCouple"
import FormStepper from "./components/FormStepper"
import FormWeddingEvent from "./components/FormWeddingEvent"
import initialOrder from "./components/utils/initialOrder"

const steps = ['one', 'two', 'three']

const reducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE COUPLE':
      return { 
        ...state, 
        couple: {
          ...state.couple,
          [action.object]: {
            ...state[action.object],
            [action.field]: action.payload
          }
        }}
    case 'ADD NEW EVENT':
      return {
        ...state,
        events: [
          ...state.events,
          action.data
        ]
      }
    case 'HANDLE EVENTS':
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
  const [Order, setOrder] = useReducer(reducer, initialOrder)

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const prevStep = () => {
    setActiveStep(activeStep - 1)
  }

  const onChangeInputHandler = e => {
    const target = e.target
    const name = target.name
    const value = target.type === "file" ? target.files[0] : target.value

    setOrder(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleFormCouple = input => e => {
    const { name, value, files, type } = e.target
    setOrder({
      type: "HANDLE COUPLE",
      object: input,
      field: name,
      payload: type === "file" ? files[0] : value
    })
  }

  const addNewFormEvent = () => {
    setOrder({
      type: "ADD NEW EVENT",
      data: { name: "", date: "", timeStart: "", timeEnd: "", location: "" }
    })
  }

  const handleFormEvent = index => e => {
    const { name, value } = e.target

    setOrder({
      type: "HANDLE EVENTS",
      index: index,
      field: name,
      payload: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const fd = new FormData()

    fd.append("groomImg", Order.groomImg)
  }

  const renderForm = (step) => {
    switch (step) {
      case 0:
        return (
          <FormWeddingCouple
            nextStep={nextStep}
            onChangeInputHandler={onChangeInputHandler}
            values={Order}
          />
        )
      case 1:
        return (
          <FormWeddingEvent
            nextStep={nextStep}
            prevStep={prevStep}
            onChangeInputHandler={handleFormEvent}
            values={Order}
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
