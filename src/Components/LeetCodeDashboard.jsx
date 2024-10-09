import React, { useEffect, useState } from "react";
import axios from "axios";
import { SiLeetcode } from "react-icons/si"; // Import the SiLeetcode icon
import { motion } from "framer-motion"; // Import Framer Motion

const LeetCodeDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hovered, setHovered] = useState(false); // State for tracking hover

  // Fetch LeetCode data using RapidAPI
  const fetchLeetCodeData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://leetcode-stats-api.herokuapp.com/LC-guddu1cse",
        headers: {
          "X-RapidAPI-Host": "your-api-host-from-rapidapi", // Replace with RapidAPI host
          "X-RapidAPI-Key": "your-rapidapi-key", // Replace with your RapidAPI key
        },
      });

      console.log(response.data); // Log data for debugging
      setUserData(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeetCodeData();
  }, []);

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  // Destructure required data from userData
  const {
    totalSolved,
    totalQuestions,
    easySolved,
    totalEasy,
    mediumSolved,
    totalMedium,
    hardSolved,
    totalHard,
    acceptanceRate,
    ranking,
  } = userData;

  // Profile link
  const profileLink = "https://leetcode.com/LC-guddu1cse/";

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="rounded-lg w-full max-w-3xl relative" // Added relative positioning for absolute child
        initial={{ opacity: 0, scale: 0.95 }} // Initial animation state
        animate={{ opacity: 1, scale: 1 }} // Final animation state
        transition={{ duration: 0.5 }} // Transition duration
        onMouseEnter={() => setHovered(true)} // Track mouse enter
        onMouseLeave={() => setHovered(false)} // Track mouse leave
      >
        <h1 className="text-white text-3xl font-bold mb-4 text-center flex items-center justify-center">
          <a href={profileLink} target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="text-blue-600 text-4xl mr-2" />{" "}
          </a>
          LeetCode
        </h1>

        {/* Problem Solving Statistics */}
        <h2 className="text-white text-2xl font-semibold mb-4 text-center">
          Problem Solving Statistics
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div
            className="bg-gray-700 p-4 rounded-lg shadow-md"
            initial={{ y: -20 }} // Slide from top
            animate={{ y: 0 }} // Final position
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
            }} // Hover animation
            whileTap={{ scale: 0.95 }} // Click animation
          >
            <p className="text-white">
              Total Solved:{" "}
              <span className="font-bold">{`${totalSolved} / ${totalQuestions}`}</span>
            </p>
            <p className="text-white">
              Acceptance Rate:{" "}
              <span className="font-bold">{acceptanceRate.toFixed(2)}%</span>
            </p>
            <p className="text-white">
              Ranking: <span className="font-bold">{ranking}</span>
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-700 p-4 rounded-lg shadow-md"
            initial={{ y: -20 }} // Slide from top
            animate={{ y: 0 }} // Final position
            transition={{ duration: 0.3, delay: 0.1 }} // Slight delay for the second box
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
            }} // Hover animation
            whileTap={{ scale: 0.95 }} // Click animation
          >
            <p className="text-green-400">
              {" "}
              {/* Easy color */}
              Easy:{" "}
              <span className="font-bold">
                {easySolved} / {totalEasy}
              </span>
            </p>
            <p className="text-orange-400">
              {" "}
              {/* Medium color */}
              Medium:{" "}
              <span className="font-bold">
                {mediumSolved} / {totalMedium}
              </span>
            </p>
            <p className="text-red-400">
              {" "}
              {/* Hard color */}
              Hard:{" "}
              <span className="font-bold">
                {hardSolved} / {totalHard}
              </span>
            </p>
          </motion.div>
        </div>

        {/* Hover link for profile */}
        {hovered && (
          <motion.a
            href={profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-70 text-white text-xl font-semibold rounded-lg"
            initial={{ opacity: 0 }} // Initial hidden state
            animate={{ opacity: 1 }} // Animate to visible
            exit={{ opacity: 0 }} // Exit hidden
            transition={{ duration: 0.3 }} // Smooth transition
          >
            Visit LeetCode Profile
          </motion.a>
        )}
      </motion.div>
    </div>
  );
};

export default LeetCodeDashboard;
