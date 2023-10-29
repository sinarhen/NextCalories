'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";

const Logo = () => {
    const router = useRouter();
    return (
        <div onClick={() => router.push('/')} className="cursor-pointer w-full flex items-center gap-2">
            <img src="https://img.lovepik.com/free-png/20210924/lovepik-burger-png-image_401316034_wh1200.png" className="bg-transparent w-12" alt="Logo" />
            <h1 className="font-bold text-2xl text-green-600">Calories</h1>
        </div>
    );
}
 
export default Logo;