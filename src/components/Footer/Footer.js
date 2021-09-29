import React from "react";
import './Footer.css'
import wpp from '../../assets/images/sociaMedias/wpp.svg'
import insta from '../../assets/images/sociaMedias/insta.svg'
import youtube from '../../assets/images/sociaMedias/youtube.svg'
import facebook from '../../assets/images/sociaMedias/face.svg'

export default function Footer(props) {
    return (
        <div className='containerFooter'>
            <a href='' target='_blank'><img className='iconSocialFooter' src={wpp} /></a>
            <a href='https://www.instagram.com/idevangelho/?utm_medium=copy_link' target='_blank'><img className='iconSocialFooter' src={insta} /></a>
            <a href='https://www.youtube.com/channel/UCvm55wgtIh-CwKxIGs5FgfA' target='_blank'><img className='iconSocialFooter' src={youtube} /></a>
            <a href='https://www.facebook.com/search/top?q=igreja%20do%20evangelho' target='_blank'><img className='iconSocialFooter' src={facebook} /></a>
        </div>
    );
}