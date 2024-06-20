import HeaderNew from "./header_new";


export default function Layout({children}:any){

    return (
            <>
                <HeaderNew/>
                <main className={"scroll-pt-top-16"}>{children}</main>
            </>
        )
}
