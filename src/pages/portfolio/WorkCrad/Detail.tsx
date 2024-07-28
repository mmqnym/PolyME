function Detail() {
  const content = `This project aims to help developers quickly establish a certificate server for issuing certificates (keys and signatures) for your applications. You can embed the public key into your application and use the signature to verify whether the key is issued by the certificate server you have set up, achieving "product activation" functionality. 
        
        Additionally, QuickCerts provides support for temporary permission. If your application requires a "trial period" or periodic authorization rather than permanent authorization, you can use the relevant API to achieve this.`;

  return (
    <div className="col-span-3 col-start-4 row-span-4 row-start-7 h-full w-full rounded-2xl border border-gray-700 bg-gray-700/30">
      <p className="m-2 h-fit w-fit rounded-xl bg-purple-400/50 px-4 py-1 font-ubuntu text-xl text-gray-200">Detail</p>
      <p className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-transparent mt-2 h-4/5 w-full overflow-y-auto whitespace-pre-line px-6 pb-5 font-ubuntu text-lg text-gray-200 transition-all duration-300">
        {content}
      </p>
    </div>
  );
}

export default Detail;
