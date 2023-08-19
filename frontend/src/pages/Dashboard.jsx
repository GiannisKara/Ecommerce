import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [Category, setCategory] = useState("Shoes");
  const navigate = useNavigate();
  const [suc, setSuc] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5050/dashboard")
      .then((res) => {
        if (res.data === "Success") {
          setSuc("Successed");
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);

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
        console.log(response.data);
        navigate("/");

        // Reload the page
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {suc === "Successed" ? (
        <div className="min-h-screen min-w-screen bg-gradient-to-r from-violet-200 to-violet-400  lg:p-20 mx-auto">
          <div className="flex flex-col justify-center w-[100%] ">
            <div className="border-4 rounded-xl border-violet-50 w-[50%] text-center mx-auto">
              <h1 className="text-[35px] m-5 text-violet-50">
                Add a new product:
              </h1>
              <form action="POST">
                <textarea
                  name="StripeKey"
                  value={input.StripeKey}
                  onChange={handleChange}
                  className="resize-none m-3 border-2 border-violet-700 rounded-xl focus:outline-violet-50 focus:border-violet-50 h-10 overflow-hidden align-top"
                  type="StripeKey"
                  placeholder="StripeKey"
                  required
                ></textarea>
                <textarea
                  name="Name"
                  value={input.Name}
                  onChange={handleChange}
                  className="resize-none m-3 border-2 border-violet-700 rounded-xl focus:outline-violet-50 focus:border-violet-50 h-10 overflow-hidden align-top"
                  type="Name"
                  placeholder="Name"
                  required
                ></textarea>
                <textarea
                  name="Price"
                  value={input.Price}
                  onChange={handleChange}
                  className="resize-none m-3 border-2 border-violet-700 rounded-xl focus:outline-violet-50 focus:border-violet-50 h-10 overflow-hidden align-top"
                  type="Price"
                  placeholder="Price"
                  required
                ></textarea>
                <div className="flex flex-col">
                  <textarea
                    name="Description"
                    value={input.Description}
                    onChange={handleChange}
                    className="resize-none m-3 border-2 border-violet-700 rounded-xl focus:outline-violet-50 focus:border-violet-50 overflow-x-hidden align-top w-[70%] h-[10rem] mx-auto"
                    type="Description"
                    placeholder="Description"
                    required
                  ></textarea>
                  <textarea
                    name="CountInStock"
                    value={input.CountInStock}
                    onChange={handleChange}
                    className="resize-none m-3 text-center h-10 w-[18%] mx-auto overflow-hidden border-2 border-violet-700 rounded-xl focus:outline-violet-50 focus:border-violet-50"
                    type="CountInStock"
                    placeholder="CountInStock"
                    required
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <select
                    value={Category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    className="m-3 text-center w-[30%] mx-auto"
                  >
                    <option value="Tshirt">Tshirt</option>
                    <option value="Jean">Jean</option>
                    <option value="Shoes">Shoes</option>
                  </select>
                  <input
                    type="file"
                    className="m-3 mx-auto"
                    onChange={(e) => setfile(e.target.files[0])}
                  />
                  <button
                    type="submit"
                    className="m-5 p-2 border-2 rounded-xl bg-violet-700 border-violet-100 w-[30%] mx-auto text-xl text-violet-50 transition ease-in-out delay-0 hover:bg-violet-50 hover:text-violet-700 duration-500"
                    onClick={handleSubmit}
                    value="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <h1>Access denied. Please log in as admin.</h1>
      )}
    </div>
  );
};

export default Dashboard;
