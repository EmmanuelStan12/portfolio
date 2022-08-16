import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I'm a Full Stack Software Engineer who loves building apps that help in solving problems in different sectors. I'm currently working on an application that can help employees within a single autonomous system to communicate more effectively
      </SectionText>
      <Button onClick={() => console.log({})}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;