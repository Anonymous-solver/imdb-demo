import _ from 'lodash';
const Pagination = ({totalItems, pageCount, activePage, onClickPage }) => {
    const totalPages = Math.ceil(totalItems/pageCount);
    const pages = _.range(1, totalPages+1, 1);

    if(totalItems <= pageCount) return null;

    return ( 
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <button style={{border: '1px solid white'}} onClick={() => activePage-1 >= 1 ? onClickPage(activePage -1): null} className="page-item">
              <a className="page-link">
                Previous
              </a>
            </button>
            {
                pages.map(page => {
                    return(
                        <>
                            <li onClick={() => onClickPage(page)} className= {page === activePage ? 'page-item active' : 'page-item'}>
                                <a className="page-link">
                                {page}
                                </a>
                            </li>
                        </>
                    )
                })
            }
            <button style={{border: '1px solid white'}} onClick={() => activePage+1 <= totalPages ?  onClickPage(activePage +1): null} className="page-item">
              <a className="page-link">
                Next
              </a>
            </button>
          </ul>
        </nav>
     );
}
 
export default Pagination;