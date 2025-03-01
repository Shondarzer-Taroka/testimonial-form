// import { useState } from 'react';

// const TestimonialForm = () => {
//   const [duration, setDuration] = useState(0);

//   const increaseDuration = () => setDuration(duration + 1);
//   const decreaseDuration = () => setDuration(duration > 0 ? duration - 1 : 0);

//   return (
//     <div className="bg-blue-100 p-6 w-full max-w-4xl mx-auto rounded-lg">
//       <h2 className="text-lg font-bold mb-4">Testimonial Create/Update Form</h2>

//       {/* Trip details */}
//       <div className="mb-6 p-4 bg-blue-200 rounded-lg">
//         <h3 className="font-semibold mb-3">Trip details</h3>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-1">Package ID/Trip ID :</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-1">Booking ID :</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//         </div>
//       </div>

//       {/* Traveler's details */}
//       <div className="p-4 bg-blue-200 rounded-lg mb-6">
//         <h3 className="font-semibold mb-3">Traveler's details</h3>
//         <label className="block mb-1">Traveler’s name :</label>
//         <input type="text" className="w-full p-2 border rounded mb-3" />

//         <label className="block mb-1">Country :</label>
//         <input type="text" className="w-full p-2 border rounded mb-3" />

//         <label className="block mb-1">Cities travelled :</label>
//         <input type="text" className="w-full p-2 border rounded mb-3" />

//         <label className="block mb-1">Duration :</label>
//         <div className="flex items-center mb-3">
//           <button onClick={decreaseDuration} className="p-2 border rounded bg-white">-</button>
//           <span className="mx-4">{duration}</span>
//           <button onClick={increaseDuration} className="p-2 border rounded bg-white">+</button>
//         </div>

//         <label className="block mb-1">Travel type :</label>
//         <select className="w-full p-2 border rounded mb-3">
//           <option>Couple</option>
//           <option>Family</option>
//           <option>Friends</option>
//           <option>Solo</option>
//         </select>

//         <div className="mb-3">
//           <label className="block mb-1">Travel tags :</label>
//           <div className="flex flex-wrap gap-4">
//             {Array(10).fill('Art & Design').map((tag, index) => (
//               <label key={index} className="flex items-center">
//                 <input type="radio" name="travelTag" className="mr-2" /> {tag}
//               </label>
//             ))}
//             <label className="flex items-center">
//               <input type="radio" name="travelTag" className="mr-2" /> Adventure
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Additional Information */}
//       <div className="p-4 bg-blue-200 rounded-lg">
//         <label className="block mb-1">Accommodations :</label>
//         <select className="w-full p-2 border rounded mb-3">
//           <option>Hotel</option>
//           <option>Resort</option>
//           <option>Hostel</option>
//           <option>Homestay</option>
//         </select>

//         <label className="block mb-1">Transport used :</label>
//         <select className="w-full p-2 border rounded mb-3">
//           <option>Flight</option>
//           <option>Train</option>
//           <option>Bus</option>
//           <option>Private Car</option>
//         </select>

//         <label className="block mb-1">Activities & Attractions Visited :</label>
//         <select className="w-full p-2 border rounded mb-3">
//           <option>Sightseeing</option>
//           <option>Adventure Sports</option>
//           <option>Historical Places</option>
//           <option>Shopping</option>
//         </select>

//         <label className="block mb-1">Customer Demographics :</label>
//         <select className="w-full p-2 border rounded mb-3">
//           <option>Youth</option>
//           <option>Family</option>
//           <option>Senior Citizens</option>
//           <option>Solo Travelers</option>
//         </select>

//         <label className="block mb-1">Language :</label>
//         <select className="w-full p-2 border rounded mb-3">
//           <option>English</option>
//           <option>Hindi</option>
//           <option>Spanish</option>
//           <option>French</option>
//         </select>

//         <label className="block mb-1">Social media handle :</label>
//         <input type="text" className="w-full p-2 border rounded" placeholder="Enter Social Media Handle" />
//       </div>






//       <div className="p-4 bg-blue-200 rounded-lg mb-6">
//         <h3 className="font-semibold mb-3">Testimonial details</h3>
//         <label className="block mb-1">Your testimonial :</label>
//         <textarea className="w-full p-2 border rounded mb-3"></textarea>

//         <label className="block mb-1">Media Type :</label>
//         <select className="w-full p-2 border rounded mb-3">
//           <option>Photos</option>
//           <option>Videos</option>
//           <option>Others</option>
//         </select>

//         <label className="block mb-1">Upload media :</label>
//         <input type="file" className="w-full p-2 border rounded mb-3" />

//         <label className="block mb-1">Rating for trip :</label>
//         <div className="flex gap-2 mb-3">
//           {Array(5).fill().map((_, index) => (
//             <span key={index} className="text-yellow-500 text-2xl">★</span>
//           ))}
//         </div>

//         <label className="block mb-1">Date of travel :</label>
//         <input type="text" placeholder="MM/YY" className="w-full p-2 border rounded mb-3" />

//         <label className="block mb-1">Favourite Experience :</label>
//         <select className="w-full p-2 border rounded mb-3">
//           <option>-select multiple options-</option>
//         </select>

//         <label className="block mb-1">Suggestions for future travellers :</label>
//         <textarea className="w-full p-2 border rounded"></textarea>
//       </div>


//     </div>
//   );
// };

// export default TestimonialForm;






















// import { useState } from 'react';

// const TestimonialForm = () => {
//   const [duration, setDuration] = useState(0);
//   const [packageId, setPackageId] = useState('');
//   const [bookingId, setBookingId] = useState('');
//   const [travelerName, setTravelerName] = useState('');
//   const [country, setCountry] = useState('');
//   const [citiesTravelled, setCitiesTravelled] = useState('');
//   const [travelType, setTravelType] = useState('Couple');
//   const [travelTag, setTravelTag] = useState('');
//   const [accommodations, setAccommodations] = useState('Hotel');
//   const [transportUsed, setTransportUsed] = useState('Flight');
//   const [activities, setActivities] = useState('Sightseeing');
//   const [demographics, setDemographics] = useState('Youth');
//   const [language, setLanguage] = useState('English');
//   const [socialMediaHandle, setSocialMediaHandle] = useState('');
//   const [testimonial, setTestimonial] = useState('');
//   const [mediaType, setMediaType] = useState('Photos');
//   const [rating, setRating] = useState(0);
//   const [dateOfTravel, setDateOfTravel] = useState('');
//   const [favouriteExperience, setFavouriteExperience] = useState('');
//   const [suggestions, setSuggestions] = useState('');

//   const increaseDuration = () => setDuration(duration + 1);
//   const decreaseDuration = () => setDuration(duration > 0 ? duration - 1 : 0);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       packageId,
//       bookingId,
//       travelerName,
//       country,
//       citiesTravelled,
//       duration,
//       travelType,
//       travelTag,
//       accommodations,
//       transportUsed,
//       activities,
//       demographics,
//       language,
//       socialMediaHandle,
//       testimonial,
//       mediaType,
//       rating,
//       dateOfTravel,
//       favouriteExperience,
//       suggestions,
//     };
//     console.log(formData);
//   };

//   return (
//     <div className="bg-blue-100 p-6 w-full max-w-4xl mx-auto rounded-lg">
//       <h2 className="text-lg font-bold mb-4">Testimonial Create/Update Form</h2>

//       {/* Trip details */}
//       <div className="mb-6 p-4 bg-blue-200 rounded-lg">
//         <h3 className="font-semibold mb-3">Trip details</h3>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-1">Package ID/Trip ID :</label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded"
//               value={packageId}
//               onChange={(e) => setPackageId(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="block mb-1">Booking ID :</label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded"
//               value={bookingId}
//               onChange={(e) => setBookingId(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Traveler's details */}
//       <div className="p-4 bg-blue-200 rounded-lg mb-6">
//         <h3 className="font-semibold mb-3">Traveler's details</h3>
//         <label className="block mb-1">Traveler’s name :</label>
//         <input
//           type="text"
//           className="w-full p-2 border rounded mb-3"
//           value={travelerName}
//           onChange={(e) => setTravelerName(e.target.value)}
//         />

//         <label className="block mb-1">Country :</label>
//         <input
//           type="text"
//           className="w-full p-2 border rounded mb-3"
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//         />

//         <label className="block mb-1">Cities travelled :</label>
//         <input
//           type="text"
//           className="w-full p-2 border rounded mb-3"
//           value={citiesTravelled}
//           onChange={(e) => setCitiesTravelled(e.target.value)}
//         />

//         <label className="block mb-1">Duration :</label>
//         <div className="flex items-center mb-3">
//           <button onClick={decreaseDuration} className="p-2 border rounded bg-white">-</button>
//           <span className="mx-4">{duration}</span>
//           <button onClick={increaseDuration} className="p-2 border rounded bg-white">+</button>
//         </div>

//         <label className="block mb-1">Travel type :</label>
//         <select
//           className="w-full p-2 border rounded mb-3"
//           value={travelType}
//           onChange={(e) => setTravelType(e.target.value)}
//         >
//           <option>Couple</option>
//           <option>Family</option>
//           <option>Friends</option>
//           <option>Solo</option>
//         </select>

//         <div className="mb-3">
//           <label className="block mb-1">Travel tags :</label>
//           <div className="flex flex-wrap gap-4">
//             {Array(10).fill('Art & Design').map((tag, index) => (
//               <label key={index} className="flex items-center">
//                 <input
//                   type="radio"
//                   name="travelTag"
//                   className="mr-2"
//                   value={tag}
//                   onChange={(e) => setTravelTag(e.target.value)}
//                 /> {tag}
//               </label>
//             ))}
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="travelTag"
//                 className="mr-2"
//                 value="Adventure"
//                 onChange={(e) => setTravelTag(e.target.value)}
//               /> Adventure
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Additional Information */}
//       <div className="p-4 bg-blue-200 rounded-lg">
//         <label className="block mb-1">Accommodations :</label>
//         <select
//           className="w-full p-2 border rounded mb-3"
//           value={accommodations}
//           onChange={(e) => setAccommodations(e.target.value)}
//         >
//           <option>Hotel</option>
//           <option>Resort</option>
//           <option>Hostel</option>
//           <option>Homestay</option>
//         </select>

//         <label className="block mb-1">Transport used :</label>
//         <select
//           className="w-full p-2 border rounded mb-3"
//           value={transportUsed}
//           onChange={(e) => setTransportUsed(e.target.value)}
//         >
//           <option>Flight</option>
//           <option>Train</option>
//           <option>Bus</option>
//           <option>Private Car</option>
//         </select>

//         <label className="block mb-1">Activities & Attractions Visited :</label>
//         <select
//           className="w-full p-2 border rounded mb-3"
//           value={activities}
//           onChange={(e) => setActivities(e.target.value)}
//         >
//           <option>Sightseeing</option>
//           <option>Adventure Sports</option>
//           <option>Historical Places</option>
//           <option>Shopping</option>
//         </select>

//         <label className="block mb-1">Customer Demographics :</label>
//         <select
//           className="w-full p-2 border rounded mb-3"
//           value={demographics}
//           onChange={(e) => setDemographics(e.target.value)}
//         >
//           <option>Youth</option>
//           <option>Family</option>
//           <option>Senior Citizens</option>
//           <option>Solo Travelers</option>
//         </select>

//         <label className="block mb-1">Language :</label>
//         <select
//           className="w-full p-2 border rounded mb-3"
//           value={language}
//           onChange={(e) => setLanguage(e.target.value)}
//         >
//           <option>English</option>
//           <option>Hindi</option>
//           <option>Spanish</option>
//           <option>French</option>
//         </select>

//         <label className="block mb-1">Social media handle :</label>
//         <input
//           type="text"
//           className="w-full p-2 border rounded"
//           placeholder="Enter Social Media Handle"
//           value={socialMediaHandle}
//           onChange={(e) => setSocialMediaHandle(e.target.value)}
//         />
//       </div>

//       {/* Testimonial details */}
//       <div className="p-4 bg-blue-200 rounded-lg mb-6">
//         <h3 className="font-semibold mb-3">Testimonial details</h3>
//         <label className="block mb-1">Your testimonial :</label>
//         <textarea
//           className="w-full p-2 border rounded mb-3"
//           value={testimonial}
//           onChange={(e) => setTestimonial(e.target.value)}
//         ></textarea>

//         <label className="block mb-1">Media Type :</label>
//         <select
//           className="w-full p-2 border rounded mb-3"
//           value={mediaType}
//           onChange={(e) => setMediaType(e.target.value)}
//         >
//           <option>Photos</option>
//           <option>Videos</option>
//           <option>Others</option>
//         </select>

//         <label className="block mb-1">Upload media :</label>
//         <input type="file" className="w-full p-2 border rounded mb-3" />

//         <label className="block mb-1">Rating for trip :</label>
//         <div className="flex gap-2 mb-3">
//           {Array(5).fill().map((_, index) => (
//             <span
//               key={index}
//               className={`text-yellow-500 text-2xl cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
//               onClick={() => setRating(index + 1)}
//             >
//               ★
//             </span>
//           ))}
//         </div>

//         <label className="block mb-1">Date of travel :</label>
//         <input
//           type="text"
//           placeholder="MM/YY"
//           className="w-full p-2 border rounded mb-3"
//           value={dateOfTravel}
//           onChange={(e) => setDateOfTravel(e.target.value)}
//         />

//         <label className="block mb-1">Favourite Experience :</label>
//         <select
//           className="w-full p-2 border rounded mb-3"
//           value={favouriteExperience}
//           onChange={(e) => setFavouriteExperience(e.target.value)}
//         >
//           <option>-select multiple options-</option>
//           <option value={'1 year'}>1 year</option>
//           <option value={'2 year'}>2 year</option>
//           <option value={'3 year'}>3 year</option>
//           <option value={'4 year'}>1 year</option>
//         </select>

//         <label className="block mb-1">Suggestions for future travellers :</label>
//         <textarea
//           className="w-full p-2 border rounded"
//           value={suggestions}
//           onChange={(e) => setSuggestions(e.target.value)}
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         className="bg-blue-500 text-white p-2 rounded-lg"
//         onClick={handleSubmit}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default TestimonialForm;

















import { useState } from 'react';

const TestimonialForm = () => {
  const [duration, setDuration] = useState(0);
  const [packageId, setPackageId] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [travelerName, setTravelerName] = useState('');
  const [country, setCountry] = useState('');
  const [citiesTravelled, setCitiesTravelled] = useState('');
  const [travelType, setTravelType] = useState('Couple');
  const [travelTag, setTravelTag] = useState('');
  const [accommodations, setAccommodations] = useState('Hotel');
  const [transportUsed, setTransportUsed] = useState('Flight');
  const [activities, setActivities] = useState('Sightseeing');
  const [demographics, setDemographics] = useState('Youth');
  const [language, setLanguage] = useState('English');
  const [socialMediaHandle, setSocialMediaHandle] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [mediaType, setMediaType] = useState('Photos');
  const [mediaFile, setMediaFile] = useState(null);
  const [rating, setRating] = useState(0);
  const [dateOfTravel, setDateOfTravel] = useState('');
  const [favouriteExperience, setFavouriteExperience] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const increaseDuration = () => setDuration(duration + 1);
  const decreaseDuration = () => setDuration(duration > 0 ? duration - 1 : 0);

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMediaFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      packageId,
      bookingId,
      travelerName,
      country,
      citiesTravelled,
      duration,
      travelType,
      travelTag,
      accommodations,
      transportUsed,
      activities,
      demographics,
      language,
      socialMediaHandle,
      testimonial,
      mediaType,
      mediaFile,
      rating,
      dateOfTravel,
      favouriteExperience,
      suggestions,
    };
    console.log(formData);
  };

  return (
    <div className="bg-blue-100 p-6 w-full max-w-4xl mx-auto rounded-lg">
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
        <input
          type="file"
          className="w-full p-2 border rounded mb-3"
          accept={mediaType === 'Photos' ? 'image/*' : mediaType === 'Videos' ? 'video/*' : '*'}
          onChange={handleMediaChange}
        />

        <label className="block mb-1">Rating for trip :</label>
        <div className="flex gap-2 mb-3">
          {Array(5).fill().map((_, index) => (
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





