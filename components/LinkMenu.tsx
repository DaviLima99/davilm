import { ChildProcess } from "child_process";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
    children: React.ReactNode,
    href: string
    text: string
}

const LinkMenu = ({ children, href, text }: Props) => {

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
                {children}

            </span>
            <span className="mx-4 text-sm font-normal">
             {text}
            </span>
        </a>

        
    )
}

export default LinkMenu;