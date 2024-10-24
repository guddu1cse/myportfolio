import React, { useEffect, useState } from "react";
import axios from "axios";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { leetcodeApi } from "../config/config";

const LeetCodeDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch LeetCode data using RapidAPI
  const fetchLeetCodeData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: leetcodeApi,
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

  if (loading) return <LoadingMessage />;
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
        className="rounded-lg w-full max-w-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-white text-3xl font-bold mb-4 text-center flex items-center justify-center">
          <a href={profileLink} target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="text-blue-600 text-4xl mr-2" />
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
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
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
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <p className="text-green-400">
              Easy:{" "}
              <span className="font-bold">
                {easySolved} / {totalEasy}
              </span>
            </p>
            <p className="text-orange-400">
              Medium:{" "}
              <span className="font-bold">
                {mediumSolved} / {totalMedium}
              </span>
            </p>
            <p className="text-red-400">
              Hard:{" "}
              <span className="font-bold">
                {hardSolved} / {totalHard}
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Style for ripple loader and loading message */}
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .ripple-loader {
          position: relative;
          width: 80px; /* You can adjust the size */
          height: 80px; /* You can adjust the size */
          margin: 0 auto;
          border-radius: 50%;
          border: 5px solid rgba(255, 255, 255, 0.2);
          border-top-color: rgba(255, 255, 255, 1);
          animation: ripple 1s infinite linear;
        }

        .loading-text {
          font-size: 1.5rem; /* You can adjust the size */
          animation: colorChange 2s infinite;
        }

        /* Color change animation */
        @keyframes colorChange {
          0% {
            color: #ffffff;
          }
          25% {
            color: #ff4081;
          }
          50% {
            color: #3f51b5;
          }
          75% {
            color: #4caf50;
          }
          100% {
            color: #ffffff;
          }
        }
      `}</style>
    </div>
  );
};

// Loading Message Component
const LoadingMessage = () => {
  return (
    <div className="text-white text-center">
      <div className="ripple-loader"></div>
      <h2 className="loading-text">
        Please wait while fetching data from LeetCode site...
      </h2>
    </div>
  );
};

export default LeetCodeDashboard;
