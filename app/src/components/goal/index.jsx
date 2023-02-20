// GoalCard.js

import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import moment from "moment";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

const Text = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Timestamp = styled.p`
  font-size: 16px;
  color: #999999;
  margin-bottom: 20px;
`;

const OptionButton = styled.button`
  border: none;
  background-color: transparent;
  color: #999999;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #333333;
  }
`;

const OptionsContainer = styled(motion.div)`
  position: absolute;
  top: 60px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const Option = styled.button`
  border: none;
  background-color: transparent;
  color: #999999;
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
  transition: all 0.2s;

  &:hover {
    color: #333333;
    background-color: #f1f1f1;
  }
`;

const GoalCard = ({ text, timestamp }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleDelete = () => {
    console.log("Delete goal:", text);
  };

  const handleUpdate = () => {
    console.log("Update goal:", text);
  };

  return (
    <Container>
      <Text>{text}</Text>
      <Timestamp>{moment(timestamp).format("MMMM Do, YYYY")}</Timestamp>
      <OptionButton onClick={toggleOptions}>...</OptionButton>
      {showOptions && (
        <OptionsContainer
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <Option onClick={handleUpdate}>Update</Option>
          <Option onClick={handleDelete}>Delete</Option>
        </OptionsContainer>
      )}
    </Container>
  );
};

export default GoalCard;
