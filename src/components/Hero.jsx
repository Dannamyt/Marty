import banner7 from '../assets/banner7.jpg'; 
import ads1 from '../assets/ads1.jpg'; 
import ads2 from '../assets/ads2.jpg'; 
import ads3 from '../assets/ads3.jpg'; 
import ads4 from '../assets/ads4.jpg'; 
import rightArrow2 from '../assets/rightArrow2.png';

const Hero = () => {
    return (
        <div>
            <div className="relative flex items-center">
                {/* Banner Image */}
                <img
                    src={banner7}
                    alt="Fashion Banner"
                    className="w-full h-screen object-cover rounded-lg"
                />
                <div className="absolute top-40 left-8 p-6">
                    <h1 className="text-4xl md:text-6xl w-4/6 font-bold mb-4">EXPERIENCE LUXURY EVERYDAY</h1>
                    <p className='w-50 md:w-96 font-switzer my-2'>
                        From the scent that sets the mood to the furniture that shapes your space, we bring you a curated collection of quality products. Find everyday essentials and luxury items, all designed to elevate your life.
                    </p>
                    <button className="flex items-center bg-gray-900 hover:bg-gray-600 text-white font-bold py-1 px-8 rounded">
                        Explore
                        <span className="ml-2">
                            <img src={rightArrow2} className='arrow' alt="Right Arrow" />
                        </span>
                    </button>
                </div>
            </div>

            <div className='mb-6'>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2'>
                        <img src={ads1} alt="" className='w-full h-auto' />
                    </div>
                    <div className='flex flex-col p-2 justify-between w-full md:w-1/2'>
                        <p className='font-switzer text-xl md:text-4xl'>Indulge in the Art of Fragrance</p>
                        <p className='font-switzer mb-6 text-sm md:text-base'>Immerse yourself in our luxurious collection where each bottle is a masterpiece crafted to enhance your presence. From delicate and light notes to rich, complex aromas, we offer scents that evoke elegance and sophistication. Whether for everyday wear or a special occasion, indulge in a fragrance that turns heads and captivates hearts.</p>
                    </div>
                </div>

                <div className='flex flex-col-reverse md:flex-row-reverse'>
                    <div className='w-full md:w-1/2'>
                        <img src={ads4} className='w-full h-auto' alt="" />
                    </div>
                    <div className='flex flex-col justify-between p-2 w-full md:w-1/2'>
                        <p className='font-switzer text-xl md:text-4xl'>Glow Like Never Before</p>
                        <p className='font-switzer mb-6 text-sm md:text-base'>Illuminate your complexion and let your natural radiance shine through with our curated collection of glow-enhancing cosmetics. From silky highlighters that catch the light just right to deeply hydrating foundations that leave your skin with a dewy finish, we’re committed to helping you achieve that sought-after glow. With our blend of luxurious ingredients and advanced formulas, looking luminous has never been easier. Whether its an everyday glow or a red-carpet-ready finish, shop our collection today and glow from within—because every woman deserves to feel radiant, inside and out.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;