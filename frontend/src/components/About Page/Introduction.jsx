import introImg from "../../assets/images/aboutpage/introbackground.jpg";

const Introduction = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:ml-20 lg:mr-20 mb-20 gap-8 lg:gap-0">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                <img 
                    src={introImg} 
                    alt="Introduction" 
                    className="w-full max-w-md lg:max-w-none rounded-lg shadow-lg"
                />
            </div>
            
            {/* Text Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-6 lg:gap-4 h-full lg:pl-20 text-start lg:text-left">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                    About Us
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl lg:max-w-none">
                    Libro is where the love of reading begins – a place where you'll find not only great books, but also inspiration, knowledge, and a sense of connection with a community of book lovers. Whether you're a lifelong reader or just starting your reading journey, Libro is here to welcome you.
                </p>
                <div className="flex flex-row items-center justify-center gap-4">
                    <button className="bg-[#FDAD16] text-black px-6 py-3 rounded-md hover:scale-105 transition-all duration-300 font-semibold text-lg">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Introduction;