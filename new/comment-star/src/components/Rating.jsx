import React from 'react'
import "./Rating.css";

const Rating = ({rating}) => {

  return (
    <div>
        {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    className="rating_element"
                    style={{ backgroundColor: index < rating ? "green" : '#ccc' }}
                ></span>
            ))}
    </div>
  )
}

export default Rating