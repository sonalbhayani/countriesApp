import {Card,CardContent,CardMedia,Typography,CardActionArea} from '@mui/material';

function CountryCard({country}) {
  return (
    <Card sx={{ maxWidth: 150, maxHeight: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={country.flag}
          alt={country.name}
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            {country.name}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CountryCard