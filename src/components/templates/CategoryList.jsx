import { useQuery } from "@tanstack/react-query";
import Loader from "components/modules/Loader";
import { getCategory } from "services/admin";

import styles from "styles/CategoryList.module.css";

function CategoryList() {
  const { data, isLoading } = useQuery(["get-categories"], getCategory);

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((category) => (
          <div key={category._id}>
            <img src={`${category.icon}.svg`} />
            <h5>{category.name}</h5>
            <p>slug: {category.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
