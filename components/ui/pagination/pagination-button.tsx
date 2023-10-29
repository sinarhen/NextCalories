'use client'
import React from "react";

const PaginationButton = ({selected, children, onClick}: {selected: boolean, children: React.ReactNode, onClick: () => void} ) => {
    return (
      <button onClick={onClick} className={`h-10 w-10 rounded-full ${selected ? "bg-blue-600" : "bg-gray-400"}`}>
        {children}
      </button>
    )
}
export default PaginationButton