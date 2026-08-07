import React from "react";
import img1 from "../../assets/VenueImages/img1.webp"
import img2 from "../../assets/VenueImages/img2.webp"
import img3 from "../../assets/VenueImages/img3.webp"
import img4 from "../../assets/VenueImages/img4.webp"
import img5 from "../../assets/VenueImages/img5.webp"
import img6 from "../../assets/VenueImages/img6.webp"
const ImageGalleryCard = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* First row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src={img1}
          alt="VenueImage1"
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src={img2}
          alt="VenueImage2"
          loading="lazy"
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src={img3}
           alt="VenueImage3"
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>

      {/* Second row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src={img4}
            alt="VenueImage4"
          loading="lazy"
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src={img5}
          alt="VenueImage5"
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src={img6}
          alt="VenueImage6"
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ImageGalleryCard;
// Marina Bay Sands
