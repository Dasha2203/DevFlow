import { useEffect, useState } from 'react';

export function useDeviceType(windowWidth: number = 600) {
  const [isMobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < windowWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setMobile, isMobile, windowWidth]);

  return { isMobile };
}
