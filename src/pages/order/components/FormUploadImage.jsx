import React from "react";
import Button from '@mui/material/Button'
import Box from "@mui/material/Box"
import { Avatar } from "@mui/material";

const FormUploadImage = ({ handleFile, name, values }) => {
  const { photo } = values

  const preview = img => {
    return URL.createObjectURL(img)
  }

  const unPreview = () => handleFile({ target: {name: name, value: undefined, type: "text" }})

  return (
    <div className="image-upload">
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        {photo ? (
          <Box
            display="flex"
            flexDirection="column"
          >
            <Avatar
              alt="preview-img"
              src={preview(photo)}
              sx={{ width: 240, height: 240, margin: "15px 0"}}
            />
            <Button variant="outlined" color="primary" component="span" onClick={unPreview}>
              Remove Image
            </Button>
          </Box>
        ) : (
          <Box
            component="label"
          >
            <input
              type="file"
              name={name}
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleFile}
            />
            <Button
              variant="outlined"
              color="primary"
              component="span"
              sx={{ borderRadius: "50%", width: 240, height: 240 }}
            >
              Choose Image
            </Button>
          </Box>
        )}
      </Box>
    </div>
  )
}

export default FormUploadImage