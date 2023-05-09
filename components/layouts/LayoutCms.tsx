import Link from 'next/link';
import React from 'react';
import Seo from '../Seo';

interface Props {
    children: React.ReactNode
} 

    const LayoutCms = ({ children }: Props) => {

    return (
        <>
            <Seo title="Social Media Belt" description=""/>
            <ul>
            <li><Link href="/"> <a> Home </a></Link> </li> 
            <li><Link href="/app"> <a> APP </a> </Link></li>
            <li><Link href="/dlima"> <a> Tenant </a> </Link></li>
            </ul>
           
        </>
    )
 }

 export default LayoutCms;