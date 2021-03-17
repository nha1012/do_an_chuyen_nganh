export interface DataChartBarEntity {
  name: string;
  series: SeriesEntity[];
}
export interface SeriesEntity {
  name: NameSeriesEnum;
  value: number;
  extra?: {
    code: string,
  };
}
export enum NameSeriesEnum {
  DADK = 'Đã đăng ký',
  KDL = 'Không đi làm',
  DL = 'Có đi làm',
}
