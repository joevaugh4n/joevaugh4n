import kitty from '/kitty.jpg'

interface ButtonProps {
  label: string;
}

function Button({ label }: ButtonProps) {
  return (
    <button onClick={() => alert('Joe Vaughan is a copywriter, social media manager, and museum professional. His work has appeared in international press. He lives in Reading.')}
      className='bg-slate-100 px-1 py-1 shadow text-sm w-fit h-fit'>
      {label}
    </button>
  )
}

function Title() {

  return (
    <header className='flex md:flex-col gap-x-4 gap-y-2'>
      <section>
        <h1 className='text-xl font-bold lowercase'>Joe Vaughan</h1>
        <p>internet person</p>
      </section>
      <Button label='about' />
    </header>
  )
}

interface TimestampProps {
  title: string;
  prose: string;
  dates: string;
}
function Timestamp({ title, prose, dates }: TimestampProps) {
  return (
    <li className='text-balance'>
      <h3 className='font-semibold'>{title}{dates && `, ${dates}`}</h3>
      <p className=' text-gray-500'>{prose}</p>
    </li>
  )
}

function Timeline() {
  return (
    <ul className='gap-4 flex flex-col font-serif'>
      <Timestamp title='The Museum of English Rural Life' prose='Head of Marketing' dates='2024 to present' />
      <Timestamp title='Storybook' prose='Global Community Manager' dates='2023-2024' />
      <Timestamp title='The Museum of English Rural Life/Reading Museum' prose='Digital Content Editor' dates='2019-2023' />
      <Timestamp title='Fusion Unlimited' prose='Senior Content Consultant' dates='2016-2019' />
      <Timestamp title='Lots of service jobs' prose='Employee' dates='2011-2015' />
      <Timestamp title='Employee of the month' prose='baby' dates='1993' />
    </ul>
  )
}

export default function App() {
  return (
    <div className='grid md:grid-cols-[2fr_4fr] gap-8'>
      <Title />
      <Timeline />
    </div>
  )
}