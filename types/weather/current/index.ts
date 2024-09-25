import { HourlyType } from '../hourly';

export interface CurrentType extends Omit<HourlyType, 'wind_gust' | 'pop'> {}
