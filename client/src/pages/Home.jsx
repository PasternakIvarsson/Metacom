import React, { useState } from 'react';
import { DisplayCampaigns } from '../components';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([
    {
      name: 'Metacom AI Extension',
      description: 'This is an EcoVenture in the Metacom ecosystem focusing on bringing AI to the platform.',
      businessName: 'Metacom',
      goal: 'ETH 10,000',
      endDate: '10/05/2023',
      imageUrl: 'https://s.yimg.com/ny/api/res/1.2/SRedXv3Y74r0xYFrT5SHuQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY3NjtoPTQ1MA--/https://media.zenfs.com/en-US/homerun/coin_rivet_596/af914adcdd377a5478c675bb9050c0de'
    },
    {
      name: 'Metacom AI Extension',
      description: 'This is an EcoVenture in the Metacom ecosystem focusing on bringing AI to the platform.',
      businessName: 'Metacom',
      goal: 'ETH 10,000',
      endDate: '10/05/2023',
      imageUrl: 'https://s.yimg.com/ny/api/res/1.2/SRedXv3Y74r0xYFrT5SHuQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY3NjtoPTQ1MA--/https://media.zenfs.com/en-US/homerun/coin_rivet_596/af914adcdd377a5478c675bb9050c0de'
    },
    {
      name: 'Metacom AI Extension',
      description: 'This is an EcoVenture in the Metacom ecosystem focusing on bringing AI to the platform.',
      businessName: 'Metacom',
      goal: 'ETH 10,000',
      endDate: '10/05/2023',
      imageUrl: 'https://s.yimg.com/ny/api/res/1.2/SRedXv3Y74r0xYFrT5SHuQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY3NjtoPTQ1MA--/https://media.zenfs.com/en-US/homerun/coin_rivet_596/af914adcdd377a5478c675bb9050c0de'
    },
    {
      name: 'Metacom AI Extension',
      description: 'This is an EcoVenture in the Metacom ecosystem focusing on bringing AI to the platform.',
      businessName: 'Metacom',
      goal: 'ETH 10,000',
      endDate: '10/05/2023',
      imageUrl: 'https://s.yimg.com/ny/api/res/1.2/SRedXv3Y74r0xYFrT5SHuQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY3NjtoPTQ1MA--/https://media.zenfs.com/en-US/homerun/coin_rivet_596/af914adcdd377a5478c675bb9050c0de'
    },
  ]);

  return (
    <DisplayCampaigns 
      title="All EcoVentures"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Home;
