import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getCategory } from "services/admin";
import { getCookie } from "utils/cookie";

import styles from "styles/AddPost.module.css";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: null,
    city: "",
    category: "",
    images: null,
  });

  const { data } = useQuery(["get-categories"], getCategory);

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!form.title || !form.content || !form.amount || !form.city || !form.category || !form.images)
      return toast.error("لطفا تمام فیلدها را پر کنید");

    const button = event.target[6];
    button.disabled = true;

    const formData = new FormData();
    for (let item in form) {
      formData.append(item, form[item]);
    }

    const token = getCookie("accessToken");

    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => (button.disabled = false));
  };

  return (
    <form onChange={changeHandler} onSubmit={submitHandler} className={styles.form}>
      <h3>افزودن آگهی</h3>

      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" />

      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content" />

      <label htmlFor="amount">قیمت</label>
      <input type="number" name="amount" id="amount" />

      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" />

      <label htmlFor="category">دسته بندی</label>
      <select name="category" id="category">
        <option value="">دستهٔ آگهی را انتخاب کنید</option>
        {data?.data.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <label htmlFor="images">تصویر</label>
      <input type="file" name="images" id="images" />

      <button type="submit">افزودن</button>
    </form>
  );
}

export default AddPost;
