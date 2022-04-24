import React from 'react';
import './style.css';

interface PaginationProps {
    totalLength: number,
    itemPerPage: number,
    selectedPage: (pageNumber: number) => void
}

interface PaginationState {
    totalPageNumber: number,
    totalPageSets: number,
    currentPageNumber: number,
    currentItem: number,
    numberPerPage: number
}


const Pagination: React.FC<PaginationProps> = (props) => {

    // props
    const {
        totalLength = 0,
        itemPerPage = 0,
        selectedPage
    } = props;

    // state
    const [totalPageNumber, setTotalPageNumber] = React.useState(0);
    const [totalPageSets, setTotalPageSets] = React.useState(0);
    const [currentPageNumber, setCurrentPageNumber] = React.useState(1);
    const [currentItem, setCurrentItem] = React.useState(1);
    const [numberPerPage] = React.useState(10);


    React.useEffect(() => {
        let pageNumberLength = Math.floor(totalLength / itemPerPage);
        setTotalPageNumber(pageNumberLength);
        setTotalPageSets(Math.ceil(pageNumberLength / numberPerPage));
    }, [totalLength, itemPerPage, numberPerPage])


    const handlePageNumberClick = (pageNumber: number) => {
        selectedPage(pageNumber);
        setCurrentItem(pageNumber);
    }

    const nextPage = () => {
        let nextPageSet = (currentPageNumber) * numberPerPage + 1;
        if (currentItem + 1 === nextPageSet) {
            setCurrentPageNumber(currentPageNumber + 1);
        }
        selectedPage(currentItem + 1);
        setCurrentItem(currentItem + 1);
    }

    const previousPage = () => {
        let previousPageSet = (currentPageNumber - 1) * numberPerPage;
        if (currentItem - 1 === previousPageSet) {
            setCurrentPageNumber(currentPageNumber - 1);
        }
        selectedPage(currentItem - 1);
        setCurrentItem(currentItem - 1);
    }

    const nextPageSet = () => {
        let pageNumber = (currentPageNumber) * numberPerPage + 1;
        setCurrentItem(pageNumber);
        selectedPage(pageNumber);
        setCurrentPageNumber(currentPageNumber + 1);
    }

    const previousPageSet = () => {
        let previousPageSet = (currentPageNumber - 1) * numberPerPage;
        setCurrentItem(previousPageSet);
        selectedPage(previousPageSet);
        setCurrentPageNumber(currentPageNumber - 1);
    }

    const pageItem = React.useMemo(() => {
        let itemList = [];
        let startIndex = (currentPageNumber - 1) * numberPerPage + 1;
        let endIndex = ((currentPageNumber - 1) * numberPerPage) + numberPerPage;
        for (let i = startIndex; i <= endIndex; i++) {
            if (i > totalPageNumber) continue;
            itemList.push(
                <div key={i} className={`data_table_header_pagination_number ${currentItem === i ? 'active' : ''}`} onClick={() => handlePageNumberClick(i)}>{i}</div>
            )
        }
        return itemList;
    }, [currentPageNumber, totalPageNumber, currentItem, numberPerPage])

    return (
        <React.Fragment>
            <div className='data_table_header_pagination_container'>
                <div className={`data_table_header_pagination_icon ${currentPageNumber === 1 ? 'disabled' : ''}`} onClick={() => previousPageSet()}>
                    <i className="bi bi-chevron-double-left icon"></i>
                </div>
                <div className={`data_table_header_pagination_icon ${currentItem === 1 ? 'disabled' : ''}`} onClick={() => previousPage()}>
                    <i className="bi bi-chevron-left icon"></i>
                </div>
                {pageItem ? pageItem : ''}
                <div className={`data_table_header_pagination_icon ${currentItem === totalPageNumber ? 'disabled' : ''}`} onClick={() => nextPage()}>
                    <i className="bi bi-chevron-right icon"></i>
                </div>
                <div className={`data_table_header_pagination_icon ${currentPageNumber === totalPageSets ? 'disabled' : ''}`} onClick={() => nextPageSet()}>
                    <i className="bi bi-chevron-double-right icon"></i>
                </div>
            </div>
        </React.Fragment>
    )

}


export default Pagination;
