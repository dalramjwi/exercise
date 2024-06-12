let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();

const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
};

const container = () => {
  if (hours % 2 === 0) {
    if (minutes % 2 === 0) {
      return `
      ${tagComponent("header", "헤더부분")}
      ${tagComponent("main", "분도 짝수입니다.")}
      ${tagComponent("footer", "푸터부분")}
    `;
    }
    return `
    ${tagComponent("header", "헤더부분")}
    ${tagComponent("main", "시간이 짝수입니다.")}
    ${tagComponent("footer", "푸터부분")}
  `;
  } else if (hours % 2 !== 0) {
    if (minutes % 2 !== 0) {
      return `
      ${tagComponent("header", "헤더부분")}
      ${tagComponent("main", "분도 홀수입니다.")}
      ${tagComponent("footer", "푸터부분")}
    `;
    }
    return `
    ${tagComponent("header", "헤더부분")}
    ${tagComponent("main", "시간이 홀수입니다")}
    ${tagComponent("footer", "푸터부분")}
  `;
  }
};
/**
 * 1. 날짜를 구해서
 * 2. 함수에 적용
 *  12일이면 A 방식
 * 12이 아니라면 B 방식
 */

console.log(container());
