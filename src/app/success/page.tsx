"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SuccessPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1209920954184266');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1209920954184266&ev=PageView&noscript=1"/>
    `;
    document.body.appendChild(noscript);

    return () => {
      // Dọn dẹp khi unmount nếu cần
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, []);

  return (
    <div className=" bg-gray-50 p-6 bg-cover bg-center" style={{
      backgroundImage: `url('images/the-beverly.jpg')`,
    }}>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-green-600 p-2">
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-3 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="px-2 py-4 text-center">
          <h1 className="text-xl md:text-2xl font-bold font-serif mb-2 text-yellow-600">Đăng Ký Thành Công!</h1>
          <p className="text-base md:text-base text-gray-600 mb-2 font-semibold">
            Cảm ơn Quý khách đã đăng ký thông tin tại Vinhomes Grand Park.
          </p>
          <p className="text-base md:text-sm text-gray-600 mb-2">
            Chuyên viên tư vấn của chúng tôi sẽ liên hệ với Quý khách trong thời gian sớm nhất để tư vấn chi tiết. Quý khách vui lòng giữ liên lạc!
          </p>
          
          <div className="mt-2 mb-4">
            <Image 
              src="/images/vinhomes-gp-logo.png" 
              alt="Vinhomes Grand Park" 
              width={200} 
              height={100}
              className="mx-auto"
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
              Trở Về Trang Chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
