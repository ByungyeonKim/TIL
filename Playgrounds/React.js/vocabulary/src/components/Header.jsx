const Header = () => (
  <div className="flex gap-6 items-center">
    <h1 className="text-3xl">
      <a href="/" className=" font-bold text-slate-600">
        토익 영단어(고급)
      </a>
    </h1>
    <div className="flex gap-3">
      <a
        className="inline-block px-8 py-3 text-sm font-medium text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
        href="#x">
        단어 추가
      </a>
      <a
        className="inline-block px-8 py-3 text-sm font-medium text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
        href="#x">
        Day 추가
      </a>
    </div>
  </div>
);

export default Header;
