import React from "react";
import { useState } from "react"
import Button from '@mui/material/Button'
import Box from "@mui/material/Box"
import { Avatar } from "@mui/material";


const FormUploadImage = ({ handleFile, name, values }) => {
  const [selectedFile, setSelectedFile] = useState({})

  const selectFile = (e) => {
    handleFile(e)
    
    setSelectedFile({
      current: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0])
    })
  }

  const unSelectFile = () => {
    values[name] = undefined

    setSelectedFile({
      current: undefined,
      preview: undefined
    })
  }

  return (
    <div className="image-upload">
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        {selectedFile.preview ? (
          <Box
            display="flex"
            flexDirection="column"
          >
            <Avatar
              alt="preview-img"
              src={selectedFile.preview}
              sx={{ width: 240, height: 240, margin: "15px 0"}}
            />
            <Button variant="outlined" color="primary" component="span" onClick={unSelectFile}>
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
              onChange={selectFile}
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