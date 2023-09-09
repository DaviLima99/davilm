import ThemeSwitch from '../ThemeSwitch';
import Link from 'next/link';
import React from 'react';
import LinkMenu from '../LinkMenu';
import { signIn, signOut } from 'next-auth/react';

interface Props {
    children: React.ReactNode
} 

    const LayoutCms = ({ children }: Props) => {

    return (
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
          <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
            <div className="flex items-center justify-center pt-6">
              <svg width={35} height={30} viewBox="0 0 256 366" version="1.1" preserveAspectRatio="xMidYMid">
                <defs>
                  <linearGradient x1="12.5189534%" y1="85.2128611%" x2="88.2282959%" y2="10.0225497%" id="linearGradient-1">
                    <stop stopColor="#FF0057" stopOpacity="0.16" offset="0%">
                    </stop>
                    <stop stopColor="#FF0057" offset="86.1354%">
                    </stop>
                  </linearGradient>
                </defs>
                <g>
                  <path d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z" fill="#001B38">
                  </path>
                  <circle fill="url(#linearGradient-1)" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
                  </circle>
                  <circle fill="url(#linearGradient-1)" opacity="0.5" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
                  </circle>
                </g>
              </svg>
            </div>
            <nav className="mt-6">
              <div>
                <LinkMenu href='/app/posts'>
                  Posts
                </LinkMenu>

                <LinkMenu href='/app/books'>
                  Livros
                </LinkMenu>

                <LinkMenu href='/app/reports'>
                  Relatórios
                </LinkMenu>
        
              </div>
            </nav>
          </div>
        </div>
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <header className="z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
              <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
                <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                  <div className="relative flex items-center w-full h-full lg:w-64 group">
                    <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                      <svg fill="none" className="relative w-5 h-5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                        </path>
                      </svg>
                    </div>
                    
                  </div>
                </div>
                <div className="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
                  <ThemeSwitch/>
                </div>
                <button onClick={() => signOut()}>Log out</button>
              </div>
            </div>
          </header>

          {children}
        </div>
      </div>
    </main>
    )
 }

 export default LayoutCms;