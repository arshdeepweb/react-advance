import { usePosts } from "./hooks/usePosts";
import Loader from "./components/Loader";

const App = () => {
  const { posts, isLoading, error, fetchPosts } = usePosts();

  return (
    <div>
      <h1>App Js</h1>
      <button onClick={fetchPosts}>Fetch Posts</button>

      {isLoading && <Loader />}
      {error && <div>Error</div>}

      {posts?.map((post, index) => (
        <div key={index}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
