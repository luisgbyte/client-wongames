import { gql, useQuery } from '@apollo/client'

import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import hightligthMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  const { data, loading, error } = useQuery(gql`
    query getGame {
      games {
        name
      }
    }
  `)

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error}</p>

  if (data) return <p>{JSON.stringify(data, null, 2)}</p>

  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: hightligthMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: hightligthMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: hightligthMock
    }
  }
}
