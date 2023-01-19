import React from 'react'
import { Box, Card, CardContent, CardMedia, CardHeader, Typography } from '@mui/material'



const ImageCard = (props) => {
  return (
    <div>
      <Box display="flex"
        justifyContent="center"
        alignItems="center">

        <Card sx={{ maxWidth: 512, maxHeight: 512 }}>
          <CardMedia sx={{ height: 216 }} image={props.image} title={props.image_title} />

          <CardContent>
            <Typography variant="h3">
              {props.title}
            </Typography>
            <Typography variant="body2">
              {props.content}
            </Typography>
          </CardContent>
        </Card>

      </Box>

    </div>
  )
}

export default ImageCard