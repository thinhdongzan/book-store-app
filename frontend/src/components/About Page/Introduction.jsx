import introImg from "../../assets/images/aboutpage/introbackground.jpg";
const Introduction = () => {
    return (
        <div className="flex flex-row items-center justify-center ml-20 mr-20 mb-20">
            <div className="w-1/2 flex flex-col items-center justify-center h-full">
                <img src={introImg} alt="Introduction" />
            </div>
            <div className="w-1/2 flex flex-col items-start justify-center gap-4 h-full pl-20">
                <h2 className="text-6xl font-bold">About Us</h2>
                <p className="text-2xl">Libro is where the love of reading begins – a place where you’ll find not only great books, but also inspiration, knowledge, and a sense of connection with a community of book lovers. Whether you're a lifelong reader or just starting your reading journey, Libro is here to welcome you.</p>
                <div className="flex flex-row items-center justify-center gap-4">
                    <button className="bg-[#FDAD16] text-black px-4 py-2 rounded-md">Read More</button>
                </div>
            </div>
        </div>
    );
}

export default Introduction;