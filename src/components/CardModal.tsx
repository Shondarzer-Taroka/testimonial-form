

import { Button, Rating, TextField } from "@mui/material";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Define the type for the testimonial prop
interface Testimonial {
  mediaUrls: string[];
  travelerName: string;
  dateOfTravel: string;
  favouriteExperience: string;
  suggestions: string;
}

// Define the props for the TravelCard component
interface TravelCardProps {
  testimonial: Testimonial;
}

const TravelCard = ({ testimonial }: TravelCardProps) => {
  return (
    <div className="p-6 bg-blue-100 rounded-lg max-w-lg mx-auto">
      <div className="flex items-center space-x-4">
        <img
          src={testimonial.mediaUrls[0]}
          alt="Traveler"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <p className="font-semibold">Traveler’s Name : {testimonial.travelerName}</p>
          <p className="font-semibold">Date of Travel : {testimonial.dateOfTravel}</p>
          <p className="font-semibold">Favourite Experience(s) : {testimonial.favouriteExperience}</p>
        </div>
      </div>
      <Button variant="contained" color="primary" className="mt-2">
        Dubai
      </Button>
      <div className="mt-2">
        <Rating name="read-only" value={4} readOnly />
      </div>
      <Carousel className="w-full max-w-md mt-4">
        <CarouselContent>
          {testimonial?.mediaUrls?.map((value, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="p-1">
                <img
                  src={value}
                  alt="Dubai View"
                  className="w-32 h-32 rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="mt-4 font-semibold">Suggestions for future traveler(s) :</p>
      <TextField
        fullWidth
        multiline
        rows={3}
        variant="outlined"
        className="mt-2"
        value={testimonial.suggestions}
      />
    </div>
  );
};

export default TravelCard;