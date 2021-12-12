import { render } from '@testing-library/react'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    render(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>

      //verificar se tem duas logos
      // verficar se tem heading principal do banner
      // verificar se tem subtitle
      // verificar se tem o title do content
      // verificar se o children está sendo renderizado
    )
  })
})
