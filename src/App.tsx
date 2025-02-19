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
    <section className={`flex justify-center items-center flex-col text-left min-h-[90vh] border-b-1 border-slate-50 px-8 py-[10vh] ${bg == 'primary' ? 'bg-blue-400 rounded-sm text-white' : 'bg-white'}`}>
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
    <div className='md:text-2xl text-xl antialiased'>
      <Page bg='primary' h1='Joe Vaughan'>marketer, designer, community builder</Page>
      <Page bg='accent'>
        <section className='flex md:flex-row flex-col gap-x-12 gap-y-4'>
          <img className='md:w-40 md:h-40 w-1/4 h-1/4 rounded-full md:self-start self-center' src={joe} />
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
