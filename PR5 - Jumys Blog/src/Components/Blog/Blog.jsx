import './Blog.css'
function Blog() {
    return (
        <>
            <div className='d-flex flex-column align-content-center flex-wrap'>
                <h2 style={{fontFamily: 'kalnia', fontWeight: 600,}} className='fs-1 text-center my-5 mb-4'>Blogs</h2>
                <ul className='list-unstyled d-flex gap-5 mb-5 justify-content-center flex-wrap'>
                    {['Business Tips', 'Desert Recipes', 'Flavor Trends', 'Healthy Options', 'Ice Cream', 'Uncategorized' ].map((link, i)=>{
                        return (
                            <li key={i} style={{
    
                            }}><a href="" className='text-decoration-none text-black' style={{
                                fontWeight: 500,
                                fontSize: '18px',
                            }}>{link}</a></li>
                        )
                    })}
                </ul>
                
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 col-xxl-10 d-flex flex-xl-nowrap flex-xxl-nowrap flex-wrap'>
                    <div className='col-12 col-xxl-3 col-xl-3 p-5' style={{boxSizing: 'border-box'}}>
                        <div>
                            <p style={{fontFamily: 'kalnia', fontWeight: 600, fontSize: 20}} >Search</p>
                            <form action="" className='position-relative'>
                                <input type="text" name="search" id="search" placeholder="Search blog..." className='px-4 col-12 rounded-pill' style={{
                                    border: '2px solid',
                                    borderColor: 'rgba(0,0,0,0.2)',
                                    paddingBlock: '12px',
                                }}/>
                                <div className='position-absolute top-50 end-0 translate-middle-y me-4'>
                                    <svg fill="#000000B0" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/>
                                    </svg>
                                </div>
                            </form>
                        </div>
                        <div>
                            <p style={{fontFamily: 'kalnia', fontWeight: 600, fontSize: 20}} className='mt-5'>Categories</p>
                            <ul className='list-unstyled d-flex flex-column gap-2'>
                                {['Business Tips', 'Desert Recipes', 'Flavor Trends', 'Healthy Options', 'Ice Cream', 'Uncategorized' ].map((link, i)=>{
                                    return (
                                        <li key={i} style={{
                                        }}><a href="" className='text-decoration-none' style={{
                                            fontWeight: 500,
                                            fontSize: '16px',
                                            color: i == 0 ? '#e10914' : '#868686',
                                        }}>{link}</a></li>
                                    )
                                })}
                            </ul>
                        </div>
                        
                        
                        <div>
                            <p style={{fontFamily: 'kalnia', fontWeight: 600, fontSize: 20}} className='mt-5'>Related Posts</p>
                            <ul className='list-unstyled d-flex flex-column gap-2'>
                                {[{t: 'The Best Ice Cream You’ll Never Eat', i: 'blog-1_360x.avif'}, {t: 'Fancy Figs? Make this Ice Cream', i: 'blog-2_1296x.webp'}, {t: 'The Art Of Crafting Gourmet Ice Cream', i: 'blog-3_360x.avif'} ].map((item, index)=>{
                                    return (
                                        <div className='d-flex justify-content-start align-items-center csm-breakline' key={index}>
                                            <div className=' me-3 d-flex  position-relative'>
                                                <img src={`/Blog/${item.i}`} alt="" className='h-auto csm-pointer p-2 ps-0' style={{
                                                    aspectRatio: '1/1',
                                                    objectFit: 'cover',
                                                    width: '100px'
                                                }}/>
                                            </div>
                                            <div>
                                                <p style={{color: 'rgba(23,23,23,0.61)'}} className='pt-2 m-0'>Jun 30, 2024</p>
                                                <p style={{ fontWeight: 500, fontSize: '16px'}} className='csm-hover-tred csm-pointer'>{item.t}</p>
                                                <p style={{color: 'rgba(23,23,23,0.61)', fontSize: '16px', fontWeight: 500}} className='pt-2 m-0'>0 comments</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                            {['Beauty', 'Electric', 'Fashion', 'Hot', 'Jewelery', 'Organic', 'Simple', 'Sport'].map((item, index)=>{
                                return(
                                    <p key={index} className='border border-1 rounded-pill px-3 py-1 m-0 csm-pill-animate position-relative overflow-hidden' style={{
                                        fontWeight: 500,
                                        fontSize: '14px',
                                        color: '#868686',
                                    }}>{item}</p>
                                )
                            })}
                        </div>
                        
                        
                        
                    </div>
                    <div className='col-xl-9 col-xxl-9 col-lg-12 col-12 col-md-12 d-flex flex-wrap'>
                        {[{t: 'The Best Ice Cream You’ll Never Eat', i: 'blog-1_360x.avif'}, {t: 'Fancy Figs? Make this Ice Cream', i: 'blog-2_1296x.webp'}, {t: 'The Art Of Crafting Gourmet Ice Cream', i: 'blog-3_360x.avif'}, {t: 'Top Ice Cream Flavors To Sell This Year', i: 'blog-4_360x.avif'}].map((item, index)=>{
                           return ( 
                            <div className='col-12 col-sm-8 mx-sm-auto mx-md-0 mx-lg-0 mx-xl-0 mx-xxl-0 mx-0 col-md-6 col-lg-6 col-xl-4 col-xxl-4 p-2' key={index}>
                                <div className='w-100 mx-auto d-flex align-items-center justify-content-center position-relative'>
                                    <img src={`/Blog/${item.i}`} alt="" className='w-100 h-auto csm-pointer' />
                                    <p className='position-absolute bottom-0 start-0 ms-3 mb-3 bg-white px-3 py-2 rounded-pill fw-medium csm-pointer csm-hover-bred'>Business Tips</p>
                                </div>
                                <p style={{color: 'rgba(23,23,23,0.61)'}} className='pt-2 m-0'>Jun 30, 2024</p>
                                <p style={{fontFamily: 'kalnia', fontWeight: 500, fontSize: '24px'}} className='csm-hover-tred csm-pointer'>{item.t}</p>
                                <p className='' style={{color: 'rgba(23,23,23,0.61)'}}>sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero,...</p>
                                <div className='my-4 mt-5'>
                                    <a href="" className='csm-read-more text-decoration-none text-white bg-black rounded-pill px-5 py-3'>Read More</a>
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