import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm an Universiti Sains Malaysia student for Degree of Computer Science
        ( Data Analytics).
      </SectionText>
      <Button onClick={() => window.open("https://drive.google.com/file/d/1FzgFakT5dp7WPdvCRQk-FW-9mVUt8b6t/view?usp=sharing", '_blank')}>
        Check out my CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
