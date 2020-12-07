import { Button } from '../components/Button/Button'
import { Timer } from '../components/Timer/Timer'

export default function Home() {
    return (
        <div className='w-screen h-screen p-6 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900'>
            <Timer />
        </div>
    )
}
