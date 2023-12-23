import React from "react";

import Button from "@/components/ui/button";
import {AiOutlineMenu} from "react-icons/ai";

interface DropdownMenuButtonProps {
    onClick: () => void;
}
const DropdownMenuButton: React.FC<DropdownMenuButtonProps> = ({onClick}) => {
    return (
        <Button onClick={onClick} className="flex p-0 w-min h-min bg-transparent md:hidden items-center justify-center text-black">
            <AiOutlineMenu size={35}/>
        </Button>

    )
}

export default DropdownMenuButton;