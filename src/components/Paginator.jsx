export const Paginator = ({info, cb}) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={() => cb(info.prev)}>
            Previous
          </a>
        </li>
        {
            info?.pages?.map(page => {
                return <li key={page} className="page-item">
                <a className="page-link" onClick={() => cb(page)}>
                  {page}
                </a>
              </li>;
            })
        }
        <li className="page-item">
          <a className="page-link" onClick={() => cb(info.next)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
