# NodeJs-Study
# 01 백엔드 개발이란?
## 클라이언트와 서버
인터넷에서 정보를 주고받을 때 정보를 요청하는 컴퓨터를 `클라이언트`, 정보를 제공해 주는 컴퓨터를 `서버`라고 합니다.

## HTTP 프로토콜
클라이언트로부터 정보를 받아 서버로 넘기거나 정보 요청에 성공했다고 서버에서 클라이언트로 알려줄 때 미리 약속된 규칙을 따라야 하는데 이것을 `HTTP 프로토콜`이라고 합니다.

## 노드란?
백엔드 개발에서 자바스크립트를 사용할 수 있게 환경을 만들어 주는 것이 노드입니다.

<a href="https://seong-jun.tistory.com/entry/Nodejs-%EC%84%A4%EC%B9%98-%EB%B0%A9%EB%B2%95">노드 설치방법</a>

## 노드의 장점
- 자바스크립트로 프론트엔드와 백엔드를 개발할 수 있습니다.
- 개발자 커뮤니티의 규모가 크고 다양합니다.
- 서드파티 모듈이 많습니다.
    - 서드파티 모듈이란 노드 제작업체와 개발자 외에 다른 사람이 만들어 놓은 기능 묶을 뜻 합니다.
- 다양한 패키지를 손쉽게 설치하고 사용할 수 있습니다.

## 패키지 관리
### 모듈이란
노드에서는 프로그램을 기능별로 쪼갠 후 필요할 때마다 가져와서 사용하는데 이때 작은 단위로 쪼갠 것을 모듈이라고 합니다.
### 패키지란
자주 사용하는 기능 모듈들을 묶어 놓은 것입니다.
### 배포란
다른 사람이 모듈을 내려받을 수 있도록 공개하는 것을 배포라 합니다.
### 라이브러리란
모듈보다 큰 단위입니다. 특정 기능을 수행할 수 있도록 모듈을 여러 개 묶어서 하나의 라이브러리로 만듭니다.

## 패키지 매니저 npm(node package management)
패키지 매니저는 애플리케이션을 개발할 때 다양한 패키지를 관리할 수 있게 해주는 편리한 도구 입니다. 패키지 매니저를 사용하면 개발할 때 어떤 모듈을 사용했고 그 모듈의 버전은 무엇이었는지 등을 저장해줍니다. npm은 노드 설치시 자동 설치됩니다.

- 라이브러리, 프레임워크, 플러그인 등을 다운 받을 수 있게 해줍니다.

### npm 초기화 명령어 : npm init

# 모듈
## ES 모듈
### ES 모듈을 사용하는 첫 번째 방법
1. package.json 파일에 모듈을 추가하기
```json
"type" : "module"
```
2. 파일 확장자를 .mjs로 지정하기

### ES 모듈 시스템에서 모듈 내보내는 방법
1. 하나씩 내보내기 - export 대상
```js
export const bye = (name) => {
    console.log(`${name}아 잘가`)
}
```
2. 기본으로 내보내기 - export default 대상
```js
const bye = (name) => {
    console.log(`${name}아 잘가`)
}
export default bye
```
3. 여러개 내보내기 - export {대상1, 대상2, ...}
```js
const hi = (name) => {
    console.log(`${name}아 안녕`)
}
const bye = (name) => {
    console.log(`${name}아 잘가`)
}
export {h1, bye}
```

### ES 모듈 시스템에서 모듈 가져오기
```js
import user from "./user.js"
import {bye} from "./hello.js"
```

## Common JS
require함수를 통해 모듈을 사용하는 방식입니다.
### user.js
```js
const user = "Jun"
module.exports = user1
```

### hello.js
```js
const hello = (name) => {
    console.log(`${name}님 안녕하세요`)
}
module.exports = hello

// 혹은
// exports.hello = (name) => {
//     console.log(`${name}님 안녕하세요`)
// }
```
### app.js
```js
const user = require("./user")
const hello = require("./hello")

hello(user)
```
```
module.exports : 변수 혹은 함수 내보내기

require: 모듈가져오기
```

### 둘 이상의 변수 내보내고 가져오는 법
```js
const user1 = "Jun"
const user2 = "Lim"
const user3 = "Kim"
// module.exports = user1
module.exports = {user1,user2,user3}
```

```js
const {user1, user2, user3} = require("./user")
const hello = require("./hello")

hello(user1)
hello(user2)
hello(user3)
```

### 둘 이상의 변수 객체로 받는 법
```js
const users = require("./user")
const hello = require("./hello")

hello(users.user1)
hello(users.user2)
hello(users.user3)
```

## 노드의 코어 모듈이란
백엔드 개발에 필요한 모듈이 이미 내장되어 있는데 이것들을 코어 모듈이라고 합니다.

기능 | 모듈명 | 설명
-- | -- | --
파일시스템 | fs | 파일이나 폴더에 접근할 수 있는 기능을 제공
HTTP | http | HTTP 서버를 만들고 요청을 처리하는 기능을 제공
경로 | path | 파일 경로와 관련된 작업을 하는 기능을 제공
스트림 | streams | 데이터 스트림을 처리하는 기능을 제공
암호화 | crypto | 암호화와 관련된 기능을 제공
운영체제 | os | 운영체제와 상호작용하는 기능을 제공
유틸리티 | util | 다양한 유틸리티 함수를 제공
이벤트 | events | 이벤트 기반 프로그래밍을 지원하는 기능을 제공

# 파일 관리하기
## path
path모듈을 사용하는 이유는 운영체제 간에 경로를 구분하는 구분자가 다르기 때문입니다.
```js
const path = require("path") // path모듈 가져오기
const fullPath = path.join("some", "work", "ex.txt")
// join 함수를 사용해서 여러 조각을 나눠서 입력한 경로를 하나로 연결
console.log(fullPath)
```
### 경로만 추출하는 함수 dirname(경로)
```js
console.log(`파일 절대 경로 : ${__filename}`)
const dir = path.dirname(__filename)
console.log(`파일 상대 경로 : ${dir}`)
```

### 파일 이름 추출하는 함수 basename(경로)
```js
const fn = path.basename(__filename)
const fn2 = path.basename(__filename, '.js') // 파일확장자를 제외한 이름만 추출
console.log(fn)
console.log(fn2)
```

### 확장자 추출하는 함수 extname(경로)
```js
const ext = path.extname(__filename)
console.log(`파일의 확장자 : ${ext}`)
console.log(path.basename(__filename,ext))
```

### 경로를 객체로 반환하는 함수 parse(경로)
```js
const parsedPath = path.parse(__filename)
console.log(parsedPath)
```

## FS모듈
파일과 디렉터리 살펴보기, 새로운 파일과 디렉터리 만들기, 파일 스트리밍 등 파일이나 디렉터리를 사용하면서 필요한 여러 기능을 제공합니다.

```
FS 모듈에는 promise에서 사용하는 함수, 콜백에서 사용하는 함수, 동기 처리를 할 때 사용하는 함수 이렇게 3가지가 있습니다.

이 중에서 promise와 콜백이 비동기에 해당됩니다.
```

### FS모듈 가져오기
```js
const fs = require("fs")
// fs.함수명
```

### 동기처리로 디렉터리 읽는 readdirSync(경로[, 옵션])
```js
const fs = require("fs")
let files = fs.readdirSync("./")
console.log(files)
```
### 비동기 처리로 디렉터리 읽는 readdir(경로[, 옵션], 콜백)
```js
const fs = require("fs") // fs모듈 가져오기
fs.readdir("./", (err, files) => {
    if(err) {
        console.log(err)
    }
    console.log(files)
})
```
## 파일 관리
### 동기처리로 파일 읽는 readFileSync(경로[, 옵션])
```js
const fs = require("fs")
const data = fs.readFileSync("./03/example.txt")
const data2 = fs.readFileSync("./03/example.txt", "utf8") // 인코딩 지정
console.log(data)
console.log(data2)
```

### 비동기 처리로 파일 읽는 readFile(파일[, 옵션], 콜백)
```js
const fs = require("fs")
fs.readFile("./03/example.txt", "utf8", (err, data) => {
    if(err) console.log(err)
    console.log(data)
})
```

### 동기처리로 파일에 쓰는 writeFileSync(파일, 내용[, 옵션])
#### 파일 존재여부 체크하는 existsSync(파일)
```js
const fs = require("fs")
const data3 = fs.readFileSync("./03/example.txt", "utf8")
if(fs.existsSync("./03/test.txt")) { // existsSync: 파일 존재여부 체크
    console.log("file already exist")
}
else {
    fs.writeFileSync("./03/test.txt", data3)
    console.log("test.txt : " + fs.readFileSync("./03/test.txt", "utf8"))
}
```
### 비동기 처리로 파일에 쓰는 writeFile(파일, 내용[, 옵션], 콜백)
```js
const fs = require("fs")
fs.readFile("./03/example.txt", "utf8", (err, data) => {
    if(err) console.log(err)
    fs.writeFile("./03/test2.txt", data, (err) => {
        if(err) console.log(err)
        console.log("text2.txt is saved")
    })
})
```

### 기존 파일에 내용추가 하는 appendFile(파일, 내용,[, 옵션], 콜백)
```js
const fs = require("fs")
fs.appendFile("./03/test.txt", "\n\n새로운 내용 추가\n\n", (err) => {
    if(err) console.log(err)
    console.log("appending to file")
})
```

### 파일 삭제하는 unlink(파일, 콜백)
```js
const fs = require("fs")
if(!fs.existsSync("./03/text.txt")) console.log("파일이 없습니다.")
else fs.unlink("./03/text.txt", () => console.log("파일을 삭제했습니다."))
```

## 디렉터리 관리하기
### 디렉터리 만드는 mkdir(경로[, 옵션], 콜백)
```js
const fs = require("fs")
if(fs.existsSync("./test")) {
    // test 디렉터리가 있다면
    console.log("해당 디렉터리는 존재합니다.")
} else {
    fs.mkdir("./test", (err) => {
        if(err) console.log(err)
        console.log("해당 디렉터리를 만들었습니다.")
    })
}
```
#### 여러 계층의 디렉터리 만들기
```js
const fs12 = require("fs")
if(fs12.existsSync("./test2/test3/test4")) {
    // test 디렉터리가 있다면
    console.log("해당 디렉터리는 존재합니다.")
} else {
    fs12.mkdir("./test2/test3/test4", {recursive: true}, (err) => {
        if(err) console.log(err)
        console.log("해당 디렉터리를 만들었습니다.")
    })
}
```

### 빈 디렉터리 삭제하는 rmdir(경로[, 옵션], 콜백)
```js
const fs = require("fs")
if(!fs.existsSync("./test")) {
    // test 디렉터리가 없다면
    console.log("해당 디렉터리는 존재하지 않습니다.")
} else {
    fs.rmdir("./test", (err) => {
        if(err) console.log(err)
        console.log("해당 디렉터리를 삭제했습니다.")
    })
}
```

### 파일 삭제 및 내용이 있는 디렉터리 삭제하는 rm(경로[, 옵션], 콜백)
```js
const fs = require("fs")
if(!fs.existsSync("./test2")) {
    // test 디렉터리가 없다면
    console.log("해당 디렉터리는 존재하지 않습니다.")
} else {
    fs.rm("./test2", {recursive: true}, (err) => {
        if(err) console.log(err)
        console.log("해당 디렉터리를 삭제했습니다.")
    })
}
```

## 버퍼와 스트림
버퍼와 스트림은 파일을 읽거나 쓸 때 한 덩어리로 처리하지 않고 작은 단위로 나눠서 시간을 절약하는 방법입니다.

### 버퍼
임시 데이터를 저장하는 물리적인 메모리 공간입니다.

### 스트림
```
한 곳에서 다른 곳으로 데이터가 이동하는 것, 즉 데이터의 흐름입니다. 백엔드 프로그래밍에서 스트림은 서버에서 클라이언트로 혹은 클라이언트에서 서버로 데이터를 보낼 때 사용하는 방식입니다.

버퍼는 데이터를 메모리에 저장하고 직접 다룰 때 사용합니다.
스트림은 데이터를 효율적으로 읽고 쓸 때 사용하는 개념입니다.

스트림은 버퍼를 사용해서 데이터를 처리하거나 전달하게 됩니다.
```
#### 스트림의 장점
스트림을 사용하면 파일 전체를 내려받지 않고도 차례로 처리할 수 있어서 시간을 절약할 수 있고, 메모리 사용도 최소화할 수 있는 만큼 프로그램의 성능도 향상할 수 있습니다.

### 리더블 스트림 createReadStream(경로, 내용[, 옵션])
데이터를 읽기 위한 스트림으로 주로 서버에서 용량이 큰 데이터를 가져올 때 많이 사용합니다.
### 라이터블 스트림 createWriteStream(경로, 내용[, 옵션])
데이터를 기록하는 스트림입니다.

```js
const fs = require("fs")
const readStream2 = fs.createReadStream("./03/example.txt")
const writeStream = fs.createWriteStream("./03/write.txt")

readStream2.on("data", (chunk) => {
    console.log("new chunk received")
    writeStream.write(chunk)
})
```

### 2개의 스트림을 연결하는 pipe(writeStream[, 옵션])
```js
const fs15 = require("fs")
const readStream2 = fs15.createReadStream("./03/example.txt")
const writeStream = fs15.createWriteStream("./03/write.txt")

readStream2.pipe(writeStream)
```

# HTTP
## 요청 메서드
요청 메서드 | 설명
-- | --
GET | 서버에서 정보를 가져올 때 사용
POST | 서버에 데이터를 저장할 때 사용
PUT | 서버에 있는 데이터를 수정할 때 사용
DELETE | 서버에서 데이터를 삭제할 때 사용

## IP주소 (인터넷 프로토콜 주소)
### 소켓
클라이언트와 서버 사이에 데이터를 주고받는 중간 통로역할 합니다. IP주소와 포트를 통해 서로 식별합니다.
## 포트
네트워크를 통해 넘겨받은 자료를 정확히 어느 위치로 배달할 것인지 정해주는 역할을 합니다.

## HTTP 모듈로 서버 만들기
### 서버만드는 createServer([옵션][, 콜백])
```js
const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.method)

    // 응답헤더 만들기 res.setHeader(이름, 값), res.writeHead(상태코드[, 상태 메시지] [, 헤더])
    res.setHeader("Content-Type", "text/plain")
    // 응답 본문 작성하기 res.write(내용[, 인코딩][, 콜백])
    res.write("Hello NodeJS")
    // res.end(내용[, 인코딩][, 콜백])
    res.end()
})
```

### 서버 실행하는 listen(포트[, 호스트][, 콜백])
```js
// 서버 실행하기 - listen(포트[, 호스트][, 콜백])
server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행")
})
```

### HTML 페이지 서비스하기
```js
const http = require("http")
const fs = require("fs")
// html파일 연결
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    const readStream = fs.createReadStream(__dirname + "/index.html", "utf8")
    readStream.pipe(res)
})
```

## 라우팅
```js
const http = require("http")
const server = http.createServer((req, res) => {
    const {method, url} = req
    res.setHeader("Content-Type", "text/plain")

    if(method === "GET" && url === "/home") {
        res.statusCode = 200
        res.end("HOME")
    } else if(method === "GET" && url === "/about") {
        res.statusCode = 200
        res.end("ABOUT")
    } else {
        res.statusCode = 404
        res.end("Not Found")
    }
})
```
# 노드의 비동기 처리
## 동기처리란
```
자바스크립트는 기본적으로 코드에 작성한 순서대로 작업을 처리합니다.ㄴ
자바스크립트는 싱글 스레드 언어입니다.
스레드란 작업을 처리학 위해 자원을 사용하는 단위입니다.
하지만 자바를 비롯한 대부분의 백엔드 프로그래밍 언어는 멀티 스레드 입니다.
```
```js
console.log("first")
console.log("second")
console.log("third")
```

## 비동기 처리
```js
console.log("first")
setTimeout(() => {
    console.log("second")
}, 3000)
setTimeout(() => {
    console.log("second-2")
}, 0)
console.log("third")
```

## 논블로킹I/O
```
블로킹이란 코드 실행을 중간에 막는 것으로 코드 실행이 멈춘다는 뜻인데 동기함수를 사용하면 블로킹이 일어날 수 있습니다.

비동기 처리를 하면 코드를 실행하다가 시간이 걸리는 작업은 잠시 옆으로 빼놓고 즉시 실행해야 할 작업 먼저 처리합니다. 빼놓은 비동기 작업은 이벤트 루프에서 처리해줍니다. 이벤트 루프는 비동기를 처리하는 곳입니다.

백엔드 개발에서 네트워크와 관련된 작업을 할 때는 중간에 멈추는 일이 없도록 비동기 처리를 하는데 이것을 논블로킹I/O라고 합니다.
```

## 이벤트 루프
노드에서 비동기 처리를 하는 원리입니다.
### 이벤트 루프로 비동기 처리
V8엔진에서 비동기를 처리할 수 있는 libuv라이브러리를 가지고 있습니다.

libuv는 Node API와 콜백 큐라는 구서요소를 가지고 있습니다. 콜백 큐는 콜백함수가 큐 형태로 저장되는 공간입니다.

(큐는 선입선출 FIFO)

## 노드의 비동기 패턴
```js
const fs = require("fs")
// let files = fs.readdirSync("./05")
// console.log(files)
// 비동기
fs.readdir("./05", (err, files) => {
    if(err) console.log(err)
    console.log(files)
})

console.log("Code is done")
```
이렇게 하면 코드를 한눈에 살펴보기 어렵기 때문에 이것을 해결하기 위해 등장한 것이 `Promise`입니다.

## Promise
```js
const fs = require("fs").promises
fs.readdir("./05")
    .then(result => console.log(result))
    .catch(err => console.log(err))
```

## async / await
ES8부터 새로 등장한 비동기 처리방법입니다. `await를 붙일 수 있는 함수는 promise를 반환하는 메서드여야 합니다.`

```js
const fs = require("fs").promises
async function readDirAsync() {
    try {
        // 실행할 코드
        const files = await fs.readdir("./05")
        console.log(files)
    } catch (error) {
        // 예외 발생 시 실행할 코드
        console.error(error)
    }
}
readDirAsync()
```

# 익스프레스
## 익스프레스 시작
### 익스프레스 사용 이유
기능 | 설명
-- | --
라우팅 | HTTP 모듈을 사용할 때 사용했던 if문, switch문을 사용하는 것보다 더 쉽게 라우팅을 할 수 있습니다.
미들웨어 | 미들웨어라는 개념이 있어서 요청과 응답 사이에서 여러가지 기능을 실행할 수 있습니다.
템플릿 엔진 | 템플릿엔진을 통해 동적인 HTML페이지를 만들 수 있습니다.
정적인 파일 지원 | CSS 혹은 JS 파일, 이미지 파일 등 정적인 파일을 쉽게 서비스할 수 있습니다.

### 작업환경
```bash
npm init
```
package.json파일을 생성해줍니다.

```bash
npm install nodemon -g --save-dev
```
`노드몬`을 설치해주는데 `글로벌`하게 설치를 해주고 배포할 때는 포함되지 않도록 하기 위해 `--save-dev` 옵션을 넣어줍니다.

노드몬을 사용하면 수정사항을 바로바로 적용시켜 주기 때문에 서버를 재실행할 필요가 없습니다.
```js
const http = require("http") // http 모듈 가져오기
const server = http.createServer((req, res) => {
    // console.log("request received")
    console.log("요청발생")
})
server.listen(3000, () => { // 서버를 3000번 포트에서 실행
    // console.log("server start")
    console.log("서버시작")
})
```

### 익스프레스 서버 만들기
```js
const express = require("express") // express 패키지를 가져오기
const app = express() // express를 실행시켜 app이라는 서버를 만든다. app에서는 express의 모든 기능을 사용할 수 있다
const port = 3000 // port 번호는 3000

app.get("/", (req, res) => { // 루트경로에서 get 요청을 하면 그 뒤 오는 콜백함수를 실행하라는 의미
    res.status(200) // 응답 상태 코드를 200으로 설정
    res.send("Hello Node")
    // 응답객체 res의 send 함수를 사용하여 응답을 화면에 표시
    // 클라이언트로 보내는 res.send()
})
app.listen(port, () => {
    console.log(`${port}번 포트에서 실행 중`)
})
```

## 라우팅하기
```js
app.METHOD(path, handler)
```
- app: express로 만든 인스턴스
- METHOD: get, post, put, delete
- path: URL
- handler: 콜백함수

### HTTP 모듈
```js
if(method === "GET" && url === "/") {}
```

### 익스프레스
```js
app.get("/", (req, res) => {})
```

### 메서드 체이닝
```js
res.status(200) 
res.send("Hello Node") 

// => 메서드 체이닝
res.status(200).send("Hello Node")
```
여러 함수를 연결해서 사용하는 것을 메서드 체이닝이라고 합니다.

### 라우트 코드 작성
```js
// 모든 연락처 가져오기
app.get("/contacts", (req, res) => {
    res.status(200).send("Contacts Page")
})
// 연락처 생성
app.post("/contacts", (req, res) => {
    res.status(201).send("Create Contacts")
})
```

### 라우트 파라미터
요청 URL에 함께 담아서 요청하는 값을 라우트 파라미터라고 합니다.

라우팅 코드를 작성할 때 라우트 파라미터를 사용하려면 요청 URL 뒤에 ':'을 붙인 후 그 뒤에 변수를 작성합니다.
```
/요청URL/:변수
```

### 라우트 파라미터로 동적 URL 처리하기
```js
// 특정 연락처 가져오기
app.get("/contacts/:id", (req, res) => {
    res.status(200).send(`View Contact for ID: ${req.params.id}`)
})

// 특정 연락처 수정
app.put("/contacts/:id", (req, res) => {
    res.status(200).send(`Update Contact for ID: ${req.params.id}`)
})

// 특정 연락처 삭제
app.delete("/contacts/:id", (req, res) => {
    res.status(200).send(`Delete Contact for ID: ${req.params.id}`)
})
```

## 익스프레스의 요청 객체와 응답 객체
### 요청객체 주요 속성
속성 | 설명
-- | --
req.body | 서버로 POST 요청할 때 넘겨준 정보를 담고 있습니다.
req.cookies | 클라이언트에 저장된 쿠키 정보를 서버로 함께 넘겼을 경우 쿠키 정보를 담고 있습니다.
req.headers | 서버로 요청을 보낼 때 같이 보낸 헤더 정보를 담고 있습니다.
req.params | URL 뒤에 라우트 파라미터가 포함되어 있을 경우 파라미터 정보를 담고 있습니다.
req.query | 요청 URL 뒤에 포함된 질의 매개변수를 담고 있습니다.

### 응답객체에서 사용하는 함수
**클라이언트로 보내는 함수 res.send()**

**JSON 형식으로 변환하는 함수 res.json()**
```js
app.get("/", (req, res) => {
    res.status(200) 
    // res.send("Hello Node")

    // JSON형식으로 변환하는 res.json()
    res.json({message: "Hello Node"})
})
```

**파일을 클라이언트로 보내는 함수 res.sendFile()**
```js
const path = require("path") // 추가

app.get("/contacts", (req, res) => {
    // res.status(200).send("Contacts Page")
    res.sendFile(__dirname + "/assets/contacts.html")
})
```

**상태코드 설정하는 함수 res.status()**
- 상태코드를 지정하지 않으면 기본적으로 200으로 설정됩니다.