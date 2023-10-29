import ErrorContainer from "@/components/ui/error-container";

export default function Error({
    searchParams
}: {
    searchParams: {
        error: string
        errorStatus: string
    }
}){
    return (
        <>
            <div className="w-100 justify-center items-center flex">
                <ErrorContainer error={searchParams.error}></ErrorContainer>
        
            </div>
        </>
    )
}