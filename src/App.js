import React, { useState } from "react";

const App = () => {
  const [image, setImage] = useState(null);
  const [otherFields, setOtherFields] = useState({
    id: "",
    name: "",
    maxCapacity: "",
    regularPrice: "",
    discount: "",
    description: "",
  });

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleFieldChange = (event) => {
    setOtherFields({
      ...otherFields,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    Object.keys(otherFields).forEach((key) => {
      formData.append(key, otherFields[key]);
    });

    fetch("http://localhost:5050/cabins", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="ID"
        onChange={handleFieldChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleFieldChange}
      />
      <input
        type="text"
        name="maxCapacity"
        placeholder="Max Capacity"
        onChange={handleFieldChange}
      />
      <input
        type="text"
        name="regularPrice"
        placeholder="Regular Price"
        onChange={handleFieldChange}
      />
      <input
        type="text"
        name="discount"
        placeholder="Discount"
        onChange={handleFieldChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={handleFieldChange}
      />
      <input type="file" name="image" onChange={handleImageChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
