import React from "react";
import { useState } from "react"
import Button from '@mui/material/Button'
import Box from "@mui/material/Box"
import { Avatar } from "@mui/material";


const FormUploadImage = () => {
  const [file, setFile] = useState({
    current: undefined,
    preview: undefined,
  })

  const selectFile = (e) => {
    setFile({
      current: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0])
    })
  }

  return (
    <div className="image-upload">
      <label htmlFor="btn-upload">
        <input
          type="file"
          id="btn-upload"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={selectFile}
        />
        <Button variant="outlined" color="primary" component="span">
          Choose Image
        </Button>
      </label>
      <div className="file-name">
        {file.current ? file.current.name : null}
      </div>
      <Button
        variant="contained"
        color="primary"
        component="span"
        disabled={!file.current}
        onClick={() => console.log('upload')}
      >
        Upload  
      </Button>
      {file.current && (
        <Box className="my20" display="flex" alignItems="center">
          <Box width="100%" mr={1}>

          </Box>
        </Box>
      )}
      {file.preview && (
        <Avatar
          alt="preview-img"
          src={file.preview}
          sx={{ width: 100, height: 100}}
        />
      )}
    </div>
  )
}

export default FormUploadImage