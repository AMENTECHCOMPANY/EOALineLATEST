import React from 'react';
import LaunchNavbar from './LaunchNavbar';
import LaunchHero from './LaunchHero';
import LaunchFooter from './LaunchFooter';

const LaunchPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <LaunchNavbar />
      <LaunchHero />
      <LaunchFooter />
    </div>
  );
};

export default LaunchPage;