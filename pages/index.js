import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import Layout from 'components/Layout';
import NftCard from 'components/NftCard';
// import dummy nfts
import { dummyNfts } from 'data/dummy-nfts';

const Home = () => {
  const [nfts, setNfts] = useState(dummyNfts);

  useEffect(() => {
    console.log('nfts');
    console.log(dummyNfts);
  }, []);
  return (
    <Layout title="Home">
      <Box sx={{ display: 'flex' }}>
        {dummyNfts.map((nft, i) => (
          // <Typography key={i}>{nft.name}</Typography>
          <NftCard key={i} />
        ))}
      </Box>
  
    </Layout>
  );
};

export default Home;
