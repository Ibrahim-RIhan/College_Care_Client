import { useEffect, useState } from "react";

const useReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://college-care-server.vercel.app/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return review;
};

export default useReview;
