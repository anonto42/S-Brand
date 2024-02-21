import React, { useContext } from 'react'
import myContext from '../../Context/MyContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>About</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>Always<span className=' text-pink-500'> available </span> at your service </h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/420626434_344488128411211_6767612565160676981_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGaBkCGIXOrDgWaUqg_cU8fFCUCOz4_qMgUJQI7Pj-oyJFDcGkSILbfQpZyUwiTlT-1jLowb3ys2pq4Qti_5MK8&_nc_ohc=FWKXkU3d0U0AX-Xc8fg&_nc_ht=scontent.fdac157-1.fna&oh=00_AfBBlLECBk7QqN18ddNOtboUErSSm34qEiRMnBxKXNwSgg&oe=65D959AF" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki tax dermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">MD: Sohidul Islam Ananto</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Web Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://pps.whatsapp.net/v/t61.24694-24/100060327_148393370089929_1195091181494897171_n.jpg?ccb=11-4&oh=01_AdR0NQfa4_-Psn1Na2WdsxDzs3xQC0SHv29nfxS-6rTEHw&oe=65DC2C82&_nc_sid=e6ed6c&_nc_cat=109" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">MD: Shakil Khondokar</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Graphic Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">MD/MST: _____ _____</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Call support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial