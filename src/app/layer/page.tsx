import { Button } from '$/components/Button'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className='text-5xl'>
                This is a nested page
            </h1>
            <Button>
                This button is green (default)
            </Button>
            <Link href={'/'}>
                Go to the root
            </Link>
        </main>
    )
}
