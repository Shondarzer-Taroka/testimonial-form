


import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import TravelCard from "./CardModal";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

// Define the type for the testimonial prop
interface Testimonial {
  mediaUrls: string[];
  travelerName: string;
  dateOfTravel: string;
  favouriteExperience: string;
  suggestions: string;
  testimonial: string;
  rating: number;
}

// Define the props for the TCard component
interface TCardProps {
  testimonial: Testimonial;
}

const TCard = ({ testimonial }: TCardProps) => {
  const [shoModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!shoModal);
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen ">
        <div
          className="bg-white p-6 rounded-2xl shadow-lg w-80 h-[500px] text-center relative"
          onClick={handleModal}
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <img
              className="w-20 h-20 rounded-full border-4 border-white shadow-md"
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="User"
            />
          </div>
          <div className="mt-12">
            <p className="font-bold text-gray-800">
              <span className="text-gray-500">Traveller Name:</span>{" "}
              {testimonial.travelerName}
            </p>
            <div className="mt-4">
              <img
                className="rounded-xl w-full h-40 object-cover"
                src={testimonial.mediaUrls[0]}
                alt="Destination"
              />
            </div>
            <div className="mt-3">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                BALI
              </span>
            </div>
            <div className="flex justify-center mt-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <AiFillStar key={i} className="w-5 h-5 text-yellow-500" />
              ))}
              <AiOutlineStar className="w-5 h-5 text-gray-300" />
            </div>
            <p className="text-gray-600 mt-3 text-sm">{testimonial.testimonial}</p>
          </div>
        </div>
      </div>

      {/* Modal for TestimonialForm */}
      {shoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="">
            <IconButton
              className="absolute top-2 right-2"
              onClick={handleModal}
            >
              <Close className="bg-white opacity-60 rounded-full" />
            </IconButton>
            <TravelCard testimonial={testimonial} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TCard;