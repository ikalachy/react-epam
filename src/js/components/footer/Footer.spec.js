import React from 'react'
import renderer from 'react-test-renderer'

import Footer from './Footer'

it('render Footer component without children', () => {
    const actualSnapshot = renderer
        .create(<Footer />)
        .toJSON()

    expect(actualSnapshot).toMatchSnapshot()
})

it('render Footer component with children', () => {
    const actualSnapshot = renderer
        .create(
            <Footer>
                <h1>Hello, Footer</h1>
            </Footer>)
        .toJSON()

    expect(actualSnapshot).toMatchSnapshot()
})

