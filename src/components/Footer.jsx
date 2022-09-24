import React, {useEffect, useState} from 'react';
import {Footer as FooterContiner} from "../style/base"
import { SocialLink } from './Social/SocialLink';


export const Footer = () => {

    return(<FooterContiner>
    <SocialLink name="twitter" props={{size:20, color:'green' }}/>

    </FooterContiner>)
     
}

export default Footer