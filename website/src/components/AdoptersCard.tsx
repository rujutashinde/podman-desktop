import React from 'react';

//Properties
interface AdoptersCardProps {
  readonly logo: string;
  readonly alt: string;
  readonly width: string;
  readonly height: string;
}

// AdoptersCard component
function AdoptersCard({ logo, alt, width, height }: AdoptersCardProps): JSX.Element {
  return (
    <div className="flex items-center">
      <img src={logo} alt={alt} style={{ width, height, opacity: 1 }} />
    </div>
  );
}

export default AdoptersCard;
