import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import useReview from "../hooks/useReview";
import { Pagination } from "swiper/modules";
import { Rating } from "@mui/material";

const Review = () => {
  const reviews = useReview();
  return (
    <div>
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
        className="mySwiper place-items-center grid "
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="bg-red-300">
              <div className="flex gap-5  items-center">
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
                  <h5>{review.reviewedBy}</h5>
                <p>{review.collegeName}</p>
                  <Rating
                    name="half-rating-read"
                    defaultValue={review.rating}
                    precision={0.5}
                    value={review.rating}
                    readOnly
                  />
                </div>
              </div>
              <div className="shadow-xl text-start">
                
                <p>{review.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
