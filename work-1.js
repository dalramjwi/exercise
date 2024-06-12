// const basicData = function () {
//   return { name: "sad", age: 0, job: "sad" };
// };
//! 생성자 함수 setter로 규격 만들기
//! 생성자 함수로 객체 생성
//! 생성자 함수 출처 검사 -> instance of
//! true -> 문자열 html 리턴

const { text } = require("express");

//! false -> throw new Error()
class BasicData {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  set name(value) {
    if (typeof value === "string") {
      this._name = value;
    } else {
      console.log("문자열 아님");
    }
  }
  get name() {
    return this._name;
  }
  set age(value) {
    if (typeof value === "number") {
      this._age = value;
    } else {
      console.log("숫자 아님");
    }
  }
  get age() {
    return this._age;
  }
  set job(value) {
    if (typeof value === "string") {
      this._job = value;
    } else {
      console.log("문자열 아님");
    }
  }
  get job() {
    return this._job;
  }
}

const component = (text) => {
  let obj = new BasicData("ㅇㅇ", 12, "ㅁㄴㅇ");
  // console.log(obj);
  // console.log(obj instanceof BasicData);
  const decision = (text) => {
    if (obj instanceof BasicData === true) {
      return `<html>      <body>
      <h1>${text}</h1>
      <h1>이름: ${obj.name}</h1>
      <h2>나이: ${obj.age}</h2>
      <h3>직업: ${obj.job}</h3>
      </body></html>`;
    } else {
      throw new Error("에러");
    }
  };
  return decision(text);
};
console.log(component("안녕"));
