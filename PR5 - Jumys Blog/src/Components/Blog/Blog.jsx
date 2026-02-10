import './Blog.css'
function Blog() {
    return (
        <>
            <div className='d-flex flex-column align-content-center flex-wrap'>
                <h2 style={{fontFamily: 'kalnia', fontWeight: 600,}} className='fs-1 text-center my-5 mb-4'>Blogs</h2>
                <ul className='list-unstyled d-flex gap-5 mb-5 justify-content-center flex-wrap'>
                    {['Business Tips', 'Desert Recipes', 'Flavor Trends', 'Healthy Options', 'Ice Cream', 'Uncategorized' ].map((link)=>{
                        return (
                            <li style={{
    
                            }}><a href="" className='text-decoration-none text-black' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 500,
                                fontSize: '18px',
                            }}>{link}</a></li>
                        )
                    })}
                </ul>
                
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 col-xxl-9 d-flex flex-xl-nowrap flex-xxl-nowrap flex-wrap'>
                    <div className='col-12 col-xxl-3 col-xl-3 p-5' style={{boxSizing: 'border-box'}}>
                        <p style={{fontFamily: 'kalnia', fontWeight: 600, fontSize: 20}} >Search</p>
                        <form action="">
                            <input type="text" name="search" id="search" placeholder="Search blog..." className='px-4 col-12 rounded-pill' style={{
                                border: '2px solid',
                                borderColor: 'rgba(0,0,0,0.2)',
                                paddingBlock: '12px',
                            }}/>
    
    
                        </form>
                    </div>
                    <div className='col-xl-9 col-xxl-9 col-lg-12 col-12 col-md-12 d-flex flex-wrap'>
                        {[{t: 'The Best Ice Cream You’ll Never Eat', i: 'blog-1_360x.avif'}, {t: 'Fancy Figs? Make this Ice Cream', i: 'blog-2_1296x.webp'}, {t: 'The Art Of Crafting Gourmet Ice Cream', i: 'blog-3_360x.avif'}, {t: 'Top Ice Cream Flavors To Sell This Year', i: 'blog-4_360x.avif'}].map((item, index)=>{
                           return ( 
                            <div className='col-12 col-sm-8 mx-sm-auto mx-md-0 mx-lg-0 mx-xl-0 mx-xxl-0 mx-0 col-md-6 col-lg-6 col-xl-4 col-xxl-4 p-2' key={index}>
                                <div className='w-100 mx-auto d-flex align-items-center justify-content-center position-relative'>
                                    <img src={`/Blog/${item.i}`} alt="" className='w-100 h-auto' />
                                </div>
                                <p style={{color: 'rgba(23,23,23,0.61)', fontFamily: 'DM Sans',}} className='pt-2 m-0'>Jun 30, 2024</p>
                                <p style={{fontFamily: 'kalnia', fontWeight: 500, fontSize: '24px'}}>{item.t}</p>
                                <p className='' style={{color: 'rgba(23,23,23,0.61)', fontFamily: 'DM Sans',}}>sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero,...</p>
                                <div className='my-4 mt-5'>
                                    <a href="" className='csm-read-more text-decoration-none text-white bg-black rounded-pill px-5 py-3' style={{fontFamily: 'DM Sans',}}>Read More</a>
                                </div>
                            </div>
                           ) 
                        })}
                    </div>
                </div>
    
            </div>
        </>
    )
}
export default Blog;