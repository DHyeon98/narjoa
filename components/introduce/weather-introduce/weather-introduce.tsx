import { WEATHER_INTRODUCE_DATA } from '@/constants/weather-introduce';

export default function WeatherIntroduce() {
  return (
    <section className="introduce-bg">
      <h3 className="introduce-title">1. 위치 기반 날씨 정보 제공</h3>
      <ul className="flex justify-between gap-10 max-lg:flex-col max-md:gap-6">
        {WEATHER_INTRODUCE_DATA.map((data, index) => {
          return (
            <li key={index} className="weather-introduce-card max-lg:w-full">
              <strong className="text-xl max-md:text-base">step{index + 1}.</strong>
              <div className="w-44 mx-auto my-3 max-md:w-32">
                <data.IconComponent width="100%" height="100%" viewBox="0 0 900 600" aria-label={data.text} />
              </div>
              <p className="max-md:text-sm">{data.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
