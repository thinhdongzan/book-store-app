function Benefit() {
    return (
        <div className="flex flex-row items-center justify-space-around bg-[#334B35] text-white p-10 py-20 mt-10 gap-10 h-[600px]">
            <div className="w-1/2 flex flex-col items-center justify-center h-full">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/pRTWFqhEDeo?si=VWc8nOMIhIZycxPj" frameborder="0"></iframe>
            </div>
            <div className="w-1/2 flex flex-col items-start justify-center gap-4 h-full pl-10">
                <h2 className="text-6xl font-bold text-[#FDAD16]">The Benefits of Reading Books</h2>
                <p className="text-2xl text-white">Reading books enhances your knowledge, sharpens your focus, and boosts creativity. Discover how just 15 minutes a day can change your life.</p>
            </div>
        </div>
    )
}

export default Benefit;