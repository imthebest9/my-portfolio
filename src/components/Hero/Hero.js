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
      <Button onClick={() => window.open("https://drive.google.com/file/d/14V2rxWJKial6TGv3Ux7Vk8i0FevahhLY/view?usp=sharing", '_blank')}>
        Check out my CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
