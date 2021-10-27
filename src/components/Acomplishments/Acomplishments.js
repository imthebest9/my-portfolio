import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: "11 Projects",
    text: "CS50's Introduction to AI with Python",
  },
  { number: "3.76", text: "Current CGPA at USM" },
  { number: "4.0", text: "Matriculation CGPA" },
  { number: "11 A's", text: "SPM results" },
];

const Acomplishments = () => (
  <Section id="milestones">
    <SectionTitle>Milestones</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
