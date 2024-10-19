import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { addCategory } from "services/admin";

import styles from "styles/CategoryForm.module.css";

function CategoryForm() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const { mutate, isLoading } = useMutation(addCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-categories");
      toast.success("دسته بندی با موفقیت ایجاد شد");
    },
    onError: (error) => {
      toast.error(`مشکلی پیش آمده است:\n\n ${error.response.data.message}`);
    },
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!form.name || !form.slug || !form.icon) return toast.error("لطفا تمام فیلدها را پر کنید");
    mutate(form);
  };

  return (
    <form onChange={changeHandler} onSubmit={submitHandler} className={styles.form}>
      <h3>دسته بندی جدید</h3>
      <label htmlFor="name">اسم دسته بندی</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="slug">اسلاگ</label>
      <input type="text" name="slug" id="slug" />
      <label htmlFor="icon">آیکون</label>
      <input type="text" name="icon" id="icon" />
      <button type="submit" disabled={isLoading}>
        افزودن
      </button>
    </form>
  );
}

export default CategoryForm;
