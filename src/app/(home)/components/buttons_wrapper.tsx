"use client"
import SearchIcon from "@/app/components/icons/search_icon";
import CartIcon from "@/app/components/icons/cart_icon";
import UserIcon from "@/app/components/icons/user_icon";
import IconBtn from "@/app/(home)/components/buttons/icon_btn";


export default function ButtonsWrapper() {
    return(
        <div className="text-gray-800 flex justify-center items-center gap-3">
            <IconBtn
                className="bg-gray-200 p-2 rounded-md hover:bg-opacity-50 duration-150 transition-all"
                icon={<SearchIcon />}
                onClick={() => {}}
            />
            <IconBtn
                className="bg-gray-200 p-2 rounded-md hover:bg-opacity-50 duration-150 transition-all "
                icon={<CartIcon />}
                onClick={() => {}}
            />
            <IconBtn
                className="bg-gray-200 p-2 rounded-md hover:bg-opacity-50 duration-150 transition-all"
                icon={<UserIcon/>}
                onClick={() => {}}
            />
        </div>
    )
}
