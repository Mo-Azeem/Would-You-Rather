import React from "react";
import { useNavigate } from "react-router";
import LeaderboardModal from "./LeaderboardModal";
import { motion } from 'framer-motion'
function LeaderboardModalWrapper(props) {
  const navigate = useNavigate(); 
  const closeModal = () => navigate('/')  
  const backgroundStyle = {
    position: "fixed",
    left: '50%',
    top: '50%',
    width: '100vw',
    height: '100vh',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "rgba(0,0,0,.3)",
    backdropFilter: 'blur(8px)',
    zIndex:1
  };
  const modalStyle = {
    position: "fixed",
    left: '50%',
    top: '50%',
    opacity: .2,
    transform: 'translate(-50%, -50%)',
    zIndex: 1000
  };
  return(
      <>
      <div style={backgroundStyle} onClick={closeModal}></div>
        <motion.div animate={{opacity: 1}} style={modalStyle}>
          <LeaderboardModal />
        </motion.div>
      </>
    );
}

export default LeaderboardModalWrapper;