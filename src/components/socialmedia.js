import React from "react"
import { SocialMediaLinks } from "../style/base"
import {
  FaTwitterSquare,
  FaInstagram,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaSpotify,
  FaSoundcloud,
  FaApple,
  FaAmazon,
  FaNapster,
  FaYoutube,
} from "react-icons/fa"

const SocialMedia = () => {
  const iconSize = `3em`

  return (
    <SocialMediaLinks>
      <a
        title="Spotify"
        href="https://open.spotify.com/album/0Ela0hmFmPSvGfBAo4o2Yu?si=9j8elrT9TmGXkpR4DtXYZQ"
      >
        {" "}
        <FaSpotify size={iconSize} />
      </a>

      <a
        title="Apple Music"
        href="https://music.apple.com/us/album/beyond/1527765241"
      >
        {" "}
        <FaApple size={iconSize} />
      </a>
      <a
        title="Amazon Music"
        href="https://www.amazon.com/Beyond-Speedy/dp/B08FXP3HSN/ref=sr_1_8?dchild=1&keywords=speedy+beyond&qid=1599201664&sr=8-8"
      >
        {" "}
        <FaAmazon size={iconSize} />
      </a>
      <a title="Soundcloud" href="https://soundcloud.com/thisisspeedy">
        {" "}
        <FaSoundcloud size={iconSize} />
      </a>
      <a
        title="Napster"
        href="https://us.napster.com/artist/speedy/album/beyond-504428358"
      >
        {" "}
        <FaNapster size={iconSize} />
      </a>
      <a
        title="Youtube"
        href="https://www.youtube.com/user/SpeedytheartistTV/videos"
      >
        <FaYoutubeSquare size={iconSize} />
      </a>
      <a title="Instagram" href="https://www.instagram.com/speedy_on_ig/">
        {" "}
        <FaInstagram size={iconSize} />
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
