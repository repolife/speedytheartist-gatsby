import React, { useEffect, useState } from 'react';
import { Footer as FooterContiner } from "../style/base"
import { SocialLink } from './Social/SocialLinks/SocialLinks';

export const Footer = () => {

    return (<FooterContiner>
        <SocialLink name="twitter" props={{ size: 20, color: 'white' }} />
        <SocialLink name="linktree" props={{ size: 20, color: 'white' }} />
        <SocialLink name="facebook" props={{ size: 20, color: 'white' }} />

    </FooterContiner>)

}

export default Footer