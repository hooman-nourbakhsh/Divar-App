import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";

function AddPost() {
  const { data } = useQuery(["get-categories"], getCategory);
  
  const addHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <h3>افزودن آگهی</h3>
      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content" />
      <label htmlFor="amount">قیمت</label>
      <input type="text" name="amount" id="amount" />
      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" />
      <label htmlFor="category">دسته بندی</label>
      <select name="category" id="category">
        {data?.data.map((category) => (
          <option key={category._id}>{category.name}</option>
        ))}
      </select>
      <label htmlFor="images"></label>
      <input type="file" name="images" id="images" />
      <button onClick={addHandler}>افزودن</button>
    </form>
  );
}

export default AddPost;
