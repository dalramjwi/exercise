const component = () => {
  let obj = {
    name: "DSF",
    age: 23,
    job: "ㅇㄹ",
  };
  let innerFunc = () => {
    if (obj.age > 20) {
      return " beer";
    } else {
      return "drink";
    }
  };
  let anotherFunc = () => {
    if (obj.job === "ㅇㄹ") {
      return `your job is ${obj.job}!!`;
    } else {
      return `your job is ${obj.job}`;
    }
  };
  return `<h1>${obj.name}</h1>
  <h2>${innerFunc()}</h2>
  <h2>${anotherFunc()}</h2>
  `;
};
