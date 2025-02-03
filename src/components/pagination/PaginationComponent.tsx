import {FC} from 'react';

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

const PaginationComponent: FC<PaginationProps> = ({currentPage, totalItems, itemsPerPage, onPageChange}) => {
    const totalPages = Math.ceil(totalItems/itemsPerPage);

    return (
        <div className="pagination">
            <button className="pagination-button"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 0}
            >
                Back
            </button>
            <button className="pagination-button"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages - 1}
            >
                Next
            </button>
        </div>
    );
};

export default PaginationComponent;


