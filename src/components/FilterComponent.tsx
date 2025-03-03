import { Slider } from '@mui/material';
import { useState } from 'react';

const FilterSliders = () => {
  const [budget, setBudget] = useState(200);
  const [duration, setDuration] = useState(3);

  const resetBudget = () => setBudget(200);
  const resetDuration = () => setDuration(3);
  const resetAll = () => {
    resetBudget();
    resetDuration();
  };

  const handleSort = () => {
    alert(`Sorting by Budget: $${budget}, Duration: ${duration}N`);
  };

  const handleBudgetChange = (_: Event, value: number | number[]) => {
    if (typeof value === 'number') {
      setBudget(value);
    }
  };

  const handleDurationChange = (_: Event, value: number | number[]) => {
    if (typeof value === 'number') {
      setDuration(value);
    }
  };

  return (
    
    <div className="bg-[#d4f3f8] p-4 flex gap-4 items-center">
      {/* Budget Filter */}
      <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
        <div className="flex justify-between items-center">
          <span className="font-semibold">› Budget</span>
          <button className="text-xs text-gray-600 underline" onClick={resetBudget}>Reset ↻</button>
        </div>
        <Slider
          value={budget}
          onChange={handleBudgetChange}
          min={200}
          max={30000}
          sx={{ color: '#003DA5' }}
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>${budget}</span>
          <span>$30000</span>
        </div>
      </div>

      {/* Duration Filter */}
      <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
        <div className="flex justify-between items-center">
          <span className="font-semibold">› Duration</span>
          <button className="text-xs text-gray-600 underline" onClick={resetDuration}>Reset ↻</button>
        </div>
        <Slider
          value={duration}
          onChange={handleDurationChange}
          min={3}
          max={14}
          sx={{ color: '#003DA5' }}
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>{duration}N</span>
          <span>14N</span>
        </div>
      </div>

      {/* Sort & Reset Buttons */}
      <div className="flex flex-col gap-2">
        <button className="bg-white p-2 rounded-lg shadow-md text-gray-700 text-sm" onClick={handleSort}>Sort by 📋</button>
        <button className="bg-white p-2 rounded-lg shadow-md text-gray-700 text-sm" onClick={resetAll}>Reset ↻</button>
      </div>
    </div>
  );
};

export default FilterSliders;
