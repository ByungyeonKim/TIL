function Pagination({ currentPage, pagePerItems, totalPage }) {
  this.state = {
    currentPage: currentPage || 1,
    pagePerItems: pagePerItems || 0,
    totalPage: totalPage || 20,
  };

  this.setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.render();
  };

  this.render = () => {
    const app = document.querySelector('#app');
    app.innerHTML = `
      <span><i class="fas fa-chevron-left"></i></span>
      ${Pages(this.state)}
      <span><i class="fas fa-chevron-right"></i></span>
    `;
  };
}

const Pages = ({ totalPage, currentPage }) => {
  const pages = [];
  let index = 1;

  while (totalPage >= index) {
    pages.push(`<span>${index}</span>`);
    index++;
  }

  if (totalPage > currentPage) {
    pages[currentPage - 1] = `<span class="show">${currentPage}</span>`;
  } else {
    pages[pages.length - 1] = `<span class="show">${pages.length}</span>`;
  }

  return pages.join('');
};

const pagination = new Pagination({
  currentPage: 12,
  pagePerItems: 0,
});

const pagination2 = new Pagination({
  currentPage: 9,
  pagePerItems: 77,
  totalPage: 20,
});

pagination.render();

pagination.setState({
  totalPage: 12,
});
