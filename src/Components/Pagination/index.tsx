import React from 'react';
import './style.css';

interface PaginationProps {
    totalLength: number,
    itemPerPage: number,
    paginationCss?: string,
    numberListPerSet?: number,
    selectedPage: (pageNumber: number) => void
}


const Pagination: React.FC<PaginationProps> = (props) => {

    // props
    const {
        totalLength = 0,
        itemPerPage = 0,
        paginationCss = '',
        numberListPerSet = 5,
        selectedPage
    } = props;

    // state
    const [totalPageNumber, setTotalPageNumber] = React.useState(0);
    const [totalPageSets, setTotalPageSets] = React.useState(0);
    const [currentPageNumber, setCurrentPageNumber] = React.useState(1);
    const [currentItem, setCurrentItem] = React.useState(1);
    const [numberPerPage, setNumberPerPage] = React.useState<number>(numberListPerSet || 5);


    React.useEffect(() => {
        let pageNumberLength = Math.floor(totalLength / itemPerPage);
        setTotalPageNumber(pageNumberLength);
        setTotalPageSets(Math.ceil(pageNumberLength / numberPerPage));
    }, [totalLength, itemPerPage, numberPerPage])


    React.useEffect(() => {
        setNumberPerPage(numberListPerSet);
    }, [numberListPerSet])


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
                <div key={i} className={`dev_pg_header_pagination_number ${currentItem === i ? 'active' : ''}`} onClick={() => handlePageNumberClick(i)}>{i}</div>
            )
        }
        return itemList;
    }, [currentPageNumber, totalPageNumber, currentItem, numberPerPage])

    return (
        <React.Fragment>
            <div className={`${paginationCss} dev_pg_header_pagination_container`}>
                <div className={`dev_pg_header_pagination_icon ${currentPageNumber === 1 ? 'disabled' : ''}`} onClick={() => previousPageSet()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-chevron-double-left icon`} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </div>
                <div className={`dev_pg_header_pagination_icon ${currentItem === 1 ? 'disabled' : ''}`} onClick={() => previousPage()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-chevron-left icon`} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </div>
                {pageItem ? pageItem : ''}
                <div className={`dev_pg_header_pagination_icon ${currentItem === totalPageNumber ? 'disabled' : ''}`} onClick={() => nextPage()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-chevron-right icon`} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
                <div className={`dev_pg_header_pagination_icon ${currentPageNumber === totalPageSets ? 'disabled' : ''}`} onClick={() => nextPageSet()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-chevron-double-right icon`} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </div>
        </React.Fragment>
    )

}


export default Pagination;
