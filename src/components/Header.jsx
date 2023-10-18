import React from 'react'


const Header = () => {
  return (
    <div>
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 border-b">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div className="flex items-center justify-between">
                <a className="flex-none" href="#">
                    <img className=" w-32 h-auto" src="/img/MosaBit.png" alt="Logo" />
                </a>
                <div className="sm:hidden">
                    <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white
                     text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white
                      focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400
                       dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-image-2" aria-controls="navbar-image-2" aria-label="Toggle navigation">
                        <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </div>
                </div>
                <div id="navbar-image-2" className="hs-collapse hidden  transition-all duration-300 basis-full grow sm:block">
                    <div className="flex flex-col gap-6 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                        <a className="font-medium text-gray-600 hover:text-gray-400 hover:underline" href="#" aria-current="page">Service</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 hover:underline" href="#">Feature</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 hover:underline" href="#">How to</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 hover:underline" href="#">FAQ</a>
                        <a className='rounded-full font-medium px-4 py-1 text-white bg-cyan-500 outline outline-cyan-500 hover:text-cyan-500 hover:bg-white duration-300 ' href='https://www.apple.com/jp/app-store/'>
                            Downloads
                        </a>
                    </div>
                    
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header