import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";

export default function BlogPost() {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "blog", "FRcEAkL76yTVRKF1kwZK");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        // Convert the Firestore timestamp to a JavaScript Date object
        const createdAt = data.create_at;
        setBlogData({ ...data, create_at: createdAt });
      }
    };

    fetchData();
  }, []);

  if (!blogData) {
    return <CircularProgress color="inherit" />;
  }
  console.log(blogData);
  return (
    <>
      <div className="flex flex-col">
        <h3 className="font-bold text-xl py-5">{blogData.title}</h3>
        <p className="text-sm text-zinc-500">{blogData.create_at}</p>
        <p>{blogData.text}</p>
      </div>
      <hr className="border-t border-1.5 border-zinc-700" />
    </>
  );
}
