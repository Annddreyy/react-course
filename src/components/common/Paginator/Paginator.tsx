import classes from './Paginator.module.css';
import React, { useState } from 'react';

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    portionSize: number,
    setCurrentPage: (page: number) => void
}

const Paginator = ({ totalItemsCount, pageSize, currentPage, setCurrentPage, portionSize = 11 }: PropsType) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / pageSize));
    let leftPorionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const setNextPages = () => {
        setPortionNumber(portionNumber + 1);
    };

    const setPreviosPages = () => {
        setPortionNumber(portionNumber - 1);
    };

    return (
        <div className={ classes.pagination }>
            { portionNumber > 1 && <button onClick={ setPreviosPages }>&lt;</button> }
            { pages
                .filter(page => page >= leftPorionPageNumber && page <= rightPortionPageNumber)
                .map( page => 
                <span
                    className={ currentPage === page ? classes.selected : "" } 
                    onClick={() => setCurrentPage(page)}
                    key={ page }
                >
                {page}
                </span>
            ) }
            { portionCount > portionNumber && <button onClick={ setNextPages }>&gt;</button> }
        </div>
    )
}

export default Paginator;