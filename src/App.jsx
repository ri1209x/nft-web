
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
          <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">キャッチコピーが入ります</h1>
          <p className="mb-8 text-base leading-relaxed text-left text-gray-500">テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります.</p>
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
    {/* Projects */}
    <div className='max-w-7xl px-4 mt-20 mx-auto '>
      <h2 className='text-center text-lg md:text-xl md:text-left lg:text-3xl lg;text-left underline decoration-cyan-500'>
        Projects
      </h2>
    </div>
  
    
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mb-16">
      
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">Latest Project</h2>
        <p className="mt-1 text-gray-600 ">See how game-changing companies are making the most of every engagement with Preline.</p>
      </div>



      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
        <a className="group  hover:bg-gray-100 rounded-xl p-5 transition-all " href="#">
          <div className="aspect-w-16 aspect-h-10">
            <img className="w-full object-cover rounded-xl" src="/img/dog.png" alt="Image Description"/>
          </div>
          <h3 className="mt-5 text-xl text-gray-800 ">
            Atlassian powers sales and support at scale with Preline.
          </h3>
          <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-cyan-400 ">
            Learn more
            <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
            </svg>
          </p>
        </a>
    


        <a className="group hover:bg-gray-100 rounded-xl p-5 transition-all " href="#">
          <div className="aspect-w-16 aspect-h-10">
            <img className="w-full object-cover rounded-xl" src="/img/woman1.png" alt="Image Description"/>
          </div>
          <h3 className="mt-5 text-xl text-gray-800 ">
            Atlassian powers sales and support at scale with Preline.
          </h3>
          <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-cyan-400 ">
            Learn more
            <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
            </svg>
          </p>
        </a>



        <a className="group hover:bg-gray-100 rounded-xl p-5 transition-all " href="#">
          <div className="aspect-w-16 aspect-h-10">
            <img className="w-full object-cover rounded-xl" src="/img/animals.png" alt="Image Description"/>
          </div>
          <h3 className="mt-5 text-xl text-gray-800 ">
            Atlassian powers sales and support at scale with Preline.
          </h3>
          <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-cyan-400 ">
            Learn more
            <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
            </svg>
          </p>
        </a>
        
      </div>

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
            <h2 className="text-2xl text-center sm:text-left text-gray-800 dark:text-gray-200 font-bold sm:text-3xl">
              MosaBit ３つの特徴
            </h2>

          
            <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
              <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-cyan-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                <span className="flex">
                  <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:text-gray-200 dark:hs-tab-active:text-blue-500 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  </svg>
                  <span className="grow ml-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:text-gray-200 dark:hs-tab-active:text-blue-500 ">Advanced tools</span>
                    <span className="block mt-1 text-gray-800 dark:text-gray-200 dark:hs-tab-active:text-gray-200 ">Use Preline thoroughly thought and automated libraries to manage your businesses.</span>
                  </span>
                </span>
              </button>

              <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-cyan-700" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                <span className="flex">
                  <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:text-gray-200 dark:hs-tab-active:text-blue-500 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                  </svg>
                  <span className="grow ml-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:text-gray-200 dark:hs-tab-active:text-blue-500 ">Smart dashboards</span>
                    <span className="block mt-1 text-gray-800 dark:text-gray-200 dark:hs-tab-active:text-gray-200 ">Quickly Preline sample components, copy-paste codes, and start right off.</span>
                  </span>
                </span>
              </button>

              <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-cyan-700" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
                <span className="flex">
                  <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:text-gray-200 dark:hs-tab-active:text-blue-500 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
                  </svg>
                  <span className="grow ml-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:text-gray-200 dark:hs-tab-active:text-blue-500 ">Powerful features</span>
                    <span className="block mt-1 text-gray-800 dark:text-gray-200 dark:hs-tab-active:text-gray-200 ">Reduce time and effort on building modern look design with Preline only.</span>
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
   
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      
      <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
      
        <a className="group rounded-xl overflow-hidden" href="#">
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <p className="mt-4 py-2 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2  font-medium">
                Step 1
              </p>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600  ">
                アプリをダウンロード
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                アプリをダウンロードして新規会員登録をしてください。
              </p>
            </div>
          </div>
        </a>
        

      
        <a className="group rounded-xl overflow-hidden" href="#">
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80" alt="Image Description"/>
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <p className="mt-4 py-2 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2  font-medium">
                Step 2
              </p>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600  ">
                写真をアップロード
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                参加するプロジェクトを選択し、写真をアップロードしてください。
              </p>
            </div>
          </div>
        </a>
      

      
        <a className="group rounded-xl overflow-hidden" href="#">
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description"/>
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <p className="mt-4 py-2 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2  font-medium">
                Step 3
              </p>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600  ">
                プロジェクトが完成
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                テキストが入りますテキストが入りますテキストが入りますテキストが入ります
              </p>
            </div>
          </div>
        </a>
      

      
        <a className="group rounded-xl overflow-hidden" href="#">
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <p className="mt-4 py-2 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2  font-medium">
                Step 4
              </p>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600  ">
                報酬GET!
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                テキストが入りますテキストが入りますテキストが入ります
              </p>
            </div>
          </div>
        </a>
      
      </div>
    
    </div>

      {/* Downloads */}
      
      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8  ">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 ">ダウンロードはこちらから</h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg ">今すぐ始めましょう！</p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a href="https://www.apple.com/jp/app-store/" 
              className="w-full sm:w-auto  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
              
                <img className='wr-3 w-44 h-auto'  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83&releaseDate=1464739200&h=b488c8877a1de0c0ee752e2cea473eec" 
                alt="Download on the App Store"/>
              </a>
              <a href='http://play.google.com/store/?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
              className="w-full sm:w-auto  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
                <img className='wr-3 w-44 h-auto' alt='Google Play で手に入れよう' src='https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png'/>
              </a>
          </div>
      </div>

      {/* Clients */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        
        <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
          <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 ">スポンサー企業様一覧 </h2>
        </div>
        

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 lg:gap-6">
          <div className="p-4 md:p-7 bg-gray-100 rounded-lg ">
            <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 " enableBackground="new 0 0 2499 614" viewBox="0 0 2499 614" xmlns="http://www.w3.org/2000/svg"><path d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z" fill="currentColor"/></svg>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg ">
            <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto" fill="none" viewBox="-0.3 0 320.3999999999999 99.9" xmlns="http://www.w3.org/2000/svg" width="2500" height="779"><path d="M168.7 25.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.8-6.5 6.5-6.5c3.7.1 6.5 3 6.5 6.5zm-26.8 13.1v1.6s-3.1-4-9.7-4c-10.9 0-19.4 8.3-19.4 19.8 0 11.4 8.4 19.8 19.4 19.8 6.7 0 9.7-4.1 9.7-4.1V73c0 .8.6 1.4 1.4 1.4h8.1V36.8h-8.1c-.8 0-1.4.7-1.4 1.4zm0 24.1c-1.5 2.2-4.5 4.1-8.1 4.1-6.4 0-11.3-4-11.3-10.8s4.9-10.8 11.3-10.8c3.5 0 6.7 2 8.1 4.1zm15.5-25.5h9.6v37.6h-9.6zm143.4-1c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8s-8.5-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-22.7-14.2v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7-2.9 0-5.9 1.5-7.8 3.7v26.2h-9.6V36.8h7.6c.8 0 1.4.7 1.4 1.4v1.6c2.8-2.9 6.5-4 10.2-4 4.2 0 7.7 1.2 10.5 3.6 3.4 2.8 4.7 6.4 4.7 12.7zm-57.7-16.3c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8.1-11.4-8.4-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-26-30.5c2.9 0 4.4.5 4.4.5v8.9s-8-2.7-13 3v26.3H173V36.8h8.1c.8 0 1.4.7 1.4 1.4v1.6c1.8-2.1 5.7-4 8.7-4zM91.5 71c-.5-1.2-1-2.5-1.5-3.6-.8-1.8-1.6-3.5-2.3-5.1l-.1-.1C80.7 47.2 73.3 32 65.5 17l-.3-.6c-.8-1.5-1.6-3.1-2.4-4.7-1-1.8-2-3.7-3.6-5.5C56 2.2 51.4 0 46.5 0c-5 0-9.5 2.2-12.8 6-1.5 1.8-2.6 3.7-3.6 5.5-.8 1.6-1.6 3.2-2.4 4.7l-.3.6C19.7 31.8 12.2 47 5.3 62l-.1.2c-.7 1.6-1.5 3.3-2.3 5.1-.5 1.1-1 2.3-1.5 3.6C.1 74.6-.3 78.1.2 81.7c1.1 7.5 6.1 13.8 13 16.6 2.6 1.1 5.3 1.6 8.1 1.6.8 0 1.8-.1 2.6-.2 3.3-.4 6.7-1.5 10-3.4 4.1-2.3 8-5.6 12.4-10.4 4.4 4.8 8.4 8.1 12.4 10.4 3.3 1.9 6.7 3 10 3.4.8.1 1.8.2 2.6.2 2.8 0 5.6-.5 8.1-1.6 7-2.8 11.9-9.2 13-16.6.8-3.5.4-7-.9-10.7zm-45.1 5.2C41 69.4 37.5 63 36.3 57.6c-.5-2.3-.6-4.3-.3-6.1.2-1.6.8-3 1.6-4.2 1.9-2.7 5.1-4.4 8.8-4.4s7 1.6 8.8 4.4c.8 1.2 1.4 2.6 1.6 4.2.3 1.8.2 3.9-.3 6.1-1.2 5.3-4.7 11.7-10.1 18.6zm39.9 4.7c-.7 5.2-4.2 9.7-9.1 11.7-2.4 1-5 1.3-7.6 1-2.5-.3-5-1.1-7.6-2.6-3.6-2-7.2-5.1-11.4-9.7 6.6-8.1 10.6-15.5 12.1-22.1.7-3.1.8-5.9.5-8.5-.4-2.5-1.3-4.8-2.7-6.8-3.1-4.5-8.3-7.1-14.1-7.1s-11 2.7-14.1 7.1c-1.4 2-2.3 4.3-2.7 6.8-.4 2.6-.3 5.5.5 8.5 1.5 6.6 5.6 14.1 12.1 22.2-4.1 4.6-7.8 7.7-11.4 9.7-2.6 1.5-5.1 2.3-7.6 2.6-2.7.3-5.3-.1-7.6-1-4.9-2-8.4-6.5-9.1-11.7-.3-2.5-.1-5 .9-7.8.3-1 .8-2 1.3-3.2.7-1.6 1.5-3.3 2.3-5l.1-.2c6.9-14.9 14.3-30.1 22-44.9l.3-.6c.8-1.5 1.6-3.1 2.4-4.6.8-1.6 1.7-3.1 2.8-4.4 2.1-2.4 4.9-3.7 8-3.7s5.9 1.3 8 3.7c1.1 1.3 2 2.8 2.8 4.4.8 1.5 1.6 3.1 2.4 4.6l.3.6c7.6 14.9 15 30.1 21.9 45v.1c.8 1.6 1.5 3.4 2.3 5 .5 1.2 1 2.2 1.3 3.2.8 2.6 1.1 5.1.7 7.7z" fill="#ff5a5f"/></svg>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg ">
            <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto" viewBox="0 -8.881784197001252e-16 267.51517722360785 65.24679557585003" xmlns="http://www.w3.org/2000/svg" width="2500" height="610"><path d="M263.043 56.411a4.418 4.418 0 1 0 .085 0zm0 8.33a3.874 3.874 0 1 1 3.809-3.938v.065a3.791 3.791 0 0 1-3.708 3.871h-.1m-16.96-9.535h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 0 1 9.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 1 1 5.57-5.572 5.571 5.571 0 0 1-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM250.87.004h-55.21a4.728 4.728 0 0 0-4.781 4.67v55.439a4.731 4.731 0 0 0 4.781 4.675h55.21a4.741 4.741 0 0 0 4.8-4.675V4.67a4.738 4.738 0 0 0-4.8-4.67m-86.12 31.749c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 0 1-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.577h9.609zm-46.139-19.048a5.756 5.756 0 0 0-5.894-5.89 6.406 6.406 0 0 0-6.784 5.89zm8.132 13.7a16.909 16.909 0 0 1-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331s7.685-16.328 17.286-16.328c8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 0 0 7.235 6.019 8.193 8.193 0 0 0 6.851-3.778zM47.834 24.279h9.219v4.225h.131a10.085 10.085 0 0 1 9.09-4.994c9.735 0 11.527 6.405 11.527 14.726V55.19h-9.6V40.159c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6zM82.669 9.58h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066L92.397 39.923h-.126v15.28h-9.6zM32.911 24.276h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 1 1-5.57 5.569 5.569 5.569 0 0 1 5.57-5.569M0 9.587h9.993v36.4h18.5v9.222H0zm263.744 51.522a1.2 1.2 0 0 0 1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836" fill="#0B65C2"/></svg>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg ">
            <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 33"><path d="M9.3 16.5C9.3 9 14.3 2.7 21.2.7a16.5 16.5 0 1 0 0 31.6c-6.9-2-11.9-8.3-11.9-15.8Z" fill="#1F4EF5"/><path d="M21.7 10c4 0 7.4 2.8 8.5 6.4a8.9 8.9 0 1 0-17 0c1-3.6 4.4-6.3 8.5-6.3Z" fill="#1F4EF5"/><path d="M24.8 19.4c0 3-2 5.5-4.8 6.3A6.6 6.6 0 1 0 20 13c2.8.8 4.8 3.4 4.8 6.4Z" fill="#1F4EF5"/><path d="M39.6 13.5A4.4 4.4 0 0 1 44 9.1h1.3v2.7l-1 .2-1 .6-.2.4-.1.5h2.3v3H43v9.2h-3.4v-9.3h-1.3v-2.9h1.3ZM55.7 13.5h3.4v6.1a6.9 6.9 0 0 1-1.7 4.6 6 6 0 0 1-4.5 1.8c-1 0-1.8-.1-2.5-.5a6 6 0 0 1-3.2-3.4c-.3-.8-.4-1.6-.4-2.5v-6H50v6c0 .5 0 1 .2 1.3l.5 1c.2.4.5.6.9.8.3.2.8.3 1.2.3a2.6 2.6 0 0 0 2.1-1c.3-.3.4-.7.5-1l.2-1.4v-6ZM61.2 25.7V9.5h3.4v16.2h-3.4ZM66.9 25.7V9.5h3.3v16.2H67ZM78.5 21.2l3.3-7.7h3.7l-5.7 12.2h-2.7l-5.6-12.2H75l3.4 7.7ZM87 13.5h3.3v12.2H87V13.5Zm1.6-5 .8.1.6.4.4.7.2.7a1.9 1.9 0 0 1-.6 1.4l-.6.4a2 2 0 0 1-.8.1c-.5 0-1-.2-1.3-.5a2 2 0 0 1-.4-2.1c0-.3.2-.5.4-.7l.6-.4.7-.1ZM98.8 13.2a6.7 6.7 0 0 1 4.8 1.9 6.3 6.3 0 0 1 1.9 5.7h-9.8a3.3 3.3 0 0 0 3.2 2.2c.5 0 1-.1 1.4-.4.5-.2.9-.5 1.2-1h3.7c-.2.7-.5 1.3-1 1.8a6.1 6.1 0 0 1-3.3 2.3 7 7 0 0 1-6.9-1.6 6.1 6.1 0 0 1-2-4.5 6.1 6.1 0 0 1 2-4.5c.7-.6 1.4-1 2.2-1.4.8-.3 1.7-.5 2.6-.5Zm3.2 5.2c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.3-.7-2-.7s-1.4.3-2 .7c-.5.4-.9.9-1.1 1.5h6.3ZM123 13.5h3.6l-5 12.2H119l-2.5-6.5-2.5 6.5h-2.7l-5-12.2h3.6l2.7 7 2.8-7h2.2l2.8 7 2.7-7Z" fill="currentColor"/></svg>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg ">
            <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 88 22" xmlSpace="preserve" enableBackground="new 0 0 88 22"><path d="M36.3 14.6a7.3 7.3 0 0 1-5.6 2.8c-3.8 0-6.8-2.7-6.8-6.2a6 6 0 0 1 2-4.5A6 6 0 0 1 30.5 5c2.2 0 4.3 1 5.6 2.8l-2.5 1.8a3.7 3.7 0 0 0-3.1-1.8 3.5 3.5 0 0 0-3.5 3.5c.1 2 1.7 3.5 3.6 3.5 1.3 0 2.5-.6 3.2-1.7l2.5 1.5z" fill="#5A5A5A"/><path d="M37.7 0H40.8V17.1H37.7z" fill="#5A5A5A"/><path d="M49.1 14.7c2 0 3.7-1.6 3.8-3.6-.1-2-1.8-3.6-3.8-3.6s-3.7 1.6-3.8 3.6c.1 2 1.7 3.6 3.8 3.6m0-9.8c1.7-.1 3.4.5 4.7 1.7 1.3 1.2 2 2.8 2.1 4.5a6.4 6.4 0 0 1-2.1 4.5 6.4 6.4 0 0 1-4.7 1.7c-3.8 0-6.8-2.7-6.8-6.2s3-6.2 6.8-6.2" fill="#5A5A5A"/><path d="M55.3 5.1 59 5.1 62 11.5 65.2 5.1 68.6 5.1 62 17.8z" fill="#5A5A5A"/><path d="M77.5 9.4a3 3 0 0 0-2.9-1.9c-1.3 0-2.5.7-3.1 1.9h6zm2 6.3a7 7 0 0 1-4.6 1.6c-3.8 0-6.8-2.7-6.8-6.2 0-1.7.7-3.3 1.9-4.5a6 6 0 0 1 4.6-1.7c1.7-.1 3.3.6 4.5 1.8s1.8 2.8 1.7 4.5v.8h-9.6a3.9 3.9 0 0 0 6.5 1.5l1.8 2.2zm2.8-5.3c0-2.9 2.2-5.2 5.7-5.2V8c-.7 0-1.5.3-2 .8s-.7 1.3-.6 2v6.3h-3.1v-6.7z" fill="#5A5A5A"/><path d="M9.7 5.6a5 5 0 0 0-8.3-3.5C0 3.5-.4 5.6.3 7.4s2.5 3 4.5 3h4.9V5.6zm1.4 0a5 5 0 0 1 8.3-3.5c1.4 1.4 1.8 3.5 1.1 5.3s-2.5 3-4.5 3h-4.9V5.6zm0 11a5 5 0 0 0 8.3 3.5c1.4-1.4 1.8-3.5 1.1-5.3s-2.5-3-4.5-3h-4.9v4.8zm-6.3 3.5c1.9 0 3.5-1.5 3.5-3.5v-3.5H4.8c-1.9 0-3.5 1.5-3.5 3.5s1.6 3.5 3.5 3.5zm4.9-3.5a5 5 0 0 1-8.3 3.5C0 18.7-.4 16.6.3 14.8s2.5-3 4.5-3h4.9v4.8z" fill="#280"/></svg>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg ">
            <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto" width="2500" height="728" viewBox="0 0 512 149" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M.06 27.679h17.852v39.662h37.651V27.679h17.875v97.358H55.563V84.542H17.912v40.495H.06V27.679zM129.993 93.326c0 8.15-6.64 14.782-14.788 14.782-8.151 0-14.787-6.632-14.787-14.782V51.41h-16.93v41.916c0 17.487 14.229 31.711 31.717 31.711 17.484 0 31.712-14.224 31.712-31.711V51.41h-16.924v41.916M194.179 51.901c-8.398 0-14.26 2.437-19.921 7.994V27.679h-16.985v59.705c0 22.348 16.158 37.653 34.311 37.653 20.181 0 37.863-15.578 37.863-36.567 0-20.723-16.305-36.569-35.268-36.569zm.422 57.423c-11.509 0-20.31-9.612-20.31-20.854 0-11.244 8.801-20.859 20.31-20.859 9.752 0 18.558 9.615 18.558 20.859 0 11.242-8.806 20.854-18.558 20.854zM257.974 56.18c0-8.538 5.689-11.245 11.917-11.245 5.014 0 11.649 3.792 15.979 8.398l11.103-13.001c-5.549-7.448-16.788-12.596-25.998-12.596-18.421 0-31.694 10.7-31.694 28.444 0 32.91 40.497 22.478 40.497 40.902 0 5.682-5.551 10.698-11.913 10.698-10.026 0-13.278-4.876-17.881-10.024l-12.327 12.729c7.86 9.617 17.608 14.495 29.257 14.495 17.47 0 31.556-10.835 31.556-27.767 0-36.566-40.496-25.188-40.496-41.033M343.184 50.947c-18.151 0-34.311 15.296-34.311 37.649v59.859h16.984v-32.369c5.662 5.553 11.521 7.994 19.922 7.994 18.962 0 35.269-15.844 35.269-36.567 0-20.992-17.687-36.566-37.864-36.566zm3.018 57.425c-11.508 0-20.31-9.625-20.31-20.859 0-11.244 8.802-20.859 20.31-20.859 9.75 0 18.557 9.615 18.557 20.859 0 11.234-8.807 20.859-18.557 20.859zM506.069 109.324c-10.018 0-12.862-4.332-12.862-10.971V68.965h15.572V54.069h-15.572v-19.64l-17.195 7.718v59.863c0 15.306 10.56 23.027 25.045 23.027 2.167 0 5.15-.14 6.777-.541l4.199-15.438c-1.896.131-4.062.266-5.964.266" fill="#45535E"/><path d="M461.278 69.831c-3.256-5.602-7.836-10.093-13.562-13.474-4.279-2.491-8.716-4.072-13.716-4.751v-17.8c5-2.123 8.103-6.822 8.103-12.304 0-7.472-5.992-13.527-13.458-13.527-7.472 0-13.569 6.055-13.569 13.527 0 5.482 2.924 10.181 7.924 12.304v17.808c-4 .578-8.148 1.825-11.936 3.741-7.737-5.876-33.107-25.153-47.948-36.412.352-1.269.623-2.577.623-3.957 0-8.276-6.702-14.984-14.981-14.984S333.78 6.71 333.78 14.986c0 8.275 6.706 14.985 14.985 14.985 2.824 0 5.436-.826 7.69-2.184l3.132 2.376 43.036 31.008c-2.275 2.089-4.394 4.465-6.089 7.131C393.099 73.737 391 79.717 391 86.24v1.361c0 4.579.87 8.902 2.352 12.963 1.305 3.546 3.213 6.77 5.576 9.685l-14.283 14.318a11.501 11.501 0 0 0-12.166 2.668 11.499 11.499 0 0 0-3.388 8.19c.001 3.093 1.206 6 3.394 8.187a11.5 11.5 0 0 0 8.188 3.394 11.51 11.51 0 0 0 8.191-3.394 11.514 11.514 0 0 0 3.39-8.187c0-1.197-.185-2.365-.533-3.475l14.763-14.765c2.024 1.398 4.21 2.575 6.56 3.59 4.635 2.004 9.751 3.225 15.35 3.225h1.026c6.19 0 12.029-1.454 17.518-4.428 5.784-3.143 10.311-7.441 13.731-12.928 3.438-5.502 5.331-11.581 5.331-18.269v-.334c0-6.579-1.523-12.649-4.722-18.21zm-18.038 30.973c-4.007 4.453-8.613 7.196-13.82 7.196h-.858c-2.974 0-5.883-.822-8.731-2.317-3.21-1.646-5.65-3.994-7.647-6.967-2.064-2.918-3.184-6.104-3.184-9.482v-1.026c0-3.321.637-6.47 2.243-9.444 1.717-3.251 4.036-5.779 7.12-7.789 3.028-1.996 6.262-2.975 9.864-2.975h.335c3.266 0 6.358.644 9.276 2.137 2.973 1.592 5.402 3.767 7.285 6.628 1.829 2.862 2.917 5.949 3.267 9.312.055.699.083 1.415.083 2.099 0 4.564-1.744 8.791-5.233 12.628z" fill="#F8761F"/></svg>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg ">
            <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto" xmlns="http://www.w3.org/2000/svg" width="2500" height="534" viewBox="0 0 1033.746 220.695"><path d="M1033.746 99.838v-18.18h-22.576V53.395l-.76.234-21.205 6.488-.418.127v21.415h-33.469v-11.93c0-5.555 1.242-9.806 3.69-12.641 2.431-2.801 5.908-4.225 10.343-4.225 3.188 0 6.489.751 9.811 2.232l.833.372V36.321l-.392-.144c-3.099-1.114-7.314-1.675-12.539-1.675-6.585 0-12.568 1.433-17.786 4.273-5.221 2.844-9.328 6.904-12.205 12.066-2.867 5.156-4.322 11.111-4.322 17.701v13.116h-15.72v18.18h15.72v76.589h22.567V99.838h33.469v48.671c0 20.045 9.455 30.203 28.102 30.203 3.064 0 6.289-.359 9.582-1.062 3.352-.722 5.635-1.443 6.979-2.213l.297-.176v-18.348l-.918.607c-1.225.816-2.75 1.483-4.538 1.979-1.796.505-3.296.758-4.458.758-4.368 0-7.6-1.177-9.605-3.5-2.028-2.344-3.057-6.443-3.057-12.177V99.838h22.575zM866.635 160.26c-8.191 0-14.649-2.716-19.2-8.066-4.579-5.377-6.899-13.043-6.899-22.783 0-10.049 2.32-17.914 6.901-23.386 4.554-5.436 10.95-8.195 19.014-8.195 7.825 0 14.054 2.635 18.516 7.836 4.484 5.228 6.76 13.03 6.76 23.196 0 10.291-2.14 18.196-6.36 23.484-4.191 5.248-10.493 7.914-18.732 7.914m1.003-80.885c-15.627 0-28.039 4.579-36.889 13.61-8.844 9.032-13.328 21.531-13.328 37.153 0 14.838 4.377 26.773 13.011 35.468 8.634 8.698 20.384 13.104 34.921 13.104 15.148 0 27.313-4.643 36.159-13.799 8.845-9.146 13.326-21.527 13.326-36.784 0-15.07-4.205-27.094-12.502-35.731-8.301-8.641-19.977-13.021-34.698-13.021m-86.602 0c-10.63 0-19.423 2.719-26.14 8.08-6.758 5.393-10.186 12.466-10.186 21.025 0 4.449.74 8.401 2.196 11.753 1.465 3.363 3.732 6.324 6.744 8.809 2.989 2.465 7.603 5.047 13.717 7.674 5.14 2.115 8.973 3.904 11.408 5.314 2.38 1.382 4.069 2.771 5.023 4.124.927 1.324 1.397 3.136 1.397 5.372 0 6.367-4.768 9.465-14.579 9.465-3.639 0-7.79-.76-12.337-2.258a46.347 46.347 0 0 1-12.634-6.406l-.937-.672v21.727l.344.16c3.193 1.474 7.219 2.717 11.964 3.695 4.736.979 9.039 1.477 12.777 1.477 11.535 0 20.824-2.732 27.602-8.125 6.821-5.43 10.278-12.67 10.278-21.525 0-6.388-1.861-11.866-5.529-16.284-3.643-4.382-9.966-8.405-18.785-11.961-7.026-2.82-11.527-5.161-13.384-6.958-1.79-1.736-2.699-4.191-2.699-7.3 0-2.756 1.122-4.964 3.425-6.752 2.321-1.797 5.552-2.711 9.604-2.711 3.76 0 7.607.594 11.433 1.758 3.823 1.164 7.181 2.723 9.984 4.63l.922.63v-20.61l-.354-.152c-2.586-1.109-5.996-2.058-10.138-2.828-4.123-.765-7.863-1.151-11.116-1.151m-95.157 80.885c-8.189 0-14.649-2.716-19.199-8.066-4.58-5.377-6.896-13.041-6.896-22.783 0-10.049 2.319-17.914 6.901-23.386 4.55-5.436 10.945-8.195 19.013-8.195 7.822 0 14.051 2.635 18.514 7.836 4.485 5.228 6.76 13.03 6.76 23.196 0 10.291-2.141 18.196-6.361 23.484-4.191 5.248-10.49 7.914-18.732 7.914m1.006-80.885c-15.631 0-28.044 4.579-36.889 13.61-8.844 9.032-13.331 21.531-13.331 37.153 0 14.844 4.38 26.773 13.014 35.468 8.634 8.698 20.383 13.104 34.92 13.104 15.146 0 27.314-4.643 36.16-13.799 8.843-9.146 13.326-21.527 13.326-36.784 0-15.07-4.206-27.094-12.505-35.731-8.303-8.641-19.977-13.021-34.695-13.021M602.409 98.07V81.658h-22.292v94.767h22.292v-48.477c0-8.243 1.869-15.015 5.557-20.13 3.641-5.054 8.493-7.615 14.417-7.615 2.008 0 4.262.331 6.703.986 2.416.651 4.166 1.358 5.198 2.102l.937.679V81.496l-.361-.155c-2.076-.882-5.013-1.327-8.729-1.327-5.602 0-10.615 1.8-14.909 5.344-3.769 3.115-6.493 7.386-8.576 12.712h-.237zm-62.213-18.695c-10.227 0-19.349 2.193-27.108 6.516-7.775 4.333-13.788 10.519-17.879 18.385-4.073 7.847-6.141 17.013-6.141 27.235 0 8.954 2.005 17.171 5.968 24.413 3.965 7.254 9.577 12.929 16.681 16.865 7.094 3.931 15.293 5.924 24.371 5.924 10.594 0 19.639-2.118 26.891-6.295l.293-.168v-20.423l-.937.684c-3.285 2.393-6.956 4.303-10.906 5.679-3.94 1.375-7.532 2.07-10.682 2.07-8.747 0-15.769-2.737-20.866-8.133-5.108-5.403-7.698-12.99-7.698-22.537 0-9.607 2.701-17.389 8.024-23.131 5.307-5.725 12.342-8.629 20.908-8.629 7.327 0 14.467 2.481 21.222 7.381l.935.679V84.371l-.302-.17c-2.542-1.423-6.009-2.598-10.313-3.489-4.286-.889-8.478-1.337-12.461-1.337m-66.481 2.284h-22.292v94.766h22.292V81.659zm-10.918-40.371c-3.669 0-6.869 1.249-9.498 3.724-2.64 2.482-3.979 5.607-3.979 9.295 0 3.63 1.323 6.698 3.938 9.114 2.598 2.409 5.808 3.63 9.54 3.63 3.731 0 6.953-1.221 9.582-3.626 2.646-2.42 3.988-5.487 3.988-9.118 0-3.559-1.306-6.652-3.879-9.195-2.571-2.538-5.833-3.824-9.692-3.824m-55.62 33.379v101.758h22.75V44.189H398.44l-40.022 98.221-38.839-98.221H286.81v132.235h21.379V74.657h.734l41.013 101.768h16.134l40.373-101.758h.734z" fill="#706d6e"/><path d="M104.868 104.868H0V0h104.868v104.868z" fill="#f1511b"/><path d="M220.654 104.868H115.788V0h104.866v104.868z" fill="#80cc28"/><path d="M104.865 220.695H0V115.828h104.865v104.867z" fill="#00adef"/><path d="M220.654 220.695H115.788V115.828h104.866v104.867z" fill="#fbbc09"/></svg>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg ">
            <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 " xmlns="http://www.w3.org/2000/svg" viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947" width="2500" height="607"><path d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z" fill="currentColor"/></svg>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg ">
            <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto" xmlns="http://www.w3.org/2000/svg" width="2500" height="1036" viewBox="0 -6.166 294.398 121.975"><path d="M12.139 90.511c-3.939 0-7.799-.479-10.938-1.292l.487-8.277c3.053 1.123 7.313 2.012 11.254 2.012 5.952 0 10.775-2.492 10.775-8.359C23.718 63.172 0 68.002 0 50.466c0-9.325 7.315-15.834 19.941-15.834 3.214 0 6.51.397 9.809.959l-.485 7.802c-3.132-.963-6.591-1.527-9.806-1.527-6.754 0-10.211 3.134-10.211 7.638 0 10.855 23.72 6.839 23.72 23.798-.005 9.973-7.882 17.209-20.829 17.209M54.106 90.264c-2.249 0-3.938-.076-6.03-.479v17.397h-8.601V49.746h8.12c0 2.094-.082 5.309-.484 7.476h.162c2.25-5.068 6.833-8.283 12.944-8.283 9.487 0 14.712 6.75 14.712 18.814.001 14.076-7.473 22.511-20.823 22.511m3.861-34.246c-6.434 0-9.892 7.558-9.892 14.384v12.312c1.852.562 3.86.804 6.272.804 6.833 0 11.497-4.182 11.497-14.958.001-8.039-2.49-12.542-7.877-12.542zM102.519 57.381C94.561 55.936 90.7 61.485 90.7 73.466v16.238h-8.606V49.746H90.3c0 2.246-.246 5.791-.809 8.844h.162c1.771-5.388 5.79-10.377 13.271-9.651l-.405 8.442M114.803 43.797c-3.056 0-5.55-2.414-5.55-5.393 0-2.971 2.494-5.385 5.55-5.385 2.974 0 5.467 2.333 5.467 5.385 0 2.979-2.493 5.393-5.467 5.393m4.26 45.907h-8.6V49.746h8.6v39.958zM154.449 89.704V63.975c0-4.982-1.374-7.875-5.951-7.875-6.03 0-10.457 6.345-10.457 14.302v19.303h-8.603V49.746h8.203c0 2.094-.162 5.546-.563 7.796l.082.075c2.33-5.141 7.157-8.68 13.91-8.68 9.084 0 11.9 5.711 11.9 12.787v27.979h-8.521M186.675 90.425c-8.524 0-11.1-3.294-11.1-12.214V56.417h-7.634v-6.671h7.634V37.04l8.523-2.333v15.039h10.532v6.671h-10.448v19.137c0 5.954 1.205 7.558 5.224 7.558 1.769 0 3.699-.24 5.226-.643v7.076c-2.331.486-5.307.88-7.957.88"/><path d="M233.712 78.636c11.72-15.086 20.938-32.809 20.938-45.537 0-6.652-4.765-11.295-10.978-14.823.123 13.831-4.668 46.263-9.96 60.36M195.279 115.809c27.47-9.188 67.29-30.598 94.985-49.725 2.324-1.6 4.135-3.085 4.135-5.685 0-4.519-8.275-10.576-12.292-12.987-21.792 22.653-65.163 56.596-86.828 68.397" fill="#ffdd05"/><path d="M220.76 96.567c16.938-11.709 41.545-33.739 49.873-45.727 1.963-2.82 3.416-4.454 3.416-7.405 0-4.839-5.644-8.382-9.703-10.849-9.727 22.924-31.579 51.469-43.586 63.981M236.192 64.087c2.191-14.477.903-31.952-1.894-42.913-1.521-5.969-6.901-12.706-11.88-14.812 6.526 18.522 12.128 44.898 13.774 57.725" fill="#ffdd05"/><path d="M231.367 43.779C226.235 29.91 213.446.998 194.633-6.165c12.247 13.516 30.417 40.337 36.734 49.944" fill="#ffdd05"/></svg>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg ">
            <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 816"><g clipPath="url(#a)"><path d="M307.9 0H330a303.4 303.4 0 0 1 207.7 87.7c-20.2 20.6-40.7 40.3-60.5 60.9-30.6-27.7-67.5-49.1-107.8-56.7A227.9 227.9 0 0 0 196 124.7a227.3 227.3 0 0 0-99.4 160.6 233.5 233.5 0 0 0 50.7 180.4 224.5 224.5 0 0 0 163.6 80.5c58.7 3.4 120-14.7 162.8-55.8 33.5-29 49-73 54-115.7-69.5 0-139.2.4-208.8 0v-86.5H612c15.1 92.7-6.7 197.2-77.2 263.5-47 47-112 74.6-178.3 80A327.4 327.4 0 0 1 169 595 322.8 322.8 0 0 1 19.3 424a309.3 309.3 0 0 1-2.1-209.3 319.4 319.4 0 0 1 115.4-153A329.3 329.3 0 0 1 307.9 0Z" fill="#3780FF"/><path d="M1990 21.9h89.7v599c-29.8 0-60 .4-89.8-.4.4-199.3 0-399 0-598.6Z" fill="#38B137"/><path d="M811.7 229.5a210.8 210.8 0 0 1 161 34.4 197 197 0 0 1 79.3 125.9c11.3 58.3-3 122-40.7 168.2A205 205 0 0 1 839 633a204.1 204.1 0 0 1-152.7-81.8c-39.8-53.6-49.5-127.5-27.6-190.4 21.8-67.5 83.4-119.1 153-131.3Zm12.5 79.7a112.8 112.8 0 0 0-58.7 37.3c-40.7 48.7-38.2 128 6.7 173.3a111.7 111.7 0 0 0 177.9-26.4c27.7-50 19.7-118.7-22.7-157.8a113.2 113.2 0 0 0-103.2-26.4Z" fill="#FA3913"/><path d="M1256.3 229.5c63.3-12.1 132.5 5.5 180 50 77.1 69.1 85.5 198.8 19.7 278.5a204.7 204.7 0 0 1-168.3 75 202.6 202.6 0 0 1-156.8-81.8c-40.7-54.9-49.5-130.4-26.5-194.6a199.2 199.2 0 0 1 151.9-127Zm12.6 79.7a114.7 114.7 0 0 0-58.8 37c-40.2 47.7-38.5 125.8 4.7 171.5a112.2 112.2 0 0 0 102.3 33.1 115 115 0 0 0 78-57.4c27.3-50.4 19.3-119.2-23.5-158.2a112.4 112.4 0 0 0-102.7-26Z" fill="#FCBD06"/><path d="M1633.4 253.8c48.2-30.2 112.4-38.5 164.4-12.5 16.4 7 29.8 19.3 42.8 31.4.4-11.3 0-23 .4-34.8 28.1.4 56.2 0 84.8.4v370c-.5 55.8-14.7 115-55 155.6-44 44.9-111.6 58.7-172.4 49.5-65-9.6-121.6-57-146.8-117 25.2-12.2 51.6-21.8 77.6-33.2 14.7 34.4 44.5 63.8 81.8 70.5 37.3 6.7 80.5-2.5 104.9-33.5 26-32 26-75.5 24.7-114.6-19.3 19-41.5 35.7-68.4 42-58.3 16.3-122.5-3.8-167.3-43.2a205.5 205.5 0 0 1-69.7-160.7 207.4 207.4 0 0 1 98.2-169.9Zm86.8 53.7a110.4 110.4 0 0 0-65.8 38.2c-39.5 47-39.5 122 .4 168.2a109.8 109.8 0 0 0 94.4 38.6 106.6 106.6 0 0 0 80-53.3c27.8-49 23.1-115.7-14.2-158.5-23-26.4-60-39.5-94.8-33.2Z" fill="#3780FF"/><path d="M2187.5 275.2c50.3-47 128-62.9 192.5-38.1 61.3 23 100.3 81.3 120 141.3-91 37.8-181.6 75.1-272.7 112.9 12.6 23.9 32 45.7 58 54.5 36.4 13 80 8.4 110.7-16a178.1 178.1 0 0 0 31-33c23 15.4 46.2 30.5 69.2 46a202 202 0 0 1-146.8 89c-65.4 8-135-17.2-177.4-68.4-69.7-80.5-63-215.6 15.5-288.2Zm44.9 77.6a119.8 119.8 0 0 0-19.7 70.5 33573 33573 0 0 0 182.4-76c-10-23.4-34.4-37.7-59.1-41.4-39.9-7.2-81.4 14.2-103.6 47Z" fill="#FA3913"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0H2500V816H0z"/></clipPath></defs></svg>
          </div>
        </div>
        <div className='flex justify-center mb-16'>
          <button className='mx-auto my-10 py-2 px-4 text-xl text-gray-800 bg-white outline rounded-full hover:text-white hover:bg-gray-800 duration-300'>
          お問い合わせ
          </button>
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
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">よくあるご質問</h2>
          <p className="mt-1 text-gray-400">Answers to the most frequently asked questions.</p>
        </div>
      

        <div className="max-w-2xl mx-auto">
         
          <div className="hs-accordion-group">
            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left transition  text-gray-200 hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                Can I cancel at anytime?
                <svg className="hs-accordion-active:hidden block w-3 h-3  group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <svg className="hs-accordion-active:block hidden w-3 h-3  group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <p className="text-gray-200">
                  Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
                </p>
              </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-two">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left transition text-gray-200 hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                My team has credits. How do we use them?
                <svg className="hs-accordion-active:hidden block w-3 h-3  group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <svg className="hs-accordion-active:block hidden w-3 h-3  group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                <p className="text-gray-200">
                  Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
                </p>
              </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-three">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left transition text-gray-200 hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                How does Preline's pricing work?
                <svg className="hs-accordion-active:hidden block w-3 h-3  group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <svg className="hs-accordion-active:block hidden w-3 h-3  group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <p className="text-gray-200">
                  Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
                </p>
              </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-four">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left transitiontext-gray-500 text-gray-200 hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                How secure is Preline?
                <svg className="hs-accordion-active:hidden block w-3 h-3  group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <svg className="hs-accordion-active:block hidden w-3 h-3  group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                <p className="text-gray-200">
                  Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
                </p>
              </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-five">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left transition text-gray-200 hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                How do I get access to a theme I purchased?
                <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-400 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-400 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                <p className="text-gray-200">
                  If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
                </p>
              </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-six">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left transition  text-gray-200 hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                Upgrade License Type
                <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-400 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-400 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                <p className="text-gray-200">
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
