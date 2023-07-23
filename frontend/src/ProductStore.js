import tshirt1 from "./images/t-shirt-1.png";
const ProductArray = [
  {
    id: "price_1NSP3WL5vCUgJ7hdTSkYJYzP",
    title: "tshirt1",
    price: 19.99,
    image: tshirt1,
  },
  {
    id: "price_1NTsU4L5vCUgJ7hdU9Xt7ski",
    title: "tshirt2",
    price: 39.99,
    image: tshirt1,
  },
  {
    id: "price_1NTsURL5vCUgJ7hd1UbIIEgg",
    title: "tshirt3",
    price: 89.99,
    image: tshirt1,
  },
  {
    id: "price_1NSP4pL5vCUgJ7hdTEbK0TFZ",
    title: "jean1",
    price: 19.99,
    image: tshirt1,
  },
  {
    id: "price_1NTsUsL5vCUgJ7hdmOqOwfUr",
    title: "jean2",
    price: 39.99,
    image: tshirt1,
  },
  {
    id: "price_1NTsVGL5vCUgJ7hdTFUYsg6b",
    title: "jean3",
    price: 89.99,
    image: tshirt1,
  },
  {
    id: "price_1NSP5FL5vCUgJ7hdnJsDrT65",
    title: "shoes1",
    price: 19.99,
    image: tshirt1,
  },
  {
    id: "price_1NTsW2L5vCUgJ7hdV9JY9s9y",
    title: "shoes2",
    price: 39.99,
    image: tshirt1,
  },
  {
    id: "price_1NTsWEL5vCUgJ7hdsIpX1hFs",
    title: "shoes3",
    price: 89.99,
    image: tshirt1,
  },
];

function getProdactData(id) {
  const ProductData = ProductArray.find((product) => product.id === id);

  if (ProductData === undefined) {
    console.log("Product id is undefined");
  } else {
    return ProductData;
  }
}
export { ProductArray, getProdactData };