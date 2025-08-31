function Benefit() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center bg-[#334B35] text-white p-6 lg:p-10 py-16 lg:py-20 mt-10 gap-6 lg:gap-10 min-h-[600px] lg:h-[600px]">
            {/* Video Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center h-full mb-6 lg:mb-0">
                <div className="w-full max-w-2xl">
                    <iframe 
                        className="w-full aspect-video rounded-lg shadow-lg" 
                        src="https://www.youtube.com/embed/pRTWFqhEDeo?si=VWc8nOMIhIZycxPj" 
                        frameBorder="0" 
                        title="Benefits of Reading"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            
            {/* Text Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-4 lg:gap-6 h-full px-4 lg:pl-10 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FDAD16] leading-tight">
                    The Benefits of Reading Books
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed max-w-2xl lg:max-w-none">
                    Reading books enhances your knowledge, sharpens your focus, and boosts creativity. Discover how just 15 minutes a day can change your life.
                </p>
            </div>
        </div>
    )
}

export default Benefit;