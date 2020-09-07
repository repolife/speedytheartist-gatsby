import React from "react"
import { SocialMediaLinks } from "../style/base"
import {
  FaTwitterSquare,
  FaInstagram,
  FaFacebookSquare,
  FaYoutubeSquare,
} from "react-icons/fa"

const SocialMedia = () => {
  const iconSize = `3em`

  return (
    <SocialMediaLinks>
      <a title="Instagram" href="https://www.instagram.com/speedy_on_ig/">
        {" "}
        <FaInstagram size={iconSize} />
      </a>
      <a
        title="Youtube"
        href="https://www.youtube.com/user/SpeedytheartistTV/videos"
      >
        <FaYoutubeSquare size={iconSize} />
      </a>
      <a title="Twitter" href="https://twitter.com/speedytheartist">
        <FaTwitterSquare size={iconSize} />
      </a>
      <a
        title="Facebook"
        href="https://www.facebook.com/Speedy-2856732521218860/"
      >
        <FaFacebookSquare size={iconSize} />
      </a>
    </SocialMediaLinks>
  )
}

export default SocialMedia
