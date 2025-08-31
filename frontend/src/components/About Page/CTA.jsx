function CTA() {
    return (
        <div className="flex flex-col items-center justify-center bg-[#FDAD16] text-black p-6 lg:p-10 mt-20 h-auto lg:h-[300px] mx-6 lg:ml-20 lg:mr-20 w-full lg:w-full shadow-lg rounded-lg lg:rounded-none">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center leading-tight mb-4 lg:mb-6">
                Ready to Start Reading?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-center leading-relaxed mb-6 lg:mb-8 max-w-2xl">
                Join our community of book lovers and start your reading journey today.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 font-semibold text-lg">
                Get Started
            </button> 
        </div>
    )
}

export default CTA;