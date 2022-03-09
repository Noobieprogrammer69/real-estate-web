import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <Box bgGradient='linear(to-r, green.100, pink.200)'>
          <Head>
            <title>Real Estate</title>
          </Head>
          <Box bgGradient='linear(to-r, green.100, pink.200)' maxWidth='1280px' m='auto'>
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </Box>
        </Box>
      );
};

export default Layout;