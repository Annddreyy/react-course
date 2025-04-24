import classes from './Paginator.module.css';

const Paginator = ({ pages, currentPage, setCurrentPage }) => {
    return (
        <div className={ classes.pagination }>
            { pages.map( page => 
                <span
                    className={ currentPage === page ? classes.selected : "" } 
                    onClick={() => setCurrentPage(page)}
                    key={ page }>
                    {page}
                </span>
            ) }
        </div>
    )
}

export default Paginator;