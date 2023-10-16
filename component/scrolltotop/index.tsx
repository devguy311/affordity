import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ScrollToTop = () => {

    const { pathname } = useRouter();

    useEffect(() => {
        typeof window !== 'undefined' && window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <></>
    )
}

export default ScrollToTop