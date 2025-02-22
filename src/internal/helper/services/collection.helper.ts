import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class CollectionHelper {
  getLeftByIndex<T>(array: T[], index: number): T {
    return _.nth(array, index);
  }

  getRightByIndex<T>(array: T[], index: number): T {
    return _.nth(array, -Math.abs(index));
  }

  getLeftByLength(array: Array<any>, length: number): Array<any> {
    return _.take(array, length);
  }

  getRightByLength(array: Array<any>, length: number): Array<any> {
    return _.takeRight(array, length);
  }

  getLast<T>(array: T[]): T {
    return _.last(array);
  }

  getFirst<T>(array: T[]): T {
    return _.head(array);
  }

  getFirstIndexByValue<T>(array: T[], value: T): number {
    return _.indexOf(array, value);
  }

  getLastIndexByValue<T>(array: T[], value: T): number {
    return _.lastIndexOf(array, value);
  }

  removeByValue<T>(array: T[], value: T): T[] {
    return _.remove(array, function (n) {
      return n === value;
    });
  }

  removeLeftByLength(array: Array<any>, length: number) {
    return _.drop(array, length);
  }

  removeRightByLength(array: Array<any>, length: number) {
    return _.dropRight(array, length);
  }

  joinToString(array: Array<any>, delimiter: string): string {
    return _.join(array, delimiter);
  }

  reverse<T>(array: T[]): T[] {
    return _.reverse(array);
  }

  unique<T>(array: T[]): T[] {
    return _.uniq(array);
  }

  shuffle<T>(array: T[]): T[] {
    return _.shuffle(array);
  }

  merge<T>(a: T[], b: T[]): T[] {
    return _.concat(a, b);
  }

  mergeUnique<T>(a: T[], b: T[]): T[] {
    return _.union(a, b);
  }

  filterNotIncludeByValue<T>(array: T[], value: T): T[] {
    return _.without(array, value);
  }

  filterNotIncludeByArr<T>(array: T[], valueArr: T[]): T[] {
    return _.without(array, ...valueArr);
  }

  filterNotIncludeByArray<T>(a: T[], b: T[]): T[] {
    return _.xor(a, b);
  }

  filterIncludeByArray<T>(a: T[], b: T[]): T[] {
    return _.intersection(a, b);
  }

  equals<T>(a: T[], b: T[]): boolean {
    return _.isEqual(a, b);
  }

  notEquals<T>(a: T[], b: T[]): boolean {
    return !_.isEqual(a, b);
  }

  in<T>(a: T[], b: T[]): boolean {
    return _.intersection(a, b).length > 0;
  }

  includes<T>(a: T[], b: T): boolean {
    return _.includes(a, b);
  }

  random(a: number, b: number): number {
    return _.random(a, b);
  }

  randomString(length: number) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  arrayBufferToBase64(buffer: Iterable<number>) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  fullWidthToHalfWidth(strInput?: string): string {
    return (strInput || '').replace(/[Ａ-Ｚａ-ｚ０-９]/g, (str) =>
      String.fromCharCode(str.charCodeAt(0) - 0xfee0),
    );
  }
}
