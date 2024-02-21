import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Blog() {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "blog", "FRcEAkL76yTVRKF1kwZK");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setBlogData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Contact</h1>
      <p>{blogData.text}</p>
    </div>
  );
}
