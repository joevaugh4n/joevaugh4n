import './App.css'
import { ReactNode } from 'react'
import joe from '/joe.webp'

interface PageProps {
  children?: ReactNode;
  h1?: string;
  h2?: string;
  bg?: 'primary' | 'accent';
}

function Page({ children, h1, h2, bg = 'accent' }: PageProps) {
  return (
    <section className={`flex justify-center items-center flex-col text-left md:min-h-[90vh] min-h-screen border-b-1 border-slate-50 p-8 ${bg == 'primary' ? 'bg-blue-400 rounded-sm text-white' : 'bg-white'}`}>
      <div className='max-w-[60ch] '>
        {h1 && <h1>{h1}</h1>}
        {h2 && <h2>{h2}</h2>}
        {children && <p>{children}</p>}
      </div>
    </section>
  )
}

function App() {
  return (
    <div className='md:text-2xl antialiased'>
      <Page bg='primary' h1='Joe Vaughan'>marketer, designer, developer, internet community builder</Page>
      <Page bg='accent'>
        <section className='flex md:flex-row flex-col gap-x-8 gap-y-4'>
          <img className='md:w-40 w-1/2 rounded-full' src={joe} />
          <div>
            <p>Joe (he/him) is an arts marketer, content creator, and writer. His work has been featured in international press. He currently leads marketing at The Museum of English Rural Life, where he divides his time between Reading and the Internet.</p>
            <p>Follow Joe on <a href="https://bsky.app/profile/joevaughan.net" title="Bluesky">Bluesky</a> or <a href="https://www.linkedin.com/in/joevaugh4n/" title="LinkedIn">LinkedIn</a>.</p>
          </div>
        </section>
      </Page>
    </div>
  )
}

export default App
