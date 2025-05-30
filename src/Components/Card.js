import React, {useState} from 'react';
import './Card.css';

export default function Card({ title, description, image, price }) {
    const [count,setCount] = useState(0);
  return (
    <div className="Card">
      <img 
        src={image} 
        alt={title} 
        className="CardImage"
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>${price}</strong></p>
      <button onClick={() => setCount(count + 1)}>
  Add to Cart {count > 0 ? `(${count})` : ''}
</button>
    </div>
  );
}
