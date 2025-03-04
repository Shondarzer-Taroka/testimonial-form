

import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Slider } from "@mui/material";
import { Button, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight, Close } from "@mui/icons-material";
import TestimonialForm from "./TestimonialForm";
import TCard from "./TCard";
import axios from "axios";

// Define the type for the filter object
interface Filter {
  destination: string;
  accommodations: string;
  travelType: string;
  language: string;
  rating: string;
  duration: string;

}

// Define the type for the testimonial object
interface Testimonial {
  _id: string;
  mediaUrls: string[];
  travelerName: string;
  dateOfTravel: string;
  favouriteExperience: string;
  suggestions: string;
  testimonial: string;
  rating: number;
  mediaType:string;
}

// Define the type for the API response
interface ApiResponse {
  testimonials: Testimonial[];
  total: number;
  pages: number;
}

const TestimonialCard = () => {
  const [isShow, setIsShow] = useState(false);
  const [budget, setBudget] = useState(200);
  const [duration, setDuration] = useState(3);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>({
    destination: "",
    accommodations: "",
    travelType: "",
    language: "",
    rating: "",
    duration: "",
  });
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  // const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  // Fetch testimonials data from the backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await axios.get<ApiResponse>("https://testimonialfrontend.vercel.app/api/testimonials", {
          params: {
            page,
            limit: 9,
            search,
            travelType: filter.travelType,
            accommodations: filter.accommodations,
            destination: filter.destination,
            language: filter.language,
            rating: filter.rating,
            duration: filter.duration,
            sort: "dateOfTravel",
          },
        });
        setTestimonials(data.testimonials);
        // setTotal(data.total);
        setPages(data.pages);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, [page, search, filter]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const resetFilters = () => {
    setFilter({
      destination: "",
      accommodations: "",
      travelType: "",
      language: "",
      rating: "",
      duration: "",
    });
    setSearch("");
    setPage(1);
  };

  const handleFilterChange = (key: keyof Filter, value: string) => {
    setFilter((prev) => ({
      ...prev,
      [key]: value,
    }));
    setPage(1); // Reset to page 1 on filter change
  };

  const handleSort = () => {
    alert(`Sorting by Budget: $${budget}, Duration: ${duration}N`);
  };

  return (
    <section className="relative bg-blue-100">
      {/* Top Section */}
      <div className=" p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Testimonials</h2>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by keywords..."
              value={search}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white"
            />
            <RxHamburgerMenu className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          </div>
          <button className="bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
            Search
          </button>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {["Destination", "Accommodation", "Travel Vibe", "Travel Date", "Ratings"].map((filterLabel, index) => {
            // Map filter labels to valid keys in the Filter type
            const filterKey = {
              Destination: "destination",
              Accommodation: "accommodations",
              "Travel Vibe": "travelType",
              "Travel Date": "duration",
              Ratings: "rating",
            }[filterLabel] as keyof Filter;

            return (
              <div key={index} className="relative">
                <button
                  className="bg-white text-blue-700 px-4 py-2 border border-blue-500 rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-blue-50"
                  onClick={() => handleFilterChange(filterKey, filter[filterKey] || "")}
                >
                  {filterLabel} <span className="ml-1">▼</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-[#d4f3f8] p-4 flex gap-4 items-center">
        <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
          <div className="flex justify-between items-center">
            <span className="font-semibold">› Budget</span>
          </div>
          <Slider
            value={budget}
            onChange={(_, value) => setBudget(value as number)}
            min={200}
            max={30000}
            sx={{ color: '#003DA5' }}
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>${budget}</span>
            <span>$30000</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
          <div className="flex justify-between items-center">
            <span className="font-semibold">› Duration</span>
          </div>
          <Slider
            value={duration}
            onChange={(_, value) => setDuration(value as number)}
            min={3}
            max={14}
            sx={{ color: '#003DA5' }}
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>{duration}N</span>
            <span>14N</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="bg-white p-2 rounded-lg shadow-md text-gray-700 text-sm" onClick={handleSort}>
            Sort by 📋
          </button>
          <button className="bg-white p-2 rounded-lg shadow-md text-gray-700 text-sm" onClick={resetFilters}>
            Reset ↻
          </button>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TCard key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>

      {/* Pagination and Post Testimonial Button */}
      <div className="flex items-center justify-between p-4 bg-blue-100 rounded-md">
        <Button variant="contained" color="primary" onClick={() => setIsShow(true)}>
          Post Testimonial
        </Button>
        <div className="flex items-center space-x-2">
          <IconButton
            color="default"
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            <ChevronLeft />
          </IconButton>
          {[...Array(pages)].map((_, index) => (
            <Button
              key={index}
              variant={page === index + 1 ? "contained" : "outlined"}
              color="primary"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          <IconButton
            color="default"
            disabled={page === pages}
            onClick={() => handlePageChange(page + 1)}
          >
            <ChevronRight />
          </IconButton>
        </div>
      </div>

      {/* Modal for TestimonialForm */}
      {isShow && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90%] max-h-[90vh] overflow-y-auto">
            <IconButton className="absolute top-2 right-2" onClick={() => setIsShow(false)}>
              <Close />
            </IconButton>
            <TestimonialForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialCard;