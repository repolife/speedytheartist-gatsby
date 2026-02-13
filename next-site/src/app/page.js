import { Featured } from '@/components/Music/Featured/Featured'
import { NewsItem } from '@/components/News/NewsItem/NewsItem'
import { Title, Collection } from '@/style/base'

export default function Home() {
  if (process.env.INACTIVE === 'true') {
      return <div>Under Maintenance</div> // Basic maintenance state
  }

  return (
    <Collection>
      <Title style={{ color: 'white', paddingLeft: '0' }}>Featured Music</Title>
      <Featured />
      <Title style={{ color: 'white', paddingLeft: '0', marginTop: '2rem' }}>Latest News</Title>
      <NewsItem />
    </Collection>
  )
}
