import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store"; 
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { useGetPostsQuery } from "./features/api"; 
import "./App.css"; 

function App() {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            Redux Toolkit & RTK Query
          </h1>
          <AddTodo />
          <Todos />

          <h2 className="text-2xl font-semibold mt-8">Fetched Posts</h2>
          <ul className="space-y-4">
            {data &&
              data.map((post) => (
                <li key={post.id} className="border p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p>{post.body}</p>
                </li>
              ))}
          </ul>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
