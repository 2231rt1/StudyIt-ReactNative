import React, { useEffect } from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { styles } from './NeonLightButtonStyle';

interface NeonLightButtonProps {
  title: string;
  onPress: () => void;
}

const NeonLightButton: React.FC<NeonLightButtonProps> = ({
  title,
  onPress,
}) => {
  const scale = useSharedValue(1);
  const isAnimating = useSharedValue(true);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  useEffect(() => {
    const animate = () => {
      if (isAnimating.value) {
        scale.value = withTiming(
          1.05,
          {
            duration: 800,
            easing: Easing.inOut(Easing.ease),
          },
          () => {
            scale.value = withTiming(1, {
              duration: 800,
              easing: Easing.inOut(Easing.ease),
            });
          },
        );
      }
    };

    const interval = setInterval(animate, 2000);
    return () => clearInterval(interval);
  }, [scale, isAnimating]);

  const handlePressIn = () => {
    isAnimating.value = false;
    scale.value = withTiming(0.95, {
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    });
  };

  const handlePressOut = () => {
    isAnimating.value = true;
    scale.value = withTiming(1, {
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={[styles.container, animatedStyle]}>
        <Text style={styles.button}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default NeonLightButton;
