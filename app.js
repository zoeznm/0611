function formatHTML(language) {
  let htmlData = {
    titleOne: "공욱재",
    titleTwo:"kongukjae",
    h1:"내이름은",
    p:"공욱재입니다",
  }

  let decision = () => {
    if(language === "korean") {
      return htmlData.titleOne;
    }
    if(language === "english") {
      return htmlData.titleTwo;
    }
  }


  let html = `
  <html>
    <head>
      <title>${decision()}</title>
    </head>
    <body>
      <h1>${htmlData.h1}</h1>
      <p>${htmlData.p}</p>
    </body>
  </html>
  `;
  
  return html;
}

console.log(formatHTML("korean"));
console.log(formatHTML("english"));