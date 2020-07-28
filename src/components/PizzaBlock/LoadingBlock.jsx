import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBLock() {
  return (
    <ContentLoader
      className='pizza-block'
      speed={3}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="125" cy="125" r="125" />
      <rect x="0" y="260" rx="6" ry="6" width="280" height="24" />
      <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="420" rx="6" ry="6" width="280" height="39" />
    </ContentLoader>
  )
}

export default LoadingBLock;
