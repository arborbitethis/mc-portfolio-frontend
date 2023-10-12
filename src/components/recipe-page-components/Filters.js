import React from 'react';

const Filters = ({ setSearchTerm, setPrepTime, setCategory, prepTime }) => {
  return (
    <div className="flex flex-col items-stretch p-5 bg-gray-200 shadow-md w-full mx-auto">
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col items-center">
          <label htmlFor="search" className="font-bold mb-2 text-lg text-gray-700 text-center">
            Search
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search Recipe"
            className="p-2 w-60"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="prepTime" className="font-bold mb-2 text-lg text-gray-700 text-center">
            Prep Time (<span id="sliderValue">{prepTime}</span> mins)
          </label>
          <input
            type="range"
            min="0"
            max="120"
            step="5"
            defaultValue="80"
            id="prepTime"
            className="w-60"
            onChange={(e) => {
              setPrepTime(e.target.value);
              document.getElementById('sliderValue').innerText = e.target.value;
            }}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="category" className="font-bold mb-2 text-lg text-gray-700 text-center">
            Category
          </label>
          <select
            id="category"
            className="w-60 p-2"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Italian">Italian</option>
            <option value="American">American</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
