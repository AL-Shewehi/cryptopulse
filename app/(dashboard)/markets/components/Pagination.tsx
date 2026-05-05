import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  visiblePages: (number | string)[];
  handlePageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  visiblePages,
  handlePageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      <button
        className={`px-3 py-1 rounded text-xs font-medium ${
          currentPage === 1 ? "text-muted-foreground/70" : "text-white"
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        data-cursor={currentPage === 1 ? "disabled" : "hover"}
      >
        <ChevronLeft size={16} />
      </button>

      {visiblePages.map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-2 text-muted-foreground">
            ...
          </span>
        ) : (
          <button
            key={page}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              page === currentPage
                ? "bg-primary text-black"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
            onClick={() => handlePageChange(page as number)}
          >
            {page}
          </button>
        )
      )}

      <button
        className={`px-3 py-1 rounded text-xs font-medium ${
          currentPage === totalPages ? "text-muted-foreground/70" : "text-white"
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        data-cursor={currentPage === totalPages ? "disabled" : "hover"}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}