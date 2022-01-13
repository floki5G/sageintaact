import React, { useState } from 'react'
import db from '../../api/db.json';
import './index.css'

export const Header = () => {

    console.log(db.message)

    const [block, setBlock] = useState('null')

    return (
        <>

            <div className='header'>
                <div className='header-desc'>
                    Watch a short interactive demo and live Q&A – Sign up now →
                </div>
                <div className='header-button'>

                    <button className='header-search'> <i className="fas fa-search "></i>    </button>

                    <button className='btn bg-transparent header-Contact'>Contact </button>

                    <button className='btn bg-transparent header-signIN'>Sign in</button>


                </div>
            </div>
            <div className='category'>
                <div className='category-heading'  style={{ fontSize: "30px" }}>
                    {/* <span className='bg-success'> sage</span>
                    
                    <span>Intacct</span> */}
                    <img src='https://www.sageintacct.com/sites/default/files/sage-intacct-logo.svg' />
                </div>
                <div className='category-cate'  style={{display:"flex" ,justifyContent:"center"}}>
                        {db.message.map((e) => <div className='mx-2 px-3'>{e.name}< i style={{fontSize:"10px"}} class="fas fa-chevron-down px-2"></i> </div>)}
                </div>
                <div className='category-getprice'>

                    <span className='bg-success py-2 px-4 text-white'>Get pricing</span>

                </div>
            </div>


        </>
    )
}