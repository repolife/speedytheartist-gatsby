import StyledComponentsRegistry from '@/lib/registry'
import { Container, GlobalStyle } from '@/style/base'
import { Nav } from '@/components/Nav/Nav'
import { ThemeContextProvider } from '@/context/ThemeContext'
import { MusicContextProvider } from '@/context/MusicContext'
import { getAllNews, getLinks, getAllMusic } from '@/lib/sanity-service'

export const metadata = {
  title: 'Speedy The Artist',
  description: 'Speedy The Artist is Seattle hip hop artist born in Venezuela with a universal sound.',
}

export default async function RootLayout({ children }) {
  const newsContent = await getAllNews()
  const footerLinksContent = await getLinks()
  const musicContent = await getAllMusic()

  const footerLinks = footerLinksContent.map(link => ({
      name: link.name,
      url: link.url,
      type: link.type
  }))

  const mappedMusic = musicContent.map(item => ({
      id: item._id,
      title: item.title,
      artwork: item.image,
      url: item.spotify,
      releaseDate: item.date,
      pathname: `/music/${item.title.replace(/\s+/g, '_').toLowerCase()}`,
  }))

  const featured = mappedMusic[0] || null

  return (
    <html lang="en">
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <ThemeContextProvider>
            <MusicContextProvider 
                music={mappedMusic} 
                featured={featured} 
                news={newsContent}
            >
              <Container>
                <Nav siteTitle={metadata.title} footerLinks={footerLinks} />
                {children}
              </Container>
            </MusicContextProvider>
          </ThemeContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
