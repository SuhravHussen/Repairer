import React, { useEffect, useState } from 'react';
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight , faChevronLeft  } from '@fortawesome/free-solid-svg-icons'
const Review = () => {

   const [reviews , setReviews] = useState([])
   
   useEffect(()=>{
 fetch('http://localhost:4000/getReviews')
 .then(res=>res.json())
 .then(data=>setReviews(data))
   },[])
console.log(reviews);

    return (
        <div className='reviews-container'>

            <h1 style={{color:'red'} }>Client Reviews</h1>
       <div className="container">

        <div id="demo" className="carousel slide" data-ride="carousel">
             <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="carousel-caption">
                    <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen. </p>
                    <div id="image-caption">Nick Doe</div>
                </div>
            </div>
            
            {

                reviews.map(review=>{
                    return(
                        <div className="carousel-item ">
                        <div className="carousel-caption">
                            <p>{review.review}</p>
                            <div id="image-caption">{review.name}</div><img src={review.photo} alt='image' className="img-fluid"></img>
                        </div>
                    </div>
                    )
                })


            }













        </div> <a className="carousel-control-prev" href="#demo" data-slide="prev"><FontAwesomeIcon className="icon" icon={faChevronLeft} /></a> <a className="carousel-control-next" href="#demo" data-slide="next"> <FontAwesomeIcon className="icon" icon={faChevronRight} /> </a>
    </div>

       </div>
       </div>
    );
};

export default Review;