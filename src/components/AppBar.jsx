import { useState, useEffect } from "react";

export const AppBar = ({cbSearch}) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    cbSearch(search);
    if (search.length >= 3) {
    }
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
