import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
    children: React.ReactNode,
    href: string
}

const LinkMenu = ({ children, href }: Props) => {

    const router = useRouter()
    const { pathname } = router
    const selected = pathname === href
    console.log(pathname)

    // <a className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white"></a>
    return (
        // <Link href={href}> <a className={selected ? "flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white" : "flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"}>{children}</a> </Link>
        <a className={
            selected ?
            "flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800"
            :
            "flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
            } href={href}>
            <span className="text-left">
            <svg width={20} height={20} fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                </path>
            </svg>
            </span>
            <span className="mx-4 text-sm font-normal">
             {children}
            </span>
        </a>

        
    )
}

export default LinkMenu;