import React, { useState } from "react";

let allProducts = [
  {
    id: 1,
    name: "chicken",
    quantity: 23,
    price: 100,
  },
];
const PracticeBook = () => {
  const [products, setProducts] = useState(allProducts);
  const [formData, setFormdata] = useState({
    id: null,
    name: "",
    quantity: "",
    price: "",
  });

  let handleChange = (e) => {
    let { value, name } = e.target;
    setFormdata({ ...formData, [name]: value });
  };

  let handleAddEdit = (e) => {
    e.preventDefault();

    if (formData.id) {
      const updatedproduct = products.map((product) => {
        return product.id === formData.id ? formData : product;
      });
      setFormdata(updatedproduct);
    } else {
      let lastProductId = products[products.id - 1]?.id ?? 0;
      setProducts((prevProduct) => [
        ...prevProduct,
        { formData, id: lastProductId + 1 },
      ]);
    }
  };

  let handleEdit = (product) => {
    setFormdata(product);
  };

  return (
    <div className="flex items-center justify-center flex-col  h-screen">
      <form action="" onClick={handleAddEdit}>
        <h1>Form Data</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="border"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Quantity</label>
          <input
            type="text"
            onChange={handleChange}
            name="quantity"
            value={formData.quantity}
            id=""
            className="border"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Price</label>
          <input
            onChange={handleChange}
            value={formData.price}
            name="price"
            type="text"
            className="border"
          />
        </div>
      </form>

      <ul>
        {products.map((items) => (
          <div>
            <li key={items.id}>
              <span
                onClick={() =>
                  setProducts(
                    products.filter((remove) => remove.id !== items.id),
                  )
                }
              >
                ❌
              </span>
              <span onClick={() => handleEdit(items)}>Edit</span>
              <span>Id: {items.id}</span>
              <span>Name: {items.name}</span>
              <span>Quantity: {items.quantity}</span>
              <span>Price: {items.price}</span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PracticeBook;
