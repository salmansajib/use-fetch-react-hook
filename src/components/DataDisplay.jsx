import useFetch from "../hooks/useFetch";

function DataDisplay() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  if (loading) {
    return (
      <div className=" min-h-screen flex items-center justify-center">
        <p className="font-semibold text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className=" min-h-screen flex items-center justify-center">
        <p className="font-semibold text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center font-bold text-2xl p-5">Fetched Data:</h1>

      <ul className="space-y-5 max-w-2xl mx-auto">
        {data.map((post) => (
          <li key={post.id}>
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
