import CardBook from '@/components/CardBook'
import CardPost from '@/components/CardPost'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Books() {
  return (
    <div>
      <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
        <div className="flex flex-col flex-wrap sm:flex-row ">
            <CardBook/>
            <CardBook/>
            <CardBook/>
            <CardBook/>
            <CardBook/>
        </div>
      </div>
    </div>
  )
}
