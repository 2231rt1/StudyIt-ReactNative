import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    Dimensions.get('window'),
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(Dimensions.get('window'));
    };

    const subscription = Dimensions.addEventListener('change', handleResize);
    return () => subscription?.remove();
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
