let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
};
const htmlComponent = (text, change) => {
  return `
  ${tagComponent("header", "헤더부분")}
  ${tagComponent("main", `현재 ${text}(은)는 ${change}이다.`)}
  ${tagComponent("footer", "푸터부분")}
`;
};
const literal = {
  timeAndMinute: "시간과 분",
  minutesAndSecond: "분과 초",
  time: "시간",
  minute: "분",
  second: "초",
  even: "짝수",
  odd: "홀수",
};
const container = () => {
  if (hours % 2 === 0) {
    if (minutes % 2 === 0) {
      return htmlComponent(literal.timeAndMinute, literal.even);
    }
    return htmlComponent(literal.time, literal.even);
  } else if (hours % 2 !== 0) {
    if (minutes % 2 !== 0) {
      return htmlComponent(literal.timeAndMinute, literal.odd);
    }
    return htmlComponent(literal.time, literal.odd);
  }
};
/**
 * 1. 날짜를 구해서
 * 2. 함수에 적용
 *  12일이면 A 방식
 * 12이 아니라면 B 방식
 */

console.log(container());
