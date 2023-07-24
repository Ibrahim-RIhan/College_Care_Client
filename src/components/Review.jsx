import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import useReview from "../hooks/useReview";
import { Pagination } from "swiper/modules";
import { Rating } from "@mui/material";

const Review = () => {
  const reviews = useReview();
  return (
    <div className="my-10">
      <h1 className="text-5xl text-center font-bold  mb-20">Reviews </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper px-10 "
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="p-5 shadow-lg transition-all hover:scale-105 w-full ">
          <div className="flex justify-start gap-7 items-center">
          <div className="avatar">
                  <div className="w-16 rounded-full">
                  <img
                      className="rounded-full "
                      src={review.image}
                      alt="user image"
                    />
                  </div>
                </div>
         
            <div>
              <h1 className="text-xl font-bold ">{review.reviewedBy}</h1>
              <Rating
                    name="half-rating-read"
                    defaultValue={review.rating}
                    precision={0.5}
                    value={review.rating}
                    readOnly
                  />
        
            </div>
          </div>
          <p className="my-5 text-gray-600 font-medium">
          {review.review}
          </p>
         
        </div>
      
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
