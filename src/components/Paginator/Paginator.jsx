import { useDispatch, useSelector } from "react-redux";
import { type } from "../../redux/searchSlice";
import { useEffect } from "react";

export const Paginator = () => {
  const {prev = 1, next = 1, pages = []} = useSelector((state) => state.paginator);
  let paginator = [];
  const searchDispatch = useDispatch();
  const cb = (page) => {
    searchDispatch(type({page}))
  };
  useEffect(() => {
    paginator = pages;
  }, [pages]);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={() => cb(prev)}>
            Previous
          </a>
        </li>
        {
            paginator.map(page => {
                return <li key={page} className="page-item">
                <a className="page-link" onClick={() => cb(page)}>
                  {page}
                </a>
              </li>;
            })
        }
        <li className="page-item">
          <a className="page-link" onClick={() => cb(next)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
