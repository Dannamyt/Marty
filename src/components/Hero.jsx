import rightArrow2 from '../assets/rightArrow2.png'
function Hero(){
    
    return(
        <>
        <div className="mt-8">
            <h1 className="">ELEVATE YOUR FASHION SENSE</h1>
            <button >Explore <span ><img src={rightArrow2} className='arrow' alt="" /></span></button>
            {/* <p>Here to stay</p> */}
            {/* <div ><img src={banner5} className='hero-img' alt="" /></div> */}
        </div>
        </>
    )
}
export default Hero