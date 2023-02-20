// GoalsPage.js

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import GoalCard from "./GoalCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const GoalsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const goalVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const GoalsPage = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    // simulate loading goals from API
    setTimeout(() => {
      setGoals([
        {
          id: 1,
          text: "Learn React",
          timestamp: "2022-02-22T10:00:00Z",
        },
        {
          id: 2,
          text: "Start a side project",
          timestamp: "2022-02-24T14:00:00Z",
        },
        {
          id: 3,
          text: "Get in shape",
          timestamp: "2022-03-01T08:00:00Z",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <Container>
      <Title>My Goals</Title>
      <GoalsContainer
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {goals.map((goal, i) => (
          <motion.div key={goal.id} variants={goalVariants} custom={i}>
            <GoalCard text={goal.text} timestamp={goal.timestamp} />
          </motion.div>
        ))}
      </GoalsContainer>
    </Container>
  );
};

export default GoalsPage;
