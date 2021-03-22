import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { RoleEnum } from 'app/shared/services/role/role.interface';
import { UserEntity } from 'app/shared/services/user/user.interface';
import { UsersService } from 'app/shared/services/user/user.service';
import { WorkshiftEntity } from 'app/shared/services/workshift/workshift.interface';
import { RequestQueryBuilder } from 'nest-crud-client';
import { count, filter, map, mergeMap, tap } from 'rxjs/operators';
import { DataChartBarEntity, NameSeriesEnum, SeriesEntity } from './data-chart.interface';

@Component({
  selector: 'ngx-quan-ly-hieu-suat',
  templateUrl: './quan-ly-hieu-suat.component.html',
  styleUrls: ['./quan-ly-hieu-suat.component.scss'],
})
export class QuanLyHieuSuatComponent implements OnInit {
  datas: DataChartBarEntity[] = [];
  values = [];
  tgLamViec: any;
  filterEntity = {
    workshift: '',
    userId: '',
  };
  isThonKe = false;

  constructor(private userService: UsersService, private toast: NbToastrService) {
    this.thongKeNhanVien();
  }

  async ngOnInit() { }
  thongKeNhanVien() {
    try {
      this.isThonKe = true;
      this.userService.getMany(this.getBuilder())
        .pipe(
          mergeMap((users: UserEntity[]) => {
            const data: DataChartBarEntity[] = [];
            // tslint:disable-next-line:max-line-length
            users.forEach(user => {
              const soCaDiLam = user.workshifts.filter(workshift => workshift.status === true).length;
              const soCaKhongDiLam = user.workshifts.filter(workshift => workshift.status === false).length;
              const soCaDangKy = user.workshifts.length;
              const seriesDK: SeriesEntity = {
                name: NameSeriesEnum.DADK,
                value: soCaDangKy,
                extra: {
                  code: user.userId,
                },
              };
              const seriesKDL: SeriesEntity = {
                name: NameSeriesEnum.KDL,
                value: soCaKhongDiLam,
                extra: {
                  code: user.userId,
                },
              };
              const seriesDL: SeriesEntity = {
                name: NameSeriesEnum.DL,
                value: soCaDiLam,
                extra: {
                  code: user.userId,
                },
              };
              const dataChart: DataChartBarEntity = {
                name: `${user.displayName}_${user.userId}`,
                series: [
                  seriesDK,
                  seriesKDL,
                  seriesDL,
                ],
              };
              data.push(...[dataChart]);
            });
            this.isThonKe = false;
            return this.datas = data;
          })).toPromise();
    } catch (error) {
      this.toast.danger(error);
    }
  }
  filterWorkshift(workshifts: WorkshiftEntity[]) {
    return workshifts.filter(workshift => workshift.status === true);
  }
  getBuilder(): RequestQueryBuilder {
    const builder = new RequestQueryBuilder();
    builder.select(['displayName', 'roleId', 'workshifts'] as Array<keyof UserEntity>);
    // tslint:disable-next-line:max-line-length
    builder.setJoin({ field: 'workshifts', select: ['date', 'status', 'workshift', 'user'] as Array<keyof WorkshiftEntity> });
    builder.setFilter({ field: 'roleId', operator: '$in', value: [RoleEnum.Employee, RoleEnum.Admin] });

    this.tgLamViec &&
      (this.tgLamViec as any).start &&
      builder.setFilter({
        field: 'workshifts.date',
        operator: '$gte',
        value: ((this.tgLamViec as any).start as Date).toJSON(),
      });
    this.tgLamViec &&
      (this.tgLamViec as any).end &&
      builder.setFilter({
        field: 'workshifts.date',
        operator: '$lte',
        value: ((this.tgLamViec as any).end as Date).toJSON(),
      });
    this.filterEntity && this.filterEntity.workshift &&
      builder.setFilter({ field: 'workshifts.workshift', operator: '$eq', value: this.filterEntity.workshift });
    this.filterEntity && this.filterEntity.userId &&
      builder.setFilter({ field: 'userId', operator: '$eq', value: this.filterEntity.userId });
    return builder;
  }
}
