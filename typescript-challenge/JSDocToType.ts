/**
 * 여러분들의 목표는 다음 JSDoc 파일들의 주석 부분들을 타입스크립트 타입 정의로 바꾸는 것입니다.
 * 
 * head.js: https://github.com/lodash/lodash/blob/master/head.js
 * hasIn.js: https://github.com/lodash/lodash/blob/master/hasIn.js
 * isBoolean.js: https://github.com/lodash/lodash/blob/master/isBoolean.js
 * toString.js: https://github.com/lodash/lodash/blob/master/toString.js
 * split.js: https://github.com/lodash/lodash/blob/master/split.js
 * hasPath.js: https://github.com/lodash/lodash/blob/master/hasPath.js
 * filter.js: https://github.com/lodash/lodash/blob/master/filter.js
 * every.js: https://github.com/lodash/lodash/blob/master/every.js
 * map.js: https://github.com/lodash/lodash/blob/master/map.js
 * 
 * 함수를 실행시키는 것까지 하실 필요는 없습니다. 타입 정의만 만드시면 충분합니다.
 */

// 내가 작성한 코드
declare module "lodash" {
    function head<T>(arr: Array<T>): T | undefined
    function hasIn(object: object, key: string): boolean
    function isBoolean<T>(value: T): boolean
    function toString<T>(value: T): string
    function split(string: string, separator: RegExp | string, limit?: number): string[]
    function hasPath<T>(object: object | null, path: Array<T> | string): boolean
    function filter<T>(array: Array<T>, predicate: (value: T, index: number, array: Array<T>) => boolean): Array<T>
    function every<T>(array: Array<T>, predicate: (value: T, index: number, array: Array<T>) => boolean): boolean
    function map<T>(array: Array<T> | null, iteratee: (value: T, index: number, array: Array<T>) => T): Array<T>
}