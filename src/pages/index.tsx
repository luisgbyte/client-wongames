import { gql, useQuery } from '@apollo/client'

import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import hightligthMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'

const GET_GAMES = gql`
  query getGame {
    games {
      name
    }
  }
`

export default function Index(props: HomeTemplateProps) {
  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: GET_GAMES })

  return {
    props: {
      data: data,
      initialApolloState: apolloClient.cache.extract(),
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
