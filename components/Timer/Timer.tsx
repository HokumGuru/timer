import React, { FunctionComponent, useEffect, useState } from 'react'
import { Button } from '../Button/Button'

interface Props {}
export const Timer: FunctionComponent<Props> = ({}) => {
    const [running, setRunning] = useState<Boolean>(false)
    const [counter, setCounter] = useState<number>(0)
    useEffect(() => {
        if (running) {
            const handle = setInterval(() => {
                setCounter((counter) => counter + 1)
            }, 500)
            return () => clearInterval(handle)
        }
    })
    return (
        <div className='py-6 px-12 bg-gray-200 dark:bg-gray-800 rounded-lg'>
            <input
                type='number'
                min='0'
                className='appearance-none block rounded max-w-sm w-full bg-gray-600 text-black dark:text-white text-5xl text-center font-bold'
                value={counter}
                onFocus={() => {
                    if (running) {
                        setRunning(false)
                    }
                }}
                onChange={(evt) => {
                    setCounter(parseInt(evt.target.value))
                }}
            />
            <div className='mt-12 flex flex-row items-center justify-center'>
                <Button
                    className='timer-control mr-2'
                    onClick={() => {
                        setRunning(!running)
                    }}
                >
                    {running ? 'Stop' : 'Start'}
                </Button>
                <Button
                    variant='secondary'
                    className='timer-reset'
                    onClick={() => {
                        setCounter(0)
                    }}
                >
                    Reset
                </Button>
            </div>
        </div>
    )
}
