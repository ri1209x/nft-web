
import './App.css'

function App() {


  return (
<>
  {/* KeyValue */}
  <section>
    <div className='flex  text-center  mb-12'>
      <div className='relative w-full'>
        <img className='w-full object-cover h-screen' src='/img/hero.jpg' />
      </div>
      <div className='absolute left-40 inset-y-1/2'>
        <h2 className='text-white text-2xl md:text-3xl lg-text-5xl'>
          "MosaBit" <br/> is the best NFT service <br/> that adds value to your images!
        </h2>
      </div>
     
    </div>
  </section>
  {/* Service */}
  <section>
    <div className='mt-24 md:ml-8  py-2 md:border-l-4 md:border-l-cyan-500  '>
      <h2 className='md:pl-10  text-center text-2xl md:text-left md:text-3xl lg:text-5xl text-gray-800 '>
        Service
      </h2>
    </div>

    <div className='max-w-7xl px-4 mt-20 mx-auto'>
      <h2 className='text-center text-lg md:text-xl md:text-left lg:text-3xl lg;text-left underline decoration-cyan-500'>
        MosaBitとは
      </h2>
    </div>
    
    <div className="px-4 py-12 my-6 h-full mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 ">
      <div className="flex flex-wrap items-center mx-auto max-w-7xl">
        <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
          <div>
            <div className="relative w-full max-w-lg">
              
              <div className="relative">
                <img className="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" src="/img/kvr.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
          <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Your tagline </span>
          <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Medium length display headline.</h1>
          <p className="mb-8 text-base leading-relaxed text-left text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
          <div className="flex flex-wrap w-full mt-2 -mx-4 text-left">
            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
              <svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path d="M16 32.076L30 24.065V8.05701L16 16.067V32.076Z" fill="#000001"></path>
                  <path d="M19 24.5556V27L25 23.4444V21L19 24.5556Z" fill="white"></path>
                  <path d="M16 0.076004L2 8.057V24.065L16 32.076V16.067L30 8.057L16 0.076004Z" fill="url(#paint0_linear)"></path>
                </g>
                <defs>
                  <linearGradient id="paint0_linear" x1="2.18" y1="23.255" x2="30.041" y2="8.782" gradientUnits="userSpaceOnUse">
                    <stop offset="0.043" stopColor="#FF8618"></stop>
                    <stop offset="0.382" stopColor="#FF246E"></stop>
                    <stop offset="0.989" stopColor="#AF1DF5"></stop>
                  </linearGradient>
                  <clipPath id="clip0">
                    <rect width="32" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
              <svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" fill="#FF3366"></circle>
                <path d="M11.3594 10.8594C12.3259 10.8594 13.1094 10.0759 13.1094 9.10938C13.1094 8.14288 12.3259 7.35938 11.3594 7.35938C10.3929 7.35938 9.60938 8.14288 9.60938 9.10938C9.60938 10.0759 10.3929 10.8594 11.3594 10.8594Z" fill="white"></path>
                <path d="M7.70312 12.3594L7.09375 14.5938H9.09375C8.69271 16.224 7.85312 19.6531 7.70312 20.3281C7.51562 21.1719 7.48433 23.5781 10.0156 23.5781C11.7824 23.5781 12.9093 22.4368 13.5379 21.5048L13.0625 23.4062H15.9062L17.3906 17.3981C17.6016 16.3984 18.0981 14.4688 19.8906 14.4688C22.0225 14.4688 21.2404 16.9933 20.8571 18.2305C20.8415 18.2809 20.8266 18.3291 20.8125 18.375C20.525 19.3125 20.2188 20.4062 20.2188 21.1562C20.2188 22 20.6094 23.5781 22.7969 23.5781C24.9844 23.5781 25.9167 21.4115 26.1094 20.3281L25 19.875C24.9219 20.4531 24.2188 21.7031 23.5625 21.7031C22.6641 21.7031 23.1154 20.1885 23.597 18.5721C23.8106 17.8551 24.0302 17.1181 24.1406 16.4844C24.4198 14.8821 24.1406 12.1562 21.3594 12.1562C19.632 12.1562 18.2756 13.6955 17.6303 14.7641L18.1719 12.3594H13.8438L13.25 14.5938H15.2656C15.2656 14.5938 14.0695 19.4683 13.9922 19.6211C13.1797 21.2266 11.9508 21.7655 11.0312 21.7031C10.2938 21.6531 10.3802 20.7656 10.5156 20.3281L12.5156 12.3594H7.70312Z" fill="white"></path>
              </svg>
            </div>
            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
              <svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z" fill="#1ABCFE"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z" fill="#0ACF83"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z" fill="#FF7262"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z" fill="#F24E1E"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z" fill="#A259FF"></path>
              </svg>
            </div>
            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
              <svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.58991 11C2.5245 11 -0.0510283 13.5306 0.000767908 16.5905C0.0516066 19.5934 2.54027 22 5.59027 22C6.8999 22 8.10608 21.5563 9.06016 20.812C10.0143 21.5562 11.2205 22 12.5302 22C13.8398 22 15.046 21.5563 16.0001 20.812C16.9542 21.5562 18.1604 22 19.4701 22C20.7798 22 21.986 21.5563 22.94 20.812C23.8942 21.5562 25.1004 22 26.4101 22C29.4597 22 31.9484 19.5938 31.9992 16.5905C32.051 13.5304 29.4754 11 26.4099 11C25.1111 11 23.9003 11.4542 22.94 12.2104C21.9795 11.4542 20.7686 11 19.4698 11C18.171 11 16.9603 11.4542 15.9999 12.2104C15.0396 11.4542 13.8288 11 12.53 11C11.2312 11 10.0204 11.4542 9.06004 12.2105C8.09965 11.4542 6.88874 11 5.58991 11ZM12.5302 20.7518C11.5705 20.7518 10.6833 20.4441 9.96546 19.9232C10.7071 19.0067 11.1581 17.8512 11.1794 16.5905C11.2016 15.2766 10.7395 14.0604 9.96228 13.1002C10.686 12.5665 11.578 12.2482 12.53 12.2482C13.4821 12.2482 14.374 12.5665 15.0977 13.1001C14.3204 14.0604 13.8582 15.2768 13.8803 16.5906C13.9018 17.8512 14.3529 19.0068 15.0947 19.9233C14.3769 20.4442 13.4898 20.7518 12.5302 20.7518ZM9.91349 16.5697C9.92973 15.6102 9.60767 14.7149 9.06006 13.9908C8.51245 14.7149 8.19039 15.6102 8.20663 16.5697C8.22228 17.4943 8.5373 18.3464 9.06013 19.0368C9.58286 18.3464 9.89783 17.4944 9.91349 16.5697ZM6.94071 16.5905C6.91847 15.2766 7.38057 14.0604 8.15783 13.1002C7.43411 12.5665 6.54203 12.2482 5.58991 12.2482C3.2229 12.2482 1.22685 14.2162 1.26669 16.5697C1.30595 18.8891 3.2289 20.7518 5.59027 20.7518C6.54983 20.7518 7.43703 20.4442 8.15483 19.9232C7.41304 19.0067 6.96205 17.8512 6.94071 16.5905ZM18.1193 16.5905C18.1416 15.2766 17.6795 14.0604 16.9022 13.1001C17.6258 12.5665 18.5178 12.2482 19.4698 12.2482C20.4219 12.2482 21.314 12.5665 22.0378 13.1002C21.2605 14.0604 20.7984 15.2766 20.8206 16.5905C20.8419 17.8512 21.2929 19.0067 22.0347 19.9232C21.3169 20.4442 20.4297 20.7518 19.4701 20.7518C18.5105 20.7518 17.6233 20.4441 16.9054 19.9232C17.6471 19.0067 18.098 17.8512 18.1193 16.5905ZM22.0865 16.5697C22.0703 15.6102 22.3924 14.7148 22.94 13.9907C23.4877 14.7148 23.8097 15.6102 23.7934 16.5697C23.7777 17.4944 23.4627 18.3464 22.94 19.0368C22.4172 18.3464 22.1022 17.4943 22.0865 16.5697ZM26.4101 20.7518C25.4504 20.7518 24.5632 20.4441 23.8453 19.9232C24.587 19.0068 25.0379 17.8513 25.0593 16.5906C25.0817 15.2765 24.6196 14.0603 23.8423 13.1001C24.5659 12.5665 25.4579 12.2482 26.4099 12.2482C28.7771 12.2482 30.7732 14.216 30.7333 16.5697C30.694 18.8895 28.7711 20.7518 26.4101 20.7518ZM16.8534 16.599C16.8696 15.6395 16.5476 14.7442 15.9999 14.0201C15.4523 14.7442 15.1303 15.6395 15.1465 16.599C15.1622 17.5236 15.4772 18.3757 16 19.0661C16.5227 18.3757 16.8377 17.5237 16.8534 16.599Z" fill="black"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className='max-w-7xl px-4 py-12 mx-auto'>
      <h2 className='text-center text-lg md:text-xl md:text-left lg:text-3xl lg;text-left underline decoration-cyan-500'>
        MosaBitにできること
      </h2>
    </div>
    
    <div className="flex my-8 justify-center flex-wrap mx-auto md:flex-nowrap p-12">
    
      <a href="">
        <div className="flex w-full">
          <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
            <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="/img/s1.jpg" alt="blog" />
            <div className="px-6 py-8">
              <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                <span className="">Entry</span>
              </h4>
              <p className="mt-4 text-base font-normal text-gray-500 leading-relax">Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you.</p>
            </div>
          </div>
        </div>
      </a>

      <a href="">
        <div className="flex w-full">
          <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
            <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="/img/s2.jpg" alt="blog" />
            <div className="px-6 py-8">
              <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                <span className="">Entry</span>
              </h4>
              <p className="mt-4 text-base font-normal text-gray-500 leading-relax">Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you.</p>
            </div>
          </div>
        </div>
      </a>

      <a href="">
        <div className="flex w-full">
          <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
            <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="/img/s3.jpg" alt="blog" />
            <div className="px-6 py-8">
              <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                <span className="">Entry</span>
              </h4>
              <p className="mt-4 text-base font-normal text-gray-500 leading-relax">Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you.</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div className='flex justify-center mb-16'>
      <button className='mx-auto my-10 py-2 px-4 text-xl text-gray-800 bg-white outline rounded-full hover:text-white hover:bg-gray-800 duration-300'>
        もっとくわしく
      </button>
    </div>
  </section>
  {/* Feature */}
  <section>
    <div className='w-full bg-cyan-900 pt-2'>
    
    <div className='mt-24  md:ml-8  py-2 md:border-l-4 md:border-l-cyan-500  '>
      <h2 className='md:pl-10  text-center text-2xl md:text-left md:text-3xl lg:text-5xl text-gray-200'>
        Feature
      </h2>
    </div>
   

    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
     
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-200 font-bold sm:text-3xl">
              Fully customizable rules to match your unique needs
            </h2>

          
            <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
              <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-cyan-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                <span className="flex">
                  <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-200 dark:hs-tab-active:text-blue-500 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  </svg>
                  <span className="grow ml-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-200 dark:hs-tab-active:text-blue-500 ">Advanced tools</span>
                    <span className="block mt-1 text-gray-200 dark:hs-tab-active:text-gray-200 ">Use Preline thoroughly thought and automated libraries to manage your businesses.</span>
                  </span>
                </span>
              </button>

              <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-cyan-700" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                <span className="flex">
                  <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-200 dark:hs-tab-active:text-blue-500 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                  </svg>
                  <span className="grow ml-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-200 dark:hs-tab-active:text-blue-500 ">Smart dashboards</span>
                    <span className="block mt-1 text-gray-200 dark:hs-tab-active:text-gray-200 ">Quickly Preline sample components, copy-paste codes, and start right off.</span>
                  </span>
                </span>
              </button>

              <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-cyan-700" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
                <span className="flex">
                  <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-200 dark:hs-tab-active:text-blue-500 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
                  </svg>
                  <span className="grow ml-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-200 dark:hs-tab-active:text-blue-500 ">Powerful features</span>
                    <span className="block mt-1 text-gray-200 dark:hs-tab-active:text-gray-200 ">Reduce time and effort on building modern look design with Preline only.</span>
                  </span>
                </span>
              </button>
            </nav>
         
          </div>
     

          <div className="lg:col-span-6">
            <div className="relative">
           
              <div>
                <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                  <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" />
                </div>

                <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                  <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" />
                </div>

                <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                  <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" />
                </div>
              </div>
             

             
              <div className="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
                <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                  <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                  <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                </svg>
              </div>
             
            </div>
          </div>
        
        </div>
       

        <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
        </div>
       
      </div>
    </div>
    </div>
  </section>
  {/* How to */}
  <section>
    <div className='mt-24 md:ml-8  py-2 md:border-l-4 md:border-l-cyan-500  '>
      <h2 className='md:pl-10  text-center text-2xl md:text-left md:text-3xl lg:text-5xl text-gray-800 '>
        How to
      </h2>
    </div>
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-4xl mx-auto">
       
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
          <div className="space-y-6 lg:space-y-10">
           
            <div className="flex">
              <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
                  Creative minds
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  We choose our teams carefully. Our people are the secret to great work.
                </p>
              </div>
            </div>
          

         
            <div className="flex">
              <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
                  Effortless updates
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Benefit from automatic updates to all boards any time you need to make a change to your website.
                </p>
              </div>
            </div>
           

         
            <div className="flex">
              <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
                  Strong empathy
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  We've user tested our own process by shipping over 1k products for clients.
                </p>
              </div>
            </div>
     
          </div>
       

          <div className="space-y-6 lg:space-y-10">
           
            <div className="flex">
              <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
                  Conquer the best
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  We stay lean and help your product do one thing well.
                </p>
              </div>
            </div>
         

           
            <div className="flex">
              <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/>
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
                  Designing for people
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  We actively pursue the right balance between functionality and aesthetics, creating delightful experiences.
                </p>
              </div>
            </div>
        

       
            <div className="flex">
              <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
                  Simple and affordable
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  From boarding passes to movie tickets, there's pretty much nothing you can't store with Preline.
                </p>
              </div>
            </div>
        
          </div>
       
        </div>
    
      </div>
    </div>

  </section>
  {/* FAQ */}
  <section>
    <div className='w-full bg-cyan-900 pt-2'>
      
      <div className='mt-24  md:ml-8  py-2 md:border-l-4 md:border-l-cyan-500  '>
        <h2 className='md:pl-10  text-center text-2xl md:text-left md:text-3xl lg:text-5xl text-gray-200'>
          FAQ
        </h2>
      </div>
      

  
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
       
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Your questions, answered</h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">Answers to the most frequently asked questions.</p>
        </div>
      

        <div className="max-w-2xl mx-auto">
         
          <div className="hs-accordion-group">
            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                Can I cancel at anytime?
                <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <p className="text-gray-800 dark:text-gray-200">
                  Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
                </p>
              </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-two">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                My team has credits. How do we use them?
                <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                <p className="text-gray-800 dark:text-gray-200">
                  Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
                </p>
              </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-three">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                How does Preline's pricing work?
                <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <p className="text-gray-800 dark:text-gray-200">
                  Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
                </p>
              </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-four">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                How secure is Preline?
                <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                <p className="text-gray-800 dark:text-gray-200">
                  Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
                </p>
              </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-five">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                How do I get access to a theme I purchased?
                <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                <p className="text-gray-800 dark:text-gray-200">
                  If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
                </p>
              </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-six">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                Upgrade License Type
                <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                <p className="text-gray-800 dark:text-gray-200">
                  There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.
                </p>
              </div>
            </div>
          </div>
       
        </div>
      </div>

    </div>

  </section>
</>

  )
}

export default App
