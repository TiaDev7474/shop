import Logo from "@/app/components/logo";
import ButtonsWrapper from "@/app/(home)/components/buttons_wrapper";



export default function Navbar() {
    return(
        <nav className="fixed inset-0 w-full h-[10vh] shadow-sm ">
            <div className="px-36 py-5  w-full flex justify-between ">
                <Logo />
                <ButtonsWrapper />
            </div>
        </nav>
    )
}


