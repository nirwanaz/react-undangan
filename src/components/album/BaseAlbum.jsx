import React from "react";
import Box from "@mui/material/Box";
import { ImageList,ImageListItem } from "@mui/material";

export const BaseAlbum = ({ items }) => {
  return (
    <Box sx={{ width: "100%", height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {items.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=${121 * 4}&fit=crop&auto=format`}
              srcSet={`${item.img}?w=${121 * 4}&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}