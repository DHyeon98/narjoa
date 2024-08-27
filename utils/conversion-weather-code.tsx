import RainSVG from '@/public/images/rain.svg';
import SnowSVG from '@/public/images/snow.svg';
import SunnySVG from '@/public/images/sunny.svg';
import CloudySVG from '@/public/images/cloudy.svg';

export function conversionWeatherCode(code: number) {
  switch (true) {
    case code === 200 || code === 201 || code === 202:
      return <RainSVG width="100%" height="100%" viewBox="0 0 48 48" />;
    case code >= 203 && code < 300:
      return <CloudySVG width="100%" height="100%" viewBox="0 0 48 48" />;
    case (code >= 300 && code < 400) || (code >= 500 && code < 600):
      return <RainSVG width="100%" height="100%" viewBox="0 0 48 48" />;
    case code >= 600 && code < 700:
      return <SnowSVG width="100%" height="100%" viewBox="0 0 48 48" />;
    case code >= 700 && code < 800:
      return <CloudySVG width="100%" height="100%" viewBox="0 0 48 48" />;
    case code === 800:
      return <SunnySVG width="100%" height="100%" viewBox="0 0 48 48" />;
    case code >= 801 && code < 900:
      return <CloudySVG width="100%" height="100%" viewBox="0 0 48 48" />;
    default:
      return <CloudySVG width="100%" height="100%" viewBox="0 0 48 48" />;
  }
}
