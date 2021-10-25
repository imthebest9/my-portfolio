import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>LOO KAI's Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Project</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#milestones">
          <NavLink>Milestones</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/imthebest9">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/kai-loo/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/lookai0303/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/lookai0303/">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
