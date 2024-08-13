import React, {useEffect, useState} from 'react';
import { connect, Head } from 'frontity';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from '../styles/themes/theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/raleway';
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/300-italic.css';
import '@fontsource/raleway/400-italic.css';
import '@fontsource/raleway/500-italic.css';
import '@fontsource/raleway/700-italic.css';
import '@fontsource/material-icons';
import Navbar from "./navbar/navbar/Navbar";
import {ClaimExtraComponent} from "./navbar/extra-components/ClaimExtraComponent";


function Root() {

  return (
    <>
      <Head>
        <title>California Casualty</title>
        <meta name="description" content="California Casualty New Website" />
        <html lang="en" />
      </Head>
      <ThemeProvider theme={customTheme}>
          <Navbar />
          {/*<ClaimExtraComponent />*/}
      </ThemeProvider>
    </>
  );
}

export default connect(Root);
