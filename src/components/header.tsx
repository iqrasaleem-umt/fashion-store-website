export default function Header() {
    return (
      <div className="relative flex w-full h-10">
        {/* Left half - Black */}
        <div className="flex-1 bg-black"></div>
  
        {/* Center Text */}
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="font-bold text-lg text-white">Fashion Store</p>
        </div>
  
        {/* Right half - Pink */}
        <div className="flex-1 bg-pink-900"></div>
      </div>
    );
  }
  
  
  
