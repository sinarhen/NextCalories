import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <a className="cursor-pointer w-full flex items-center gap-2">
            <img src="https://img.lovepik.com/free-png/20210924/lovepik-burger-png-image_401316034_wh1200.png" className="bg-transparent w-12" alt="Logo" />
            <h1 className="font-bold text-2xl text-green-600">Calories</h1>
        </a>
    );
}
 
export default Logo;