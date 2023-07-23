import graduate1 from "../assets/graduate1.jpg";
import graduate2 from "../assets/graduate2.jpg";
import graduate3 from "../assets/graduate3.jpg";
import graduate4 from "../assets/graduate 4.jpg";
import graduate5 from "../assets/graduate5.jpg";
import graduate6 from "../assets/graduate6.jpg";

const Gallery = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl mb-20 text-center text-blue-950">
        Gallery
      </h1>
      <div className="gallery-container md:flex-row mb-10 ">
        <img className="h-96 rounded-xl " src={graduate2} alt="" />
        <div className="md:w-1/3 md:text-end text-center px-3">
          <h1 className="font-semibold text-3xl ">Saint Peter'sBerg College</h1>
          <p className="my-3 text-xl ">Graduation Ceremony -2018 </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            sapiente, facere quos numquam magni, alias impedit, sint quis
            nesciunt laboriosam eius hic enim? Cumque expedita nulla et quae
            amet eius.
          </p>
        </div>
      </div>
      <div className="gallery-container-reverse md:flex-row mb-10 ">
        <div className="md:w-1/3 md:text-start text-center px-3">
          <h1 className="font-semibold text-3xl ">Saint Peter'sBerg College</h1>
          <p className="my-3 text-xl ">Graduation Ceremony -2018 </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            sapiente, facere quos numquam magni, alias impedit, sint quis
            nesciunt laboriosam eius hic enim? Cumque expedita nulla et quae
            amet eius.
          </p>
        </div>
        <img className="h-96 rounded-xl " src={graduate3} alt="" />
      </div>
      <div className="gallery-container md:flex-row mb-10 ">
        <img className="h-96 rounded-xl " src={graduate1} alt="" />
        <div className="md:w-1/3 md:text-end text-center px-3">
          <h1 className="font-semibold text-3xl ">Saint Peter'sBerg College</h1>
          <p className="my-3 text-xl ">Graduation Ceremony -2018 </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            sapiente, facere quos numquam magni, alias impedit, sint quis
            nesciunt laboriosam eius hic enim? Cumque expedita nulla et quae
            amet eius.
          </p>
        </div>
      </div>
      <div className="gallery-container-reverse md:flex-row mb-10 ">
        <div className="md:w-1/3 md:text-start text-center px-3">
          <h1 className="font-semibold text-3xl ">Saint Peter'sBerg College</h1>
          <p className="my-3 text-xl ">Graduation Ceremony -2018 </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            sapiente, facere quos numquam magni, alias impedit, sint quis
            nesciunt laboriosam eius hic enim? Cumque expedita nulla et quae
            amet eius.
          </p>
        </div>
        <img className="h-96 rounded-xl " src={graduate5} alt="" />
      </div>
      <div className="gallery-container md:flex-row mb-10 ">
        <img className="h-96 rounded-xl " src={graduate6} alt="" />
        <div className="md:w-1/3 md:text-end text-center px-3">
          <h1 className="font-semibold text-3xl ">Saint Peter'sBerg College</h1>
          <p className="my-3 text-xl ">Graduation Ceremony -2018 </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            sapiente, facere quos numquam magni, alias impedit, sint quis
            nesciunt laboriosam eius hic enim? Cumque expedita nulla et quae
            amet eius.
          </p>
        </div>
      </div>
      <div className="gallery-container-reverse md:flex-row mb-10 ">
        <div className="md:w-1/3 md:text-start text-center px-3">
          <h1 className="font-semibold text-3xl ">Saint Peter'sBerg College</h1>
          <p className="my-3 text-xl ">Graduation Ceremony -2018 </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            sapiente, facere quos numquam magni, alias impedit, sint quis
            nesciunt laboriosam eius hic enim? Cumque expedita nulla et quae
            amet eius.
          </p>
        </div>
        <img className="h-96 rounded-xl " src={graduate4} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
