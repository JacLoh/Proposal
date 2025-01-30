import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import "./App.css";

const Proposal = () => {
  const [clickedNo, setClickedNo] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "auto", left: "auto" });
  const [showConfetti, setShowConfetti] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    if (clickedNo > 0) {
      setIsMoving(true);
      setNoPosition({
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
      });
    }
  }, [clickedNo]);

  const handleNoClick = () => {
    setClickedNo(clickedNo + 1);
    if (clickedNo >= 5) {
      alert("Oops! The 'No' button is broken now. Guess you have to say Yes!");
    }
  };

  const handleYesClick = () => {
    setYesClicked(true);
    setShowConfetti(true);
  };

  return (
    <div className="proposal-container">
      {showConfetti && <Confetti />}
      {!yesClicked ? (
        <div className="proposal-box">
          <h1>Zilin, will you be my girlfriend? ❤️</h1>
          <div className="buttons">
            <motion.button
              className="yes-button"
              whileHover={{ scale: 1.2 }}
              onClick={handleYesClick}
            >
              Yes
            </motion.button>
            <motion.button
              className="no-button"
              style={isMoving ? { position: "absolute", top: noPosition.top, left: noPosition.left } : {}}
              onClick={handleNoClick}
            >
              No
            </motion.button>
          </div>
          {clickedNo > 0 && <p className="funny-text">Hey! Why are you trying to reject me?! 🤨</p>}
          {clickedNo >= 3 && <p className="funny-text">No isn’t an option, Zilin 😜</p>}
        </div>
      ) : (
        <div className="yes-box">
          <h1>YAY! 🎉 I’m so lucky to have you, Zilin! 💖</h1>
          <p>Let’s celebrate with a special date! 🎊</p>
        </div>
      )}
    </div>
  );
};
export default Proposal;