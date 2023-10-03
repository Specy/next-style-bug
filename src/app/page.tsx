import { Button } from '$/components/Button'
import Link from 'next/link'
import s from './root.module.scss'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-5xl'>
        Main page
      </h1>
      <Button className={s.red}>
        This is a red button (overridden)
      </Button>
      <Link href={'/layer'}>
        Go to next page
      </Link>
    </main>
  )
}
