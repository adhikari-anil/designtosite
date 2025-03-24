"use client";

import { useState } from "react";
import { DatePickerInput, type DateValue } from "@mantine/dates";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

export default function TravelBooking() {
  const [destination, setDestination] = useState("Dubai");
  const [persons, setPersons] = useState("2");
  const [checkIn, setCheckIn] = useState<DateValue>(new Date("2020-09-17"));
  const [checkOut, setCheckOut] = useState<DateValue>(new Date("2020-10-17"));

  // Format dates to match the design
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return date
      .toLocaleDateString("en-US", options)
      .replace(",", "")
      .replace(/(\d+)/, "$1th");
  };

  return (
    <div className="w-[90%] mx-auto md:w-full md:mx-0">
    <div className="flex flex-col md:flex-row gap-8 w-full md:w-3/4 md:rounded-br-xl md:rounded-tr-xl rounded-xl overflow-hidden bg-white shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex p-6 gap-8 w-full">
        <div className="flex flex-col">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            DESTINATION
          </div>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full text-xl font-medium focus:outline-none bg-transparent text-black pb-1"
          />
          <div className="mt-1 w-full h-0.5 bg-gray-200"></div>
        </div>

        <div className="flex flex-col">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            PERSON
          </div>
          <div className="flex items-center justify-between pb-1">
            <input
              type="text"
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
              className="w-full text-xl font-medium focus:outline-none bg-transparent text-black"
            />
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mt-1 w-full h-0.5 bg-gray-200"></div>
        </div>

        <div className="flex flex-col">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            CHECK IN
          </div>
          <div className="flex items-center justify-between pb-1">
            <input
              type="text"
              value={formatDate(checkIn as Date)}
              readOnly
              className="w-full text-xl font-medium focus:outline-none bg-transparent text-black"
            />
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mt-1 w-full h-0.5 bg-gray-200"></div>
        </div>

        <div className="flex flex-col">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            CHECK OUT
          </div>
          <div className="flex items-center justify-between pb-1">
            <input
              type="text"
              value={formatDate(checkOut as Date)}
              readOnly
              className="w-full text-xl font-medium focus:outline-none bg-transparent text-black"
            />
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mt-1 w-full h-0.5 bg-gray-200"></div>
        </div>
      </div>

      <button className="bg-[#ff7a5c] text-white px-10 flex flex-col justify-center items-center cursor-pointer">
        <div className="flex md:flex-col items-center">
          <span className="text-4xl font-light">Book</span>
          <span className="text-4xl font-light">Now</span>
        </div>
      </button>
    </div>
    </div>
  );
}
