import missonImg1 from "../../assets/images/aboutpage/misson1.jpg";
import missonImg2 from "../../assets/images/aboutpage/misson2.jpg";

const Misson = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 text-center">
                Our Mission
            </h2>
            
            {/* First Mission Section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center w-full">
                <img 
                    className="w-full lg:w-1/2 object-cover h-64 lg:h-auto rounded-t-lg lg:rounded-l-lg lg:rounded-t-none" 
                    src={missonImg1} 
                    alt="Quality Books" 
                />
                <div className="w-full lg:w-1/2 bg-[#334B35] flex flex-col justify-center p-6 lg:p-8 rounded-b-lg lg:rounded-r-lg lg:rounded-b-none">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FDAD16] mb-4 leading-tight">
                        Bringing Quality Books Closer To Everyone
                    </h3>
                    <p className="text-white text-base lg:text-lg leading-relaxed">
                        We strive to make reading more accessible — for students in cities, families in the countryside, or anyone with a thirst for knowledge.
                        <br/><br/>
                        Our team carefully selects every title we offer, working with reputable publishers to ensure that the books you receive are meaningful, relevant, and of the highest quality. Whether you're looking for the latest bestseller or a timeless classic, Libro is your trusted source.
                    </p>
                </div>
            </div>
            
            {/* Second Mission Section */}
            <div className="flex flex-col lg:flex-row-reverse items-stretch justify-center w-full">
                <img 
                    className="w-full lg:w-1/2 object-cover h-64 lg:h-auto rounded-t-lg lg:rounded-r-lg lg:rounded-t-none" 
                    src={missonImg2} 
                    alt="Lifelong Reading" 
                />
                <div className="w-full lg:w-1/2 bg-[#334B35] flex flex-col justify-center p-6 lg:p-8 rounded-b-lg lg:rounded-l-lg lg:rounded-b-none">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FDAD16] mb-4 leading-tight">
                        Inspiring Lifelong Reading and Learning Habits
                    </h3>
                    <p className="text-white text-base lg:text-lg leading-relaxed">
                        We don't just sell books — we cultivate a reading culture.
                        <br/><br/>
                        From personalized reading recommendations to hosting book clubs and online reading challenges, we aim to make reading a joyful part of daily life.
                        <br/><br/>
                        We believe that developing the habit of reading — especially from a young age — opens doors to creativity, empathy, and continuous growth throughout life.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Misson;