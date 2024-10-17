import { useQuery } from "@tanstack/react-query";
import Loader from "components/modules/Loader";
import { getCategory } from "services/admin";

function CategoryList() {
  const { data, isLoading } = useQuery(["get-categories"], getCategory);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((category) => (
          <div key={category._id}>
            <img src={`${category.icon}.svg`} />
            <h5>{category.name}</h5>
            <p>slug:{category.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
