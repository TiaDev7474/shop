import React from "react";

type IconBtnType = {
    icon: React.ReactNode,
    onClick: () => void,
    [key: string]: any;
}
export default function IconBtn(props: IconBtnType) {
    const {icon, onClick , ...otherProps} = props
    return(
        <button onClick={onClick} {...otherProps} >
            { icon }
        </button>
    )
}
