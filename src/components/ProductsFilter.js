import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const ProductsFilter = ({ products }) => {
  // react hooks
  const context = useContext(ProductContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    chocolate,
    cheese
  } = context;

  // get unique types
  let types = getUnique(products, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(products, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search products" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">product type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* product price */}
        <div className="form-group">
          <label htmlFor="price">product price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of product price*/}
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">product size </label>
          <div className="size-inputs" style={{display: 'block'}}>
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="form-group" style={{display: 'flex'}}>
          <div className="single-extra">
            <input
              type="checkbox"
              name="chocolate"
              id="chocolate"
              checked={chocolate}
              onChange={handleChange}
            />
            <label htmlFor="chocolate">chocolate</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="cheese"
              id="cheese"
              checked={cheese}
              onChange={handleChange}
            />
            <label htmlFor="cheese">cheese</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );

};

export default ProductsFilter;