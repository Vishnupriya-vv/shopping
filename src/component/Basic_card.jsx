import React from 'react'
import { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
const Basic_card = () => {
    var[product,setProduct]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {product.map((val,i)=>(
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={val.image}
              title={val.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {val.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {val.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          ))}
    </div>
  )
}

export default Basic_card