import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [Category, setCategory] = useState("Shoes");
  const navigate = useNavigate();
  const [input, setInput] = useState({
    StripeKey: "",
    Name: "",
    Price: "",
    Description: "",
    CountInStock: "",
    Category: "",
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
  const [file, setfile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("StripeKey", input.StripeKey);
    formData.append("Name", input.Name);
    formData.append("Price", input.Price);
    formData.append("Description", input.Description);
    formData.append("CountInStock", input.CountInStock);
    formData.append("Category", Category);
    formData.append("file", file);
    axios
      .post("http://localhost:5050/create", formData)
      .then((response) => {
        // Handle the response if needed
        // For example, you can check if the product was successfully created
        console.log(response.data);

        // Navigate to the root ("/")
        navigate("/");

        // Reload the page
        window.location.reload();
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <div>
      <form action="POST">
        <textarea
          name="StripeKey"
          value={input.StripeKey}
          onChange={handleChange}
          className="resize-none"
          type="StripeKey"
          placeholder="StripeKey"
          required
        ></textarea>
        <textarea
          name="Name"
          value={input.Name}
          onChange={handleChange}
          className="resize-none"
          type="Name"
          placeholder="Name"
          required
        ></textarea>
        <textarea
          name="Price"
          value={input.Price}
          onChange={handleChange}
          className="resize-none"
          type="Price"
          placeholder="Price"
          required
        ></textarea>
        <textarea
          name="Description"
          value={input.Description}
          onChange={handleChange}
          className="resize-none"
          type="Description"
          placeholder="Description"
          required
        ></textarea>
        <textarea
          name="CountInStock"
          value={input.CountInStock}
          onChange={handleChange}
          className="resize-none"
          type="CountInStock"
          placeholder="CountInStock"
          required
        ></textarea>
        <select
          value={Category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="Tshirt">Tshirt</option>
          <option value="Jean">Jean</option>
          <option value="Shoes">Shoes</option>
        </select>
        <input type="file" onChange={(e) => setfile(e.target.files[0])} />
        <button
          type="submit"
          className="m-5 p-1 border-2 border-violet-700"
          onClick={handleSubmit}
          value="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
