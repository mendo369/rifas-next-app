import React from 'react'

import styles from '@/styles/sidebar.module.css'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/icons/logo.svg'
import Finances from '@/public/icons/finances.svg'
import Login from '@/public/icons/login.svg'
import Search from '@/public/icons/search.svg'


function SideBar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.item_sidebar}>
                <Link href={'/'}>
                    <Image src={Logo} width={50} />
                </Link>
            </div>
            <span className={styles.span}></span>
            <div className={styles.item_sidebar}>
                <Link href={'/search'}>
                    <Image src={Search} width={50} />
                </Link>
            </div>
            <div className={styles.item_sidebar}>
                <Link href={'/finances'}>
                    <Image src={Finances} width={50} />
                </Link>
            </div>
            <div className={styles.item_sidebar}>
                <Link href={'/auth'}>
                    <Image src={Login} width={50} />
                </Link>
            </div>
        </div>
        // <div className="flex">
        //     <div className='fixed w-20 h-screen p-4 bg-teal-200  flex flex-col justify-between'>
        //         <div className="flex flex-col items-center">
        //             <Link href={'/'}>
        //                 <div className='bg-blue-600 text-white p-3 rounded-lg inline-block scale-110'>
        //                     <Image src={Logo} />
        //                 </div>
        //             </Link>
        //             <span className='border-b-[2px] border-white w-full p-2'></span>
        //             <Link href={'/search'}>
        //                 <div className='bg-blue-400 hover:bg-blue-200 cursor-pointer my-4 p-3 rounded-lg inline-block hover:scale-110'>
        //                     <Image src={Search} />
        //                 </div>
        //             </Link>
        //             <Link href={'/customers'}>
        //                 <div className='bg-blue-400 hover:bg-blue-200 cursor-pointer my-4 p-3 rounded-lg inline-block hover:scale-110'>
        //                     <Image src={Finances} />
        //                 </div>
        //             </Link>
        //             <Link href={'/orders'}>
        //                 <div className='bg-blue-400 hover:bg-blue-200 cursor-pointer my-4 p-3 rounded-lg inline-block hover:scale-110'>
        //                     <Image src={Logo} />
        //                 </div>
        //             </Link>
        //             <Link href={'/auth/login'}>
        //                 <div className='bg-blue-400 hover:bg-blue-200 cursor-pointer my-4 p-3 rounded-lg inline-block hover:scale-110'>
        //                     <Image src={Login} />
        //                 </div>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
        // <div>
        //     <ul>
        //         <li className='bg-green-200'>
        //             <Link href={'/'}>
        //                 <Image src={Dashboard} />
        //             </Link>
        //         </li>
        //         {items.map(({ label, route }) => {
        //             return <li key={route}>
        //                 <Link href={route}>
        //                     {label}</Link>
        //             </li>
        //         })}
        //     </ul>
        // </div>
    )
}

export default SideBar