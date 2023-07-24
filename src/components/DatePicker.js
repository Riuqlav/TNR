import React, { useState, useRef } from "react";

function DatePicker() {
  // Define state variables for start date, end date, and number of days
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [numDays, setNumDays] = useState(0);

  // Define refs for the two inputs

  const startInputRef = useRef(null);
  const endInputRef = useRef(null);

  // Define a function to handle changes to the check-in and check-out inputs.
  function handleDateChange(event, setter) {
    const { value } = event.target;
    // Use optional chaining to set the value if it matches the expected pattern or clear it if it's an empty string
    setter(value?.match(/^\d{0,4}-\d{0,2}-\d{0,2}$/) ? value : "");
  }

  // Define a function to handle the form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setNumDays(diffDays);
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-wrap justify-center mt-10"
    >
      {/* Check-In Input */}
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-center">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="start"
        >
          Start Date:
        </label>
        <input
          type="date"
          id="start"
          name="start"
          value={start}
          ref={startInputRef}
          onChange={(event) => handleDateChange(event, setStart)}
          placeholder="jj/mm/aaaa"
          lang="fr"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
      {/* Check-Out Input */}
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-center">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="end"
        >
          End Date:
        </label>
        {/* The hardest part of the tool, why was the output correct but wouldn't
        stop changing the date when out of focus. */}
        <input
          type="date"
          id="end"
          name="end"
          value={end}
          ref={endInputRef}
          onChange={(event) => handleDateChange(event, setEnd)}
          placeholder="jj/mm/aaaa"
          lang="fr"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
      {/* Submit Button */}
      <button
        className="m-4 px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Calculate
      </button>
      {/* Result Hearder */}
      {numDays && (
        <h1 className="w-full text-center m-4 text-gray-700 font-bold">
          You selected {numDays} {numDays === 1 ? "Day" : "Days"} from{" "}
          {new Date(start).toLocaleDateString("en-GB")} to{" "}
          {new Date(end).toLocaleDateString("en-GB")}
        </h1>
      )}

    </form>
  );
}

export default DatePicker;
