import { mount } from 'enzyme'
import React from 'react'
import { Timer } from './Timer'

describe('Timer', () => {
    const getWrapper = (props) => {
        return mount(<Timer {...props} />)
    }
    it('Starts when the control button is clicked', () => {
        let timer = getWrapper({})
        expect(timer.find('.timer-control').first().text()).toEqual('Start')
        timer.find('.timer-control').first().simulate('click')
        expect(timer.find('.timer-control').first().text()).toEqual('Stop')
    })

    it('Stops the timer when the input is focused', () => {
        let timer = getWrapper({})
        timer.find('.timer-control').first().simulate('click')
        expect(timer.find('.timer-control').first().text()).toEqual('Stop')
        timer.find('input').simulate('focus')
        expect(timer.find('.timer-control').first().text()).toEqual('Start')
    })

    it('Allows the user to manually enter a value', () => {
        let timer = getWrapper({})
        timer.find('input').simulate('change', { target: { value: '123' } })
        expect(timer.find('input').prop('value')).toBe(123)
    })

    it('Increments the timer while running', async () => {
        let timer = getWrapper({})
        expect(timer.find('input').prop('value')).toBe(0)
        setTimeout(() => {
            expect(timer.find('input').prop('value')).toBe(3)
        }, 600)
    })
})
