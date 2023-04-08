/**
 * 타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요.
 * Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.
 * add: 단어를 추가함.
 * get: 단어의 정의를 리턴함.
 * delete: 단어를 삭제함.
 * update: 단어를 업데이트 함.
 * showAll: 사전 단어를 모두 보여줌.
 * count: 사전 단어들의 총 갯수를 리턴함.
 * upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
 * exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
 * bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
 * bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]
*/

// 내가 작성한 코드
type Words = {
    [key:string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }

    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.definition
        }
    }

    wordGet(term: string) {
        return this.words[term];
    }

    wordDelete(term: string) {
        delete this.words[term]
    }

    update(word: Word) {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.definition
        }
    }

    showAll() {
        Object.keys(this.words).forEach(term => {
            console.log(`${term}: ${this.words[term]}`)
        })
    }

    count() {
        return Object.keys(this.words).length
    }

    upsert(word: Word) {
        this.words[word.term] = word.definition
    }

    exists(term: string) {
        return this.words[term] !== undefined
    }

    bulkAdd(words: Word[]) {
        words.forEach(term => {
            this.add(term)
        })
    }

    bulkDelete(terms: string[]) {
        terms.forEach(term => {
            this.wordDelete(term)
        })
    }
}

class Word {
    constructor(
        public term: string,
        public definition: string
    ) {}
}

const dict = new Dict()
const kimchi = new Word("김치", "한국의 음식")
const updateKimchi = new Word("김치", "최고의 한국 음식")
const upsertKimchi = new Word("배추김치", "가장 인기있는 김치")

dict.add(kimchi)
dict.wordGet("김치")
dict.wordDelete("김치")
dict.update(updateKimchi)
dict.showAll()
dict.count()
dict.upsert(upsertKimchi)
dict.exists("김치")
dict.bulkAdd([
    new Word("총각김치", "인기있는 반찬의 무 김치"),
    new Word("깍두기", "국밥에 필요한 무 김치"),
])
dict.bulkDelete([
    "총각김치",
    "깍두기"
])
