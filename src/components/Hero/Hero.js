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
      <Button onClick={() => window.open("//"+"altosharepdf.com/share/23617ca4ef85e3cef60492a2e224374f", '_blank')}>
        Check out my CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
