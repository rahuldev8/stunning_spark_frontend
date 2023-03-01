import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function numberWithCommas(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function mrp(price)
{
  let min = price*1.19;
  let max = price*1.41 ;
  let new_mrp = (Math.random() * (max - min) + min).toFixed(0);
  let mrp_format = numberWithCommas(new_mrp);
  return mrp_format;
}

function new_mrp(price)
{
  let min = price*1.19;
  let max = price*1.41 ;
  let mrp_format = (Math.random() * (max - min) + min).toFixed(0);
  return mrp_format;
}

function offer(curr)
{
  let mrp_ = new_mrp(curr);
  let offer = (curr/ mrp_)*100;
  return Math.abs(100 - offer.toFixed(0));
}



const Product = ({ product }) => {
  
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div' >
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} review`}/>
        </Card.Text>

        <Card.Text as='h3' styles=" padding-bottom:0px"><strong>₹{numberWithCommas(product.price)}</strong></Card.Text>
        <div className='mrp_on_card'>₹{mrp(product.price)}</div> 
        <div className='offer_on_card'><span className='offer_name'>Today's Deal 👉🏻 </span><strong>{offer(product.price)}</strong>% offer</div>
      </Card.Body>
    </Card>
  )
}

export default Product