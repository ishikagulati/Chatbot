import Image from "next/image";

const Main = () => {
  const handleCardClick = (promptText) => {
    console.log(promptText); 
  };

  return (
    <div className="flex">
     
      <div className="fixed top-0 left-0 h-full bg-white w-[60px] md:w-[80px] lg:w-[100px] flex flex-col items-center py-5">
      
        <button className="bg-gray-200 rounded-full p-3 mb-8">
          <Image src="/plus_icon.png" alt="add" width={24} height={24} />
        </button>
      
        <button className="mb-8">
          <Image src="/question_icon.png" alt="question" width={24} height={24} />
        </button>
        <button className="mb-8">
          <Image src="/refresh_icon.png" alt="refresh" width={24} height={24} />
        </button>
        <button className="mb-8">
          <Image src="/settings_icon.png" alt="settings" width={24} height={24} />
        </button>
      </div>

     
      <div className="flex-1 min-h-screen pb-[25vh] relative ml-[60px] md:ml-[80px] lg:ml-[100px]">
        <div className="flex items-center justify-between p-5 text-gray-600">
          <p className="text-2xl font-bold ml-4">ChatBot</p>
          <Image src="/user.jpg" alt="user" width={48} height={48} className="rounded-full" />
        </div>

        <div className="max-w-[900px] mx-auto">
        
          <div className="my-[30px] text-[40px] font-semibold text-[#c4c7c5] md:text-[56px]">
            <p>
              <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                Hello,
              </span>
            </p>
            <p>How Can I Help You Today?</p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
            <div
              className="h-[150px] p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea] md:h-[200px]"
              onClick={() => handleCardClick("Suggest Some Place To Visit In India.")}
            >
              <p className="text-gray-600 text-[15px] md:text-[17px]">Suggest Some Place To Visit In India.</p>
              <Image
                src="/compass_icon.png"
                alt="compass"
                width={36}
                height={36}
                className="p-1.5 rounded-full bg-white absolute bottom-2.5 right-2.5"
              />
            </div>

            <div
              className="h-[150px] p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea] md:h-[200px]"
              onClick={() => handleCardClick("Explain the process of photosynthesis in simple terms")}
            >
              <p className="text-gray-600 text-[15px] md:text-[17px]">Explain the process of photosynthesis in simple terms</p>
              <Image
                src="/message_icon.png"
                alt="message"
                width={36}
                height={36}
                className="p-1.5 rounded-full bg-white absolute bottom-2.5 right-2.5"
              />
            </div>

            <div
              className="h-[150px] p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea] md:h-[200px]"
              onClick={() => handleCardClick("How do you create a responsive navbar using CSS and JavaScript?")}
            >
              <p className="text-gray-600 text-[15px] md:text-[17px]">How do you create a responsive navbar using CSS and JavaScript?</p>
              <Image
                src="/bulb_icon.png"
                alt="bulb"
                width={36}
                height={36}
                className="p-1.5 rounded-full bg-white absolute bottom-2.5 right-2.5"
              />
            </div>

            <div
              className="h-[150px] p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea] md:h-[200px]"
              onClick={() => handleCardClick("What are some essential skills for becoming a software developer?")}
            >
              <p className="text-gray-600 text-[15px] md:text-[17px]">What are some essential skills for becoming a software developer?</p>
              <Image
                src="/code_icon.png"
                alt="code"
                width={36}
                height={36}
                className="p-1.5 rounded-full bg-white absolute bottom-2.5 right-2.5"
              />
            </div>
          </div>
        </div>

       
        <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto">
          <div className="flex items-center justify-end gap-5 bg-[#f0f4f9] p-4 rounded-full ml-0 md:ml-20">
            <input
              type="text"
              placeholder="Enter the Prompt Here"
              className="flex-1 bg-transparent border-none outline-none text-base p-2 md:text-lg"
            />
            <div className="flex items-center gap-4">
              <Image src="/gallery_icon.png" alt="gallery" width={24} height={24} className="cursor-pointer" />
              <Image src="/mic_icon.png" alt="mic" width={24} height={24} className="cursor-pointer" />
              <Image src="/send_icon.png" alt="send" width={24} height={24} className="cursor-pointer" />
            </div>
          </div>

          <div className="text-sm font-light text-center my-4">
            ChatBot may display inaccurate info, including about people, so double-check its responses.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
