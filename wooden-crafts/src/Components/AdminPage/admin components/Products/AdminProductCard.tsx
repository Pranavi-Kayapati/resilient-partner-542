import React from "react";
import { Product } from "../../../constrainsts/Type";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
const AdminProductCard = ({ item }: any) => {
  const {
    id,
    image,
    category,
    material,
    color,
    brand,
    title,
    price,
    description,
  }: Product = item;

  return (
    <div className="product-card">
      <div className="product-card-img-div">
        <img src={image} alt={title} />
      </div>
      <div className="product-card-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-brand">
          <span>Brand :</span>
          {brand}
        </p>
        <div className="product-card-category">
          <p>
            <span>Category :</span>
            {category}
          </p>
          <span className="material">{` ( ${material} ) `}</span>
        </div>

        <p>
          <span>Color :</span>
          {color}
        </p>
        <p>
          <span>Price :</span>
          <span className="price">Rs.{price}</span>
        </p>
      </div>
      <div className="edit-delete-btn">
        <button className="sub-head">
          <BiEdit />
          <span className="padd-15">Edit</span>
        </button>
        <button className="sub-head">
          <RiDeleteBinLine />
          <span className="padd-15">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default AdminProductCard;

// {
//   "id": 5,
//   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBA_U1y51VPFIBePwgPgoSQWmhtGlRZSERA&usqp=CAU",
//   "category": "Fabric Sofas",
//   "material": "Cotton",
//   "color": "Grey",
//   "brand": "Urban Living ",
//   "title": "Swanson Chesterfield Sofa",
//   "price": "25,000",
//   "description": {
//     "Monsoon Sale": " Apply Coupon MONSOON & Get Upto 20% Off (price inclusive of discount) T&C",
//     "Store Discount": "Get upto 10% off on orders placed at your nearest experience stores T&C",
//     "No Cost EMI": "Starting from Rs 5,269 on ICICI, Axis, Kotak, HDFC, SBI & More"
//   }
