const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get('https://hub.zum.com/singleliving/75576');
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then((html) => {
    const $ = cheerio.load(html.data);
    const data = [
      {
        title: $('div.article_header > div > div > h2').text(),
        mainContents: $('div.article.d_article').html(),
        mediaName: $('#btn_media').text(),
      },
    ];

    return data;
  })
  .then((res) => log(res));
