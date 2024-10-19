import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";

function SideBar() {
  const { data } = useQuery(["get-categories"], getCategory);
  
  return (
    <div>
      <h4>دسته‌ها</h4>
      <ul>
        {data?.data.map((category) => (
          <li key={category._id}>
            <img src={`${category.icon}.svg`} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
