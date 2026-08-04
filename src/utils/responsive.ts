import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const wp = (size: number) => (width / guidelineBaseWidth) * size;

export const hp = (size: number) => (height / guidelineBaseHeight) * size;

export const RF = (size: number) => {
  const scale = Math.min(width / guidelineBaseWidth, height / guidelineBaseHeight);
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;