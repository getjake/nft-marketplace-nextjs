import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const NftCard = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: '0.5rem' }} >
    <CardMedia
      component="img"
      height="140"
      image="https://th-thumbnailer.cdn-si-edu.com/x33MSpps0XoKiZCE1Z6vofJwXTM=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/blogging/featured/A_green_and_white-spotted_lizard_on_orange_surface.jpg"
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
  </Card>
  )
}

export default NftCard;
