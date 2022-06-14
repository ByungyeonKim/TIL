const search = document.querySelector('#search');
const searchBtn = document.querySelector('.search-btn');

search.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    try {
      window.location.href =
        '/search/' + looseURIEncode(document.getElementsByName('search')[0].value);
      document.getElementsByName('search')[0].value = '';
      return false;
    } catch (e) {}
  }
});

searchBtn.addEventListener('click', () => {
  try {
    window.location.href =
      '/search/' + looseURIEncode(document.getElementsByName('search')[0].value);
    document.getElementsByName('search')[0].value = '';
    return false;
  } catch (e) {}
});
