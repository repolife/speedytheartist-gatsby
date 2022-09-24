import React, {useEffect, useState} from 'react';
import { FaTwitter, FaInstagram} from 'react-icons/fa'
import {Social} from "../style/base"
export const Footer = () => {

    return(<Social><FaTwitter size={15} color='white' /><FaInstagram size={15} color='white' /></Social>)
    
}

export default Footer