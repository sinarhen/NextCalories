'use client';
import React from "react";

interface ErrorContainerProps{
    error: string;
    status?: string;

}

const ErrorContainer: React.FC<ErrorContainerProps> = ({error, status}) => {
    return (
        <div className="w-1/3 flex items-center justify-center m-8 px-5 py-7 bg-neutral-300 rounded-md">
            <h1 className="font-extrabold text-6xl">{error}{status}</h1>
        </div>
    )
}

export default ErrorContainer