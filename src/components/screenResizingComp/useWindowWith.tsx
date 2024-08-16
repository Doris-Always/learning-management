'use-client'
// import { useState, useEffect } from 'react';

// const UseWindowWidth = () => {
//   const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return windowWidth;
// }
// export default UseWindowWidth; 


import { useState, useEffect } from 'react';

const UseWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // Ensure the code runs only in the browser
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowWidth(window.innerWidth);

      // Set initial width
      setWindowWidth(window.innerWidth);

      // Add resize event listener
      window.addEventListener('resize', handleResize);

      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowWidth;
};

export default UseWindowWidth;

