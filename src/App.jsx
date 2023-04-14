import "./App.css";
import "animate.css";

import { AppBar } from "./components/AppBar/AppBar";
import { Card } from "./components/Card/Card";
import { Paginator } from "./components/Paginator/Paginator";

import { get } from "./utils/http";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPaginator } from "./redux/paginatorSlice";

const API = import.meta.env.VITE_API;

const App = () => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

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
    dispatch(setPaginator({maxPages: res.info.pages, current: page}));
    // handlePages(res.info, page);
    setCharacters(res.results);
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
      <div className="row d-flex justify-content-center" key={idx}>
        {row.map((item) => (
          <Card className="col-xl-4 col-md-3 col-sm-2" key={item.id} info={item} />
        ))}
      </div>
    ));
    return content;
  };

  useEffect(() => {
    doSearch(search.search, search.page);
  }, [search.search, search.page]);

  useEffect(() => {
    doSearch();
  }, [init]);

  return (
    <>
      <div className="container">{render()}</div>
      <div className="d-flex justify-content-center">
        <Paginator info={pages}/>
      </div>
    </>
  );
};

export default App;
