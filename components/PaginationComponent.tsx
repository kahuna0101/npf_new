"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  return (
    <Pagination className="mt-10">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`?page=${currentPage - 1}`} />
          </PaginationItem>
        )}

        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={`?page=${page}`}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={`?page=${currentPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}