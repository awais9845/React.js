import React, { useState } from "react";
const students = [
  {
    id: 1,
    name: "Ali",
    age: 20,
    city: "Peshawar",
  },
  {
    id: 2,
    name: "Awais",
    age: 19,
    city: "Lahore",
  },
  {
    id: 3,
    name: "Ahmed",
    age: 21,
    city: "Karachi",
  },
];
const Books = () => {
  const [book, setBook] = useState(students);
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    city: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  let handleAddbook = (e) => {
    e.preventDefault();
    if (formdata.id) {
      const updatedBook = book.map((student) => {
        return student.id === formdata.id ? formdata : student;
      });
      setBook(updatedBook);
    } else {
      let lastBookId = book[book.length - 1].id ?? 0;
      setBook((prevBook) => [...prevBook, { ...formdata, id: lastBookId + 1 }]);
    }
  };

  let handleEdit = (student) => {
    setFormdata(student);
  };
  return (
    <div className="flex flex-col gap-6 p-3 justify-center items-center">
      <form
        action=""
        onSubmit={handleAddbook}
        className="border w-75  p-3 rounded-2xl"
      >
        <li className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Name</label>
            <input
              onChange={handleChange}
              name="name"
              value={formdata.name}
              type="text"
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">age</label>
            <input
              onChange={handleChange}
              name="age"
              value={formdata.age}
              type="text"
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">city</label>
            <input
              onChange={handleChange}
              name="city"
              value={formdata.city}
              type="text"
              className="border p-2 rounded"
            />
          </div>
          <button className="border w-full rounded-lg p-2">Submit</button>
        </li>
      </form>
      <ul className="flex flex-wrap gap-3">
        {book.map((items) => (
          <div>
            <li
              key={items.id}
              className="border rounded-2xl p-5 w-fit relative pt-10"
            >
              <div>
                <span
                  className="absolute top-2 right-2"
                  onClick={() => setBook(book.filter((b) => b.id !== items.id))}
                >
                  ❌
                </span>
                {/* edit  */}
                <span
                  className="absolute top-2 left-2"
                  onClick={() => handleEdit(items)}
                >
                  Edit
                </span>
              </div>
              <span>Id: </span> {items.id} <br />
              <span>Name: </span> {items.name} <br />
              <span>Age: </span> {items.age} <br />
              <span>City: </span> {items.city}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Books;
