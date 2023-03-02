import Image from 'next/image'
import { Inter } from 'next/font/google'
import Whatsapp from '@/public/icons/whatsapp.svg'
import Orbit from '@/public/icons/orbit.svg'
import Money from '@/pubic/icons/'

import styles from '@/styles/home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.info_item}>
          <h1 className='text-center text-3xl'>Fácil acceso</h1>
          <div className={styles.rifa_example}>
            tabla de ejmplo
          </div>
        </div>
        <div className={styles.info_item}>
          <h1 className='text-center text-3xl'>Información detallada</h1>
          <div className={styles.rifa_example}>
            tabla de ejmplo
          </div>
        </div>
      </div>
      <div className={styles.options}>
        <h1 className='text-center text-3xl'>Distintas opciones</h1>
        <div className={styles.options_list}>
          <div className={styles.orbit}>
            <Image src={Orbit} width={70} />
          </div>
          <div className={styles.whatsapp}>
            <Image src={Whatsapp} width={70} />
          </div>
          <div className={styles.whatsapp}>
            <Image src={Whatsapp} width={70} />
          </div>
        </div>
      </div>
    </div>
  )
  //(
  //   <main className={styles.main}>
  //     <div className={styles.description}>
  //       <p>
  //         Get started by editing&nbsp;
  //         <code className={styles.code}>app/page.js</code>
  //       </p>
  //       <div>
  //         <a
  //           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           By{' '}
  //           <Image
  //             src="/vercel.svg"
  //             alt="Vercel Logo"
  //             className={styles.vercelLogo}
  //             width={100}
  //             height={24}
  //             priority
  //           />
  //         </a>
  //       </div>
  //     </div>

  //     <div className={styles.center}>
  //       <Image
  //         className={styles.logo}
  //         src="/next.svg"
  //         alt="Next.js Logo"
  //         width={180}
  //         height={37}
  //         priority
  //       />
  //       <div className={styles.thirteen}>
  //         <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
  //       </div>
  //     </div>

  //     <div className={styles.grid}>
  //       <a
  //         href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className={inter.className}>
  //           Docs <span>-&gt;</span>
  //         </h2>
  //         <p className={inter.className}>
  //           Find in-depth information about Next.js features and API.
  //         </p>
  //       </a>

  //       <a
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className={inter.className}>
  //           Templates <span>-&gt;</span>
  //         </h2>
  //         <p className={inter.className}>Explore the Next.js 13 playground.</p>
  //       </a>

  //       <a
  //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className={inter.className}>
  //           Deploy <span>-&gt;</span>
  //         </h2>
  //         <p className={inter.className}>
  //           Instantly deploy your Next.js site to a shareable URL with Vercel.
  //         </p>
  //       </a>
  //     </div>
  //   </main>
  // )
}
