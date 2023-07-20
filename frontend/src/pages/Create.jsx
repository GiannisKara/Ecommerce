import { useState } from "react";
import axios from "axios";

function Create() {
  const [StripeKey, setStripeKey] = useState("");
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState();
  const [Description, setDescription] = useState("");
  const [CountInStock, setCountInStock] = useState("");
  const [Category, setCategory] = useState("");
  let submit = async (e) => {
    e.preventDefault();
    try {
      alert("Product added to DataBase");
      await axios.post(process.env.CONNECT_URI, {
        StripeKey,
        Name,
        Price,
        Description,
        CountInStock,
        Category,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form action="POST">
        <textarea
          name="Stripe"
          onChange={(e) => {
            setStripeKey(e.target.value);
          }}
          placeholder="Enter Product's Stripe key"
          cols="30"
          rows="10"
        ></textarea>
        <textarea
          name="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter Product's Name"
          cols="30"
          rows="10"
        ></textarea>
        <textarea
          name="Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Enter Product's Price"
          cols="30"
          rows="10"
        ></textarea>
        <textarea
          name="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Enter Product's Description"
          cols="30"
          rows="10"
        ></textarea>
        <textarea
          name="CountInStock"
          onChange={(e) => {
            setCountInStock(e.target.value);
          }}
          placeholder="Enter Product's Quantity"
          cols="30"
          rows="10"
        ></textarea>
        <select
          name="Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="Tshirt">Tshirt</option>
          <option value="Jean">Jean</option>
          <option value="Shoes">Shoes</option>
        </select>

        <input type="submit" onClick={submit} value="submit"></input>
      </form>
    </div>
  );
}

export default Create;
