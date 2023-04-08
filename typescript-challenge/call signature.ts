/**
 * 배열에 대한 Call Signature 만들기
 */

// 나의 작성
type Last = <T>(arr: T[]) => T

const last: Last = (arr) => {
    return arr[arr.length - 1]
}

type Prepend = <T>(arr: T[], item: T) => T[]

const prepend: Prepend = (arr, item) => {
    return [item, ...arr]
}

type Mix = <T>(arr1: T[], arr2: T[]) => T[]

const mix: Mix = (arr1, arr2) => {
    const result = [...arr1, ...arr2]
    return result
}

type Count = <T>(arr: T[]) => number

const count: Count = (arr) => {
    return arr.length
}

type FindIndex = <T>(arr: T[], item: T) => number | null

const findIndex: FindIndex = (arr, item) => {
    const findIndex = arr.indexOf(item)
    return findIndex >= 0 ? findIndex : null
}

type Slice = <T>(arr: T[], startIndex: number, endIndex: number) => T[]

const slice: Slice = (arr, startIndex, endIndex) => {
    return arr.slice(startIndex, endIndex)
}

// 정답 코드
type Last = <T>(items: T[]) => T;

const last: Last = (items) => items[items.length - 1];

const lastItem = last([1, 2, 3, 4, 5]);

console.log(`Last: ${lastItem}`);

type Prepend = <T>(items: T[], item: T) => T[];

const prepend: Prepend = (items, item) =>  [item, ...items]

const items = [1, 2, 3, 4, 5];

const newItems = prepend(items,0);

console.log(`Prepend: ${newItems}`)

type Mix = <T>(a: T[], b: T[]) => T[]

const mix: Mix = (firstArr, secondArr) => [...firstArr, ...secondArr];

const mixed = mix([1, 2, 3], [4, 5, 6]);

console.log(`Mix: ${mixed}`)

type Count = <T>(items: T[]) => number;

const count: Count = (items) => items.length;

const counted = count([1, 2, 3, 4, 5]);

console.log(`Count :${counted}`);

type FindIndex = <T>(items: T[], item:T) => number | boolean;

const find: FindIndex = (items, item) => {
    const index = items.indexOf(item)
    return  index === -1 ? false : index;
}

const found = find([1, 2, 3, 4], 1);

console.log(`FindIndex (found): ${found}`);

const notFound = find([1, 2, 3, 4], 5);

console.log(`FindIndex (not found): ${notFound}`);

type Slice = <T>(items: T[], start: number, end?:number) => T[]

const slice : Slice = (items, start, end) => items.slice(start, end);

const sliced = slice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6);

console.log(`Slice ${sliced}`);