import styles from "styles/SideBar.module.css";

function SideBar({ categories }) {
  return (
    <div className={styles.sideBar}>
      <h4>دسته‌ها</h4>
      <ul>
        {categories.data.map((category) => (
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
