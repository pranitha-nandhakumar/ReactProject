import { useEffect, useState } from "react";
import axios from "axios";

const UseEffectAPI = () => {
  const [postParameter, setPostsParameter] = useState([]);

  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPostsParameter(res.data);
      })
      .catch(() => {
        console.log("Could not fetch the data");
      });
  }, []); 

  return (
    <div style={{ margin: "20px" }}>
      <h2>UseEffectAPI Component</h2>
      <p>This component fetches data from an API using useEffect and axios.</p>

      <ol>
        <p>The API values which were fetched:</p>
        {postParameter.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UseEffectAPI;
