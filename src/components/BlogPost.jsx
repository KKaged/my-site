import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore"; // Import query and orderBy
import CircularProgress from "@mui/material/CircularProgress";

export default function BlogPosts() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Create a query against the collection, ordering by postID descending
      const blogQuery = query(
        collection(db, "blog"),
        orderBy("postID", "desc")
      );
      const querySnapshot = await getDocs(blogQuery);
      const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogPosts(posts);
    };

    fetchData();
  }, []);

  if (blogPosts.length === 0) {
    return <CircularProgress color="inherit" />;
  }
  return (
    <>
      <div className="flex flex-col">
        {blogPosts.map((blog, index) => (
          <React.Fragment key={blog.id}>
            <div>
              <h3 className="font-bold text-xl py-3">{blog.title}</h3>
              <p className="text-sm text-zinc-500">{blog.create_at}</p>
              <p>{blog.text}</p>
            </div>
            {index < blogPosts.length - 1 && (
              <hr className="border-t border-1.5 border-zinc-700 my-5" />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
