import styles from './HeroBanner.module.css';
import MainPane from '../assets/images/herobanner/MainPane.png';
import AdventurePane from '../assets/images/herobanner/AdventurePane.png';
import ComicPane from '../assets/images/herobanner/ComicPane.png';
import FairyTalePane from '../assets/images/herobanner/FairyTalePane.png';
import HorrorPane from '../assets/images/herobanner/HorrorPane.png';
import NovelPane from '../assets/images/herobanner/NovelPane.png';
import RomancePane from '../assets/images/herobanner/RomancePane.png';
import SelfHelpPane from '../assets/images/herobanner/SelfHelpPane.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function HeroBanner() {
    return (
        <div className='w-100 d-flex flex-column align-items-center'>
            <div className="w-100 carousel slide" id='myCarousel' data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className='carousel-item active'>
                        <img className='w-100' src={MainPane} alt="MainPane" />
                    </div>
                    <div className='carousel-item'>
                        <img className='w-100' src={AdventurePane} alt="AdventurePane" />
                    </div>
                    <div className='carousel-item'>
                        <img className='w-100' src={ComicPane} alt="ComicPane" />
                    </div>
                    <div className='carousel-item'>
                        <img className='w-100' src={FairyTalePane} alt="FairyTalePane" />
                    </div>
                    <div className='carousel-item'>
                        <img className='w-100' src={HorrorPane} alt="HorrorPane" />
                    </div>
                    <div className='carousel-item'>
                        <img className='w-100' src={NovelPane} alt="NovelPane" />
                    </div>
                    <div className='carousel-item'>
                        <img className='w-100' src={RomancePane} alt="RomancePane" />
                    </div>
                    <div className='carousel-item'>
                        <img className='w-100' src={SelfHelpPane} alt="SelfHelpPane" />
                    </div>
                </div>
                <div className='carousel-indicators'>
                    <button data-bs-target="#myCarousel" data-bs-slide-to="0" className='active' type='button' aria-current='true' aria-label='Slide 1'></button>
                    <button data-bs-target="#myCarousel" data-bs-slide-to="1" type='button'></button>
                    <button data-bs-target="#myCarousel" data-bs-slide-to="2" type='button'></button>
                    <button data-bs-target="#myCarousel" data-bs-slide-to="3" type='button'></button>
                    <button data-bs-target="#myCarousel" data-bs-slide-to="4" type='button'></button>
                    <button data-bs-target="#myCarousel" data-bs-slide-to="5" type='button'></button>
                    <button data-bs-target="#myCarousel" data-bs-slide-to="6" type='button'></button>
                    <button data-bs-target="#myCarousel" data-bs-slide-to="7" type='button'></button>
                </div>
            </div>
        </div>
    );    
}

export default HeroBanner;