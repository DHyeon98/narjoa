import { WEATHER_INTRODUCE_DATA } from '@/constants/weather-introduce';

export default function WeatherIntroduce() {
  return (
    <section className="py-14 px-14 rounded-2xl bg-slate-100">
      <h3 className="text-center text-xl font-bold mb-8">1. 위치 기반 날씨 정보 제공</h3>
      <ul className="flex justify-between gap-10">
        {WEATHER_INTRODUCE_DATA.map((data, index) => {
          return (
            <li key={index} className="weather-introduce-card">
              <strong className="text-xl">step{index + 1}.</strong>
              <div className="w-44 mx-auto my-3">
                <data.IconComponent width="100%" height="100%" viewBox="0 0 900 600" />
              </div>
              <p>{data.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
