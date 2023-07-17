import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [input, setInput] = useState({
    stripe: "",
    title: "",
    categorie: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      stripe: input.stripe,
      title: input.title,
      price: input.price,
      categorie: input.categorie,
      image: input.image,
    };

    axios.post("http://localhost:5050/create", newProduct);
    window.location.reload();
  };

  return (
    <div className="container p-5 h-screen">
      <div className="container-sm flex justify-center items-center mt-2">
        <h1 className="text-dark text-4xl">CREATE</h1>
      </div>

      <form className="flex flex-col border border-dark  rounded mx-auto p-5 w-75 mt-5 text-dark bg-primary bg-opacity-75">
        <div className="mb-3">
          <label htmlFor="stripe" className="form-label">
            stripe
          </label>
          <input
            name="stripe"
            className="border border-dark p-1"
            id="stripe"
            placeholder="stripe"
            value={input.stripe}
            onChange={handleChange}
            required
          />
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            name="title"
            value={input.title}
            onChange={handleChange}
            className="border border-dark p-1"
            type="text"
            id="title"
            placeholder="Title"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            price
          </label>
          <input
            name="price"
            className="border border-dark p-1"
            id="price"
            placeholder="price"
            value={input.price}
            onChange={handleChange}
            required
          />
          <label htmlFor="stripe" className="form-label">
            category
          </label>
          <input
            name="categorie"
            className="border border-dark p-1"
            id="categorie"
            placeholder="category"
            value={input.categorie}
            onChange={handleChange}
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-success bg-opacity-50 w-20 mx-auto mt-5 border-dark border-2 py-1"
        >
          <h5>Save Product</h5>
        </button>
      </form>
    </div>
  );
};

export default Create;
