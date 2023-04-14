import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { type } from "../../redux/searchSlice";

export const AppBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(type({search}));
  }, [search]);

  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Home</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
};
