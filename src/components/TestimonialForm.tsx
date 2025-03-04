

import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TestimonialForm = () => {


  const [duration, setDuration] = useState<number>(0);
  const [packageId, setPackageId] = useState<string>('');
  const [bookingId, setBookingId] = useState<string>('');
  const [travelerName, setTravelerName] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [citiesTravelled, setCitiesTravelled] = useState<string>('');
  const [travelType, setTravelType] = useState<string>('Couple');
  const [travelTag, setTravelTag] = useState<string>('');
  const [accommodations, setAccommodations] = useState<string>('Hotel');
  const [transportUsed, setTransportUsed] = useState<string>('Flight');
  const [activities, setActivities] = useState<string>('Sightseeing');
  const [demographics, setDemographics] = useState<string>('Youth');
  const [language, setLanguage] = useState<string>('English');
  const [socialMediaHandle, setSocialMediaHandle] = useState<string>('');
  const [testimonial, setTestimonial] = useState<string>('');
  const [mediaType, setMediaType] = useState<string>('Photos');
  // const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [dateOfTravel, setDateOfTravel] = useState<string>('');
  const [favouriteExperience, setFavouriteExperience] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string>('');
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);



  const increaseDuration = () => setDuration(duration + 1);
  const decreaseDuration = () => setDuration(duration > 0 ? duration - 1 : 0);

  // const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setMediaFile(e.target.files[0]);
  //   }
  // };


  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files); // Convert FileList to array
      setMediaFiles(files);
    }
  };






  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('packageId', packageId);
    formData.append('bookingId', bookingId);
    formData.append('travelerName', travelerName);
    formData.append('country', country);
    formData.append('citiesTravelled', citiesTravelled);
    formData.append('duration', duration.toString());
    formData.append('travelType', travelType);
    formData.append('travelTag', travelTag);
    formData.append('accommodations', accommodations);
    formData.append('transportUsed', transportUsed);
    formData.append('activities', activities);
    formData.append('demographics', demographics);
    formData.append('language', language);
    formData.append('socialMediaHandle', socialMediaHandle);
    formData.append('testimonial', testimonial);
    formData.append('mediaType', mediaType);
    mediaFiles.forEach((file) => formData.append('mediaFiles', file)); // Append multiple files
    formData.append('rating', rating.toString());
    formData.append('dateOfTravel', dateOfTravel);
    formData.append('favouriteExperience', favouriteExperience);
    formData.append('suggestions', suggestions);

    try {
      const response = await axios.post('https://testimonialfrontend.vercel.app/api/testimonials', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Testimonial created:', response.data);
  toast.success('successfully created')

    } catch (error) {
      console.error('Error submitting testimonial:', error);
    }
  };



  return (
    <div className="bg-blue-100 p-6 w-full max-w-4xl mx-auto rounded-lg">
       <ToastContainer />
      <h2 className="text-lg font-bold mb-4">Testimonial Create/Update Form</h2>

      {/* Trip details */}
      <div className="mb-6 p-4 bg-blue-200 rounded-lg">
        <h3 className="font-semibold mb-3">Trip details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Package ID/Trip ID :</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={packageId}
              onChange={(e) => setPackageId(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1">Booking ID :</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Traveler's details */}
      <div className="p-4 bg-blue-200 rounded-lg mb-6">
        <h3 className="font-semibold mb-3">Traveler's details</h3>
        <label className="block mb-1">Traveler’s name :</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-3"
          value={travelerName}
          onChange={(e) => setTravelerName(e.target.value)}
        />

        <label className="block mb-1">Country :</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-3"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <label className="block mb-1">Cities travelled :</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-3"
          value={citiesTravelled}
          onChange={(e) => setCitiesTravelled(e.target.value)}
        />

        <label className="block mb-1">Duration :</label>
        <div className="flex items-center mb-3">
          <button onClick={decreaseDuration} className="p-2 border rounded bg-white">-</button>
          <span className="mx-4">{duration}</span>
          <button onClick={increaseDuration} className="p-2 border rounded bg-white">+</button>
        </div>

        <label className="block mb-1">Travel type :</label>
        <select
          className="w-full p-2 border rounded mb-3"
          value={travelType}
          onChange={(e) => setTravelType(e.target.value)}
        >
          <option>Couple</option>
          <option>Family</option>
          <option>Friends</option>
          <option>Solo</option>
        </select>

        <div className="mb-3">
          <label className="block mb-1">Travel tags :</label>
          <div className="flex flex-wrap gap-4">
            {Array(10).fill('Art & Design').map((tag, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  name="travelTag"
                  className="mr-2"
                  value={tag}
                  onChange={(e) => setTravelTag(e.target.value)}
                /> {tag}
              </label>
            ))}
            <label className="flex items-center">
              <input
                type="radio"
                name="travelTag"
                className="mr-2"
                value="Adventure"
                onChange={(e) => setTravelTag(e.target.value)}
              /> Adventure
            </label>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="p-4 bg-blue-200 rounded-lg">
        <label className="block mb-1">Accommodations :</label>
        <select
          className="w-full p-2 border rounded mb-3"
          value={accommodations}
          onChange={(e) => setAccommodations(e.target.value)}
        >
          <option>Hotel</option>
          <option>Resort</option>
          <option>Hostel</option>
          <option>Homestay</option>
        </select>

        <label className="block mb-1">Transport used :</label>
        <select
          className="w-full p-2 border rounded mb-3"
          value={transportUsed}
          onChange={(e) => setTransportUsed(e.target.value)}
        >
          <option>Flight</option>
          <option>Train</option>
          <option>Bus</option>
          <option>Private Car</option>
        </select>

        <label className="block mb-1">Activities & Attractions Visited :</label>
        <select
          className="w-full p-2 border rounded mb-3"
          value={activities}
          onChange={(e) => setActivities(e.target.value)}
        >
          <option>Sightseeing</option>
          <option>Adventure Sports</option>
          <option>Historical Places</option>
          <option>Shopping</option>
        </select>

        <label className="block mb-1">Customer Demographics :</label>
        <select
          className="w-full p-2 border rounded mb-3"
          value={demographics}
          onChange={(e) => setDemographics(e.target.value)}
        >
          <option>Youth</option>
          <option>Family</option>
          <option>Senior Citizens</option>
          <option>Solo Travelers</option>
        </select>

        <label className="block mb-1">Language :</label>
        <select
          className="w-full p-2 border rounded mb-3"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
          <option>French</option>
        </select>

        <label className="block mb-1">Social media handle :</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter Social Media Handle"
          value={socialMediaHandle}
          onChange={(e) => setSocialMediaHandle(e.target.value)}
        />
      </div>

      {/* Testimonial details */}
      <div className="p-4 bg-blue-200 rounded-lg mb-6">
        <h3 className="font-semibold mb-3">Testimonial details</h3>
        <label className="block mb-1">Your testimonial :</label>
        <textarea
          className="w-full p-2 border rounded mb-3"
          value={testimonial}
          onChange={(e) => setTestimonial(e.target.value)}
        ></textarea>

        <label className="block mb-1">Media Type :</label>
        <select
          className="w-full p-2 border rounded mb-3"
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
        >
          <option>Photos</option>
          <option>Videos</option>
          <option>Others</option>
        </select>

        <label className="block mb-1">Upload media :</label>
        {/* <input
          type="file"
          className="w-full p-2 border rounded mb-3"
          accept={mediaType === 'Photos' ? 'image/*' : mediaType === 'Videos' ? 'video/*' : '*'}
          onChange={handleMediaChange}
        /> */}

        <input
          type="file"
          className="w-full p-2 border rounded mb-3"
          accept={mediaType === 'Photos' ? 'image/*' : mediaType === 'Videos' ? 'video/*' : '*'}
          onChange={handleMediaChange}
          multiple // Allow multiple files
        />

        <label className="block mb-1">Rating for trip :</label>
        <div className="flex gap-2 mb-3">
          {Array(5).fill(null).map((_, index) => (
            <span
              key={index}
              className={`text-yellow-500 text-2xl cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
              onClick={() => setRating(index + 1)}
            >
              ★
            </span>
          ))}
        </div>

        <label className="block mb-1">Date of travel :</label>
        <input
          type="text"
          placeholder="MM/YY"
          className="w-full p-2 border rounded mb-3"
          value={dateOfTravel}
          onChange={(e) => setDateOfTravel(e.target.value)}
        />

        <label className="block mb-1">Favourite Experience :</label>
        <select
          className="w-full p-2 border rounded mb-3"
          value={favouriteExperience}
          onChange={(e) => setFavouriteExperience(e.target.value)}
        >
          <option>-select multiple options-</option>
          <option value={'1 year'}>1 year</option>
          <option value={'2 year'}>2 year</option>
          <option value={'3 year'}>3 year</option>
          <option value={'4 year'}>4 year</option>
        </select>

        <label className="block mb-1">Suggestions for future travellers :</label>
        <textarea
          className="w-full p-2 border rounded"
          value={suggestions}
          onChange={(e) => setSuggestions(e.target.value)}
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-lg"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default TestimonialForm;









