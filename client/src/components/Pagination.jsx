import { useDispatch } from "react-redux";
import { setCurrentPage } from "../Redux/actions";
import styles from "./styles/Pagination.module.css";

const Pagination = ({ currentPage, totalPages }) => {
  const dispatch = useDispatch();
 // const { currentPage, totalPages } = useSelector((state) => state);



  const startHandler = () => {
    dispatch(setCurrentPage(1));
  };

  const previousHandler = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const goToHandler = (page) => {
    if (page !== "...") {
      dispatch(setCurrentPage(page));
    }
  };

  const nextHandler = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const endHandler = () => {
    dispatch(setCurrentPage(totalPages));
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Agrega puntos suspensivos si hay más páginas disponibles
    if (endPage < totalPages) {
      pageNumbers.push("...");
    }
 
    return pageNumbers;
  };
  const isMobile = window.innerWidth <= 768; // Define el umbral para dispositivos móviles

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.paginationButton}
        onClick={startHandler}
        disabled={currentPage <= 1}>
        <span>First</span>
      </button>

      <button
        className={styles.paginationButton}
        onClick={previousHandler}
        disabled={currentPage <= 1}>
        <span>Previous</span>
      </button>

       {isMobile ? (
        <button
          key={currentPage}
          className={`paginationButton ${currentPage === currentPage ? "active" : ""}`}
          onClick={() => goToHandler(currentPage)}>
          {currentPage}
        </button>
      ) : (
        generatePageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            className={`paginationButton ${currentPage === pageNumber ? "active" : ""}`}
            onClick={() => {
              if (pageNumber !== "...") {
                goToHandler(pageNumber);
              }
            }}>
            {pageNumber}
          </button>
        ))
      )}

      <button
        className={styles.paginationButton}
        onClick={nextHandler}
        disabled={currentPage === totalPages}>
        <span>Next</span>
      </button>

      <button
        className={styles.paginationButton}
        onClick={endHandler}
        disabled={currentPage === totalPages}>
        <span>Last</span>
      </button>
    </div>
  );
};

export default Pagination;
