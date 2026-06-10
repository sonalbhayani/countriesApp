import { styled } from '@mui/material/styles';
import {Box,Paper,Grid} from '@mui/material';
import {useState, useEffect} from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';

function CountryList() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {   
         axios.get('https://xcountries-backend.labs.crio.do/all')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
       
        
    }, []);

  return (
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {countries.map((country) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={country.id}>
            <CountryCard country={country} />
          </Grid>
        ))}
        
      </Grid>
    </Box>
  )
}

export default CountryList