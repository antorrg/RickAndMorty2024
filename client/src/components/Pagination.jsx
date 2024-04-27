import { useDispatch, useSelector } from "react-redux";
import GenericButton from "./GenericButton/GenericButton";
import { setCurrentPage } from "../Redux/actions";
import styles from "./styles/Pagination.module.css";

const Pagination = ({ page, setPage, finalPage}) => {
  const dispatch = useDispatch();
 const currentPage = useSelector((state)=>state.currentPage);
 const actualPage = currentPage? currentPage : 1

 


  return ( 
    <div className={styles.pagination}>
    <GenericButton buttonText= 'First' onClick={() => setPage(Number(1))} disabled = {page === 1} />
    <GenericButton onClick= {()=>(setPage(Number(page-1)))} disabled = {page ===Number(1)} buttonText={'Prev'} />
    <span >Página {(Number(actualPage))} de {finalPage}</span>
    <GenericButton onClick= {()=>(setPage(Number(page+1)))} disabled = {page ===finalPage} buttonText={'Next'} />
    <GenericButton buttonText= 'Last' onClick={() => setPage(finalPage)} disabled = {page === finalPage} />
    </div>
  );
};

export default Pagination;
