import { Grid, Typography } from '@mui/material';

import SwipeDownIcon from '@mui/icons-material/SwipeDown';

const WelcomeMsg = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          variant="h1"
          sx={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}
        >
          Welcome to Paramount Book
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ fontSize: '1.5rem', color: 'white' }}>
          Your Gateway to Literary Success!
        </Typography>
      </Grid>
      <Grid item xs={12} id="scroll-me">
        <SwipeDownIcon sx={{ color: 'white' }} fontSize="large" />
      </Grid>
    </Grid>
  );
};

export { WelcomeMsg };
