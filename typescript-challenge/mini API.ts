/**
** Challenge goals:
classes 그리고 interfaces 를 활용하여, 아래 API를 위한 '미니' 버전을 구현하세요.

- LocalStorage API
- Geolocation API

** LocalStorage API:
- Use abstract classes and generics.
- 추상화 클래스와 제네릭을 사용하세요.

Usage:

localStorage.setItem(<key>, <value>)
localStorage.getItem(<key>)
localStorage.clearItem(<key>)
localStorage.clear()

Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Storage

** Geolocation API:
-overloading을 사용하세요.

geolocation.getCurrentPosition(successFn);
geolocation.getCurrentPosition(successFn, errorFn);
geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
geolocation.watchPosition(success);
geolocation.watchPosition(success, error);
geolocation.watchPosition(success, error, options);
geolocation.clearWatch(id);

Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation
*/

// 내가 작성한 코드
// LocalStorageAPI 인터페이스
interface LocalStorageAPI<T> {
    [key: string]: T
}

// GeolocationAPI 인터페이스
interface GeolocationAPI {
    coords: {
        lat: number
        lon: number
    }
}
interface GeolocationOptionAPI {
    enableHighAccuracy?: boolean
    timeout?: number
    maximumAge?: number
}

// Geolocation 파라미터 처리 타입화
type Position = (position: GeolocationAPI) => void
type GeolocationError = {
    code: number
    message: string
}
type ErrorFn = (error: GeolocationError) => void

// LocalStorage 추상화 클래스
abstract class MiniLocalStorage<T> {
    abstract setItem(key: string, value: T): void
    abstract getItem(key: string): T | null
    abstract clearItem(key: string): void
    abstract clear(): void
}

// Geolocation 추상화 클래스
abstract class MiniGeolocation {
    abstract getCurrentPosition(successFn: Position, errorFn?: ErrorFn, optionsObj?: GeolocationOptionAPI): void
    abstract watchPosition(success: Position, error?: ErrorFn, options?: GeolocationOptionAPI): number
    abstract clearWatch(id: number): void
}

// LocalStorage 클래스
class LocalStorage<T> extends MiniLocalStorage<T> {
    private storage: LocalStorageAPI<T> = {}

    setItem(key: string, value: T) {
        this.storage[key] = value
    }
    getItem(key: string) {
        return this.storage[key] || null
    }
    clearItem(key: string) {
        delete this.storage[key]
    }
    clear() {
        this.storage = {}
    } 
}

// Geolocation 클래스
class GeolocationClass extends MiniGeolocation {
    private id: number = 0

    getCurrentPosition(successFn: Position, errorFn?: ErrorFn, optionsObj?: GeolocationOptionAPI): void {
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
            successFn({
                coords: {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                }
            })
        },
        errorFn,
        optionsObj
        )
    }
    watchPosition(success: Position, error?: ErrorFn, options?: GeolocationOptionAPI): number {
        this.id = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
            success({
                coords: {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                }
            })
        },
        error,
        options
        )
        return this.id
    }
    clearWatch(id: number): void {
        navigator.geolocation.clearWatch(id)
    }
}

// LocalStorage 호출 예시
const stringStorage = new LocalStorage<string>()

stringStorage.setItem("cat", "ya")
console.log(stringStorage.getItem("cat"))
stringStorage.clearItem("cat")
stringStorage.clear()

// Geolocation 호출 예시
const geolocation = new Geolocation();

geolocation.getCurrentPosition((position) => {
  console.log(`Current Position: ${position.coords.latitude}, ${position.coords.longitude}`);
}, (error) => {
  console.error(`Error occurred: ${error.message}`);
}, { enableHighAccuracy: true });

const watchId = geolocation.watchPosition((position) => {
  console.log(`Watched Position: ${position.coords.latitude}, ${position.coords.longitude}`);
}, (error) => {
  console.error(`Error occurred: ${error.message}`);
}, { maximumAge: 5000 });

setTimeout(() => {
  geolocation.clearWatch(watchId);
}, 10000);