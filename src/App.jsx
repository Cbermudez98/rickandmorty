import "./App.css";
import { AppBar } from "./components/AppBar";
import { Card } from "./components/Card";
import { Paginator } from "./components/Paginator";

import { get } from "./utils/http";

import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState({});
  const [character, setCharacter] = useState("");
  const [maxPage, setMaxPage] = useState(0);
  const init = true;
  const doSearch = async (data = "", page = 1) => {
    setCharacter(data);
    let url = `${API}/character/`;
    url += `?page=${page}`;
    if (data) {
      url += `&name=${character}`;
    }
    const res = await get(url);
    setMaxPage(res.info.pages);
    handlePages(res.info, page);
    setCharacters(res.results);
  };

  const getPages = (page, currentPage) => {
    const res = [];
    let index = 0;
    let limit = 4;
    if (page === currentPage) return pages.pages;
    currentPage--;
    while(index < limit) {
      index++;
      res.push(currentPage++);
    }
    res.push("...");
    return res;
  };

  const handlePages = (info, page) => {
    let pageObj = {
      next: page + 1,
      prev: page - 1,
      pages: getPages(info.pages, page)
    };
    setPages(pageObj);
  };

  const handleChangePage = (page) => {
    if (page <= 0 || page > maxPage) return;
    doSearch(character, page);
  };

  const render = () => {
    const rows = [...Array(Math.ceil(characters.length / 4))];
    const itemsRows = rows.map((row, idx) =>
      characters.slice(idx * 4, idx * 4 + 4)
    );
    const content = itemsRows.map((row, idx) => (
      <div className="row" key={idx}>
        {row.map((item) => (
          <Card className="col-4 col-md-4 col-sm-2" key={item.id} info={item} />
        ))}
      </div>
    ));
    return content;
  };

  useEffect(() => {
    doSearch();
  }, [init]);

  return (
    <>
      <AppBar cbSearch={doSearch} />
      <div className="container">{render()}</div>
      <div className="d-flex justify-content-center">
      <Paginator info={pages} cb={handleChangePage}/>
      </div>
    </>
  );
};

export default App;
