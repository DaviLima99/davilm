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

    // <a className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white"></a>
    return (
        <Link href={href}> <a className={selected ? "flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white" : "flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"}>{children}</a> </Link>
        // <Link href={href}><a className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white"> { children } </a></Link>  
    )
}

export default LinkMenu;