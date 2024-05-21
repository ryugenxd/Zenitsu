import React from "react"

export interface HorizontalShadowInterface {
    top?:string;
    left?:string;
}

export interface NavbarContextInterface {
    navbar?: boolean;
    setNavbar?: React.Dispatch<React.SetStateAction<boolean>>;
}