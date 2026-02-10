function Blog() {
    return (
        <div className='d-flex flex-column align-content-center flex-wrap'>
            <h2 style={{fontFamily: 'kalnia', fontWeight: 600,}} className='fs-1 text-center my-5'>Blogs</h2>
            <ul className='list-unstyled d-flex gap-5 mt-4 justify-content-center'>
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

            <div className='w-100 d-flex'>
                <div className='col-3 p-5'>
                    <p style={{fontFamily: 'kalnia', fontWeight: 600, fontSize: 20}} >Search</p>
                    <form action="">
                        <input type="text" name="search" id="search" placeholder="Search blog..." className='px-4 rounded-pill' style={{
                            border: '2px solid',
                            borderColor: 'rgba(0,0,0,0.2)',
                            paddingBlock: '12px',
                        }}/>


                    </form>
                </div>
                <div className='col-9'>
                    <div className='col-4'>
                        <p style={{fontFamily: 'kalnia', fontWeight: 600, fontSize: '20px'}}>The Best Ice Cream You’ll Never Eat</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Blog;