import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Product.scss";

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  const imageUrl = data.img?.data?.[0]?.attributes?.url;
  
  return (
    <div className="product-card" onClick={() => navigate("/product/"+id)}>
      <div className="thumbnail">
        {imageUrl ? (
          <img src={process.env.REACT_APP_DEV_URL + imageUrl} alt="" />
        ) : (
          <div>No image available</div>
        )}
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price ? `₹${data.price}` : "Price not available"}</span>
      </div>
    </div>
  );
};

export default Product;
