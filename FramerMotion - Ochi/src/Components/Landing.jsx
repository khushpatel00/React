import { img } from 'motion/react-client'
import React from 'react'

function Landing() {
    return (
        <>
            <div className='px-20 relative h-screen flex flex-col justify-center gap-0 overflow-x-hidden -translate-y-1/12'>
                {['We create', 'eye-opening', 'presentations'].map((item, index) => {
                    return (
                        <div className='flex items-end gap-3 last:pt-3' key={index}>
                            {index == 1 ? <img src="/images/landingDivider.jpg" className='rounded-xl translate-y-1/8 scale-y-90 duration-300' alt="" /> : ''}
                            <p key={index} className='font-semibold leading-38 text-zinc-800 text-[180px] font-[Founders_Grotesk_Condensed] uppercase'>{item}</p>
                        </div>
                    )
                })}

                <div className='absolute flex justify-between bottom-0 left-0 px-10 text-xl neue w-full border-t border-zinc-400 py-10  '>
                    <p>Presentation and storytelling agency</p>
                    <p>For innovation teams and global brands</p>
                    <p className='uppercase border px-3 py-1 rounded-full font-normal tracking-wide text-black'>Start The Project</p>
                </div>
            </div>
        </>
    )
}

export default Landing