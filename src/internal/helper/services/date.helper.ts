import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import ms from 'ms';

import {
  IHelperDateOptionsCreate,
  IHelperDateOptionsForward,
  IHelperDateOptionsBackward,
} from '../interfaces/date-helper.interface';

export enum TIME_FORMAT {
  HH_MM_SS = 'HH:mm:ss',
  HH_MM = 'HH:mm',
}
export enum DATE_FORMAT {
  SMART_RYDE = 'yyyy-MM-DDTHH:mm',
  NORMAL = 'YYYY-MM-DD HH:mm:ss',
  DATE = 'YYYY-MM-DD',
  SIMPLE_DATE = 'YYYY/MM/DD',
  JP_DATE_TIME = 'YYYY年MM月DD日のHH:mm',
}
export const JPT_TIME_ZONE = 9;

@Injectable()
export class DateHelper {
  static getDate() {
    return moment().format('YYYY-MM-DD');
  }

  timFormat(time: string, current: TIME_FORMAT, target: TIME_FORMAT) {
    return moment(time, current).format(target);
  }

  dateFormat(date: Date, format: DATE_FORMAT) {
    return moment(date).format(format);
  }

  getDate(options?: IHelperDateOptionsCreate): string {
    return moment(options?.date ? options.date : undefined).format(
      DATE_FORMAT.DATE,
    );
  }

  ms(value: string) {
    return ms(value);
  }

  create(options?: IHelperDateOptionsCreate): Date {
    const date = moment(options?.date ? options.date : undefined);
    if (options?.time) {
      const time = moment(options.time, 'HH:mm:ss');
      date.set({
        hour: time.get('hour'),
        minute: time.get('minute'),
        second: time.get('second'),
      });
    }
    return date.toDate();
  }

  getPartDate(value: Date) {
    const date = moment(value);
    return {
      year: date.get('year'),
      month: date.get('month'),
      dates: date.get('dates'),
      hour: date.get('hour'),
      minute: date.get('minute'),
      second: date.get('second'),
    };
  }

  getStartAndEndDate(date: Date) {
    return {
      start: this.create({
        date: date,
        time: '00:00:00',
      }),
      end: this.create({
        date: date,
        time: '23:59:59',
      }),
    };
  }

  isValid(date: any): boolean {
    return moment(date).isValid();
  }

  forwardInDays(days: number, options?: IHelperDateOptionsForward): Date {
    return moment(options?.fromDate ? options.fromDate : undefined)
      .add(days, 'd')
      .toDate();
  }

  backwardInDays(days: number, options?: IHelperDateOptionsBackward): Date {
    return moment(options?.fromDate ? options.fromDate : undefined)
      .subtract(days, 'd')
      .toDate();
  }

  forwardInMonths(months: number, options?: IHelperDateOptionsForward): Date {
    return moment(options?.fromDate ? options.fromDate : undefined)
      .add(months, 'M')
      .toDate();
  }

  backwardInMonths(months: number, options?: IHelperDateOptionsBackward): Date {
    return moment(options?.fromDate ? options.fromDate : undefined)
      .subtract(months, 'M')
      .toDate();
  }

  forwardInHours(hours: number, options?: IHelperDateOptionsForward): Date {
    return moment(options?.fromDate ? options.fromDate : undefined)
      .add(hours, 'h')
      .toDate();
  }

  backwardInHours(hours: number, options?: IHelperDateOptionsBackward): Date {
    return moment(options?.fromDate ? options.fromDate : undefined)
      .subtract(hours, 'h')
      .toDate();
  }

  modifyDate(date: Date, offset: number) {
    const absOffset = Math.abs(offset);
    return offset > 0
      ? this.forwardInDays(absOffset, {
          fromDate: date,
        })
      : this.backwardInDays(absOffset, {
          fromDate: date,
        });
  }

  isoWeek(date: Date): number {
    return moment(date).isoWeek();
  }

  isoWeekDay(date: Date): number {
    return moment(date).isoWeekday();
  }

  startOfMonth(options?: IHelperDateOptionsCreate): Date {
    return moment(options?.date ? options.date : undefined)
      .startOf('month')
      .toDate();
  }

  endOfMonth(options?: IHelperDateOptionsCreate): Date {
    return moment(options?.date ? options.date : undefined)
      .endOf('month')
      .toDate();
  }

  startOfYear(options?: IHelperDateOptionsCreate): Date {
    return moment(options?.date ? options.date : undefined)
      .startOf('year')
      .toDate();
  }

  endOfYear(options?: IHelperDateOptionsCreate): Date {
    return moment(options?.date ? options.date : undefined)
      .endOf('year')
      .toDate();
  }

  convertJPTTimeZone(dateValue: Date): Date {
    return this.forwardInHours(JPT_TIME_ZONE, {
      fromDate: dateValue,
    });
  }

  convertJPTToUTC(dateValue: Date): Date {
    return this.backwardInHours(JPT_TIME_ZONE, {
      fromDate: dateValue,
    });
  }
}
