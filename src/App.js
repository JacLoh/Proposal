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
  const [letterOpened, setLetterOpened] = useState(false);

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
      {!letterOpened ? (
        <div className="letter-wrapper" onClick={() => setLetterOpened(true)}>
          <img src="Letter.png" className="letter-image" alt="Letter" />
        </div>
      ) : (
        <div className="proposal-layout">
          {!yesClicked && (
            <>
              
              <div className="top-photo-container">
                <img src="Zilin2.jpg" className="top-photo" alt="Top" />
              </div>

            
              <div className="proposal-content">
                <div className="side-photo-container">
                  <img
                    src="Zilin3.jpg"
                    className="side-photo left-photo"
                    alt="Left"
                  />
                  <div className="proposal-box">
                    <h1 className="proposal-title">
                      Zilin, will you be my girlfriend? ❤️
                    </h1>
                    <div className="buttons">
                      <motion.button
                        className="fancy-button yes-button"
                        whileHover={{ scale: 1.2 }}
                        onClick={handleYesClick}
                      >
                        Yes
                      </motion.button>
                      <motion.button
                        className="fancy-button no-button"
                        style={
                          isMoving
                            ? {
                                position: "absolute",
                                top: noPosition.top,
                                left: noPosition.left,
                              }
                            : {}
                        }
                        onClick={handleNoClick}
                      >
                        No
                      </motion.button>
                    </div>
                    {clickedNo > 0 && (
                      <p className="funny-text">
                        Heyy why are you trying to reject me?! 🤨
                      </p>
                    )}
                    {clickedNo >= 3 && (
                      <p className="funny-text">
                        No isn’t an option, Zilin 😜
                      </p>
                    )}
                  </div>
                  <img
                    src="Zilin1.jpg"
                    className="side-photo right-photo"
                    alt="Right"
                  />
                </div>
              </div>
            </>
          )}
          {yesClicked && (
            <div className="yes-box">
              <h1 className="celebration-title">Yay, I love you 💖</h1>
              <p className="celebration-text">
                Let's celebrate with a Valentine's date!
              </p>
              <div className="invitation-card animated-card">
                <h2 className="invitation-title">You're Invited! 🎉</h2>
                <p>
                  <strong>Location:</strong> CAFEKREAMS MAXWELL <br></br>
                </p>
                <p>
                  <strong>Date:</strong> 14th February
                </p>
                <p>
                  <strong>Time:</strong> 7:30 PM
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Proposal;
