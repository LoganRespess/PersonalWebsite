import * as React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import styled from '@emotion/styled';
import { Button } from '@mui/base';
import { HeroBox, HeroGridLeft, HeroGridRight} from './StyledElements';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function HeroSection() {
  return (
    <HeroBox>
      <Grid2 container spacing={2}>
        <Grid2 xs={8}>
          <HeroGridLeft>
            Welcome to my Website!
          </HeroGridLeft>
        </Grid2>
        <Grid2 xs={4}>
          <HeroGridRight>
            Home of my project, blog, and more. Stay awhile and listen!
          </HeroGridRight>
        </Grid2>
      </Grid2>
    </HeroBox>
  );
}