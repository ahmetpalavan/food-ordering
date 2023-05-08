import { useEffect, useState } from "react";
import Input from "../form/Input";
import Title from "../ui/Title";
import axios from "axios";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState(["pizza"]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
        setCategories(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  const addCategory = async (e) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`, { title: inputText });
      setCategories([...categories, res.data]);
      setInputText("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (e, id) => {
    try {
      if (confirm("Are you sure you want to delete this category?")) {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`);
        setCategories(categories.filter((cat) => cat._id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Category</Title>
      <div className="mt-5">
        <div className="flex gap-4 flex-1 items-center">
          <Input placeholder="Add a new Category..." onChange={(e) => setInputText(e.target.value)} value={inputText} />
          <button className="btn-primary" onClick={inputText ? addCategory : () => {}}>
            Add
          </button>
        </div>
        <div className="mt-10 max-h-[300px] overflow-auto pb-4">
          {categories.map((category) => (
            <div className="flex justify-between mt-4" key={category._id}>
              <b className="text-xl">{category.title}</b>
              <button onClick={(e) => handleDelete(e, category._id)} className="btn-primary !bg-danger">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
