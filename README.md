1. Code Runner 설치 / 중간중간 코드 실행하기 위해 터미널을 켜야하는 불편함을 감소

### ajax 실습 웹사이트
-https://jsonplaceholder.typicode.com/





### ajax 실습시 JSON Server 설치(가상 Rest Api)

- vscode 상단부 -> 터미널 -> 새 터미널

```shell script
$ mkdir json-virtual-server
$ cd json-virtual-server
$ npm init -y
$ npm install json-server -D
```

- package.json에 추가
```json
"scripts": {
    "start": "json-server --watch db.json --port 5000"    
  },
```
- json-server-exam폴더로 가서
- `$ npm start`로 서버실행

—