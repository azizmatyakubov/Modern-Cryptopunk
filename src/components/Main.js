import React,{useEffect, useState } from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ({selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])
    console.log(activePunk)
    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighight'>
                    <div className='punkContainer'>
                        <img
                         className='selectedPunk' 
                         src={activePunk.image_original_url} 
                         alt="" 
                         srcset="" />
                    </div>
                </div>

                <div className='punkDetails' style={{color: '#fff'}}>
                    <div className='title'>{activePunk.name}
                    <span className='itemNumber'>~#{activePunk.token_id}</span></div>
                    <div className='owner'>
                        <div className='ownerImageContainer'>
                            <img src={activePunk.owner.profile_img_url} alt="" />
                        </div>
                        <div className='ownerDetails'>
                            <div className='ownerNameAndHandle'>
                                <div style={{color: '#fff'} } className='ownerAdress'>{activePunk.owner.address}</div>
                                <div className='ownerHandle'>opensea.io</div>
                            </div>  
                            <div className='ownerLink'>
                                
                                <a href="https://www.instagram.com/">
                                <img src={instagramLogo} alt='' />
                                </a>
                                
                            </div>
                            <div className='ownerLink'>
                                <a href="https://twitter.com/">
                                <img src={twitterLogo} alt="" />
                                </a>
                            </div>
                            <div className='ownerLink'>
                            <a href="https://www.google.com/">
                                <img src={moreIcon} alt="" />
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Main
