import { useQuery } from "@tanstack/react-query";
import Loader from "components/modules/Loader";
import Main from "components/templates/Main";
import SideBar from "components/templates/SideBar";
import { getCategory } from "services/admin";
import { getAllPosts } from "services/user";

const style = { display: "flex" };

function HomePage() {
  const { data: posts, isLoading: postLoading } = useQuery(["post-list"], getAllPosts);
  const { data: categories, isLoading: categoryLoading } = useQuery(["get-categories"], getCategory);

  return (
    <>
      {postLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <SideBar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
