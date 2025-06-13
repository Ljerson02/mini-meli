import { HeroBanner } from '@/features/commons/components/HeroBanner';
import React from 'react';

export default function Home() {
  return (
    <div className="w-100">
      <HeroBanner
        className="container my-4 rounded-4 p-0 d-block d-md-none position-relative overflow-hidden"
        style={{ minHeight: '40vh', height: '40vh' }}
        imageStyle={{ objectFit: 'cover', zIndex: 0, borderRadius: '1.5rem' }}
        linkClassName="position-relative w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center"
        linkStyle={{ zIndex: 1, height: '100%' }}
      />
      <HeroBanner
        className="hero position-relative d-none d-md-flex align-items-center justify-content-center text-center overflow-hidden"
        style={{ minHeight: '60vh', width: '100%' }}
        imageStyle={{ objectFit: 'cover', zIndex: 0 }}
        linkClassName="position-relative w-100"
        linkStyle={{ zIndex: 1 }}
      />
    </div>
  );
}
