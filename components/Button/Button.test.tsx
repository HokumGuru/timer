import { mount } from 'enzyme'
import React from 'react'
import { Button } from './Button'

describe('Button', () => {
    const getButton = (props) => {
        return mount(<Button {...props}>Hi</Button>)
    }
    it('calls onClick when clicked', () => {
        const click = jest.fn(() => {})
        let button = getButton({
            onClick: click,
        })
        button.simulate('click')
        expect(click).toHaveBeenCalled()
    })

    it('adds classNames in its props', () => {
        let button = getButton({
            className: 'test-class',
        })

        expect(button.hasClass('test-class')).toBeTruthy()
    })
})
