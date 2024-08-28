import Section from '@/components/section'
import classNames from 'classnames'
import Image from 'next/image'

const Socials = [
  {
    link: 'https://github.com/lukenguyen-me',
    name: 'https://github.com/lukenguyen-me',
    icon: 'bx bxl-github',
  },
  {
    link: 'https://www.linkedin.com/in/lukenguyen-me/',
    name: 'https://www.linkedin.com/in/lukenguyen-me/',
    icon: 'bx bxl-linkedin-square',
  },
  { link: 'mailto://phucloc8697@gmail.com', name: 'phucloc8697@gmail.com', icon: 'bx bx-envelope' },
]

const Characters = [
  {
    first: 'L',
    text: 'evel-headed',
  },
  {
    first: 'O',
    text: 'wnership',
  },
  {
    first: 'C',
    text: 'ritical Thinking',
  },
]

const Experience = () => (
  <div className="flex items-center gap-4">
    <strong className="text-7xl text-accent">5</strong>
    <div className="text-2xl font-light">
      YEARS
      <br />
      EXPERIENCE
    </div>
  </div>
)

function SectionIntro() {
  return (
    <Section className="bg-main pt-10 md:pt-20 overflow-hidden">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-5xl md:text-7xl font-semibold" style={{ lineHeight: 1.2 }}>
              Hey There,
              <br /> I{"'"}m Luke
            </h1>
            <p className="my-4 font-light">
              whose native fullname is <strong className="font-medium">Loc Nguyen</strong>
            </p>
          </div>
          <div className="hidden md:block pb-10">
            <Experience />
          </div>
        </div>
        <div className="max-w-xs overflow-visible flex items-end justify-center relative">
          <Image
            width={600}
            height={600}
            className="absolute max-w-none top-0 object-cover"
            alt="Portrait"
            src="/images/bg_brush.svg"
          />
          <Image
            width={500}
            height={500}
            style={{ maxWidth: 'unset' }}
            alt="Portrait"
            src="/images/portrait.png"
            className="relative"
          />
        </div>
        <div className="flex flex-col justify-end gap-8 md:gap-40">
          <div className="block md:hidden">
            <Experience />
          </div>
          <div className="flex flex-col justify-end pl-0 md:pl-10">
            {Characters.map((e, i) => (
              <div
                key={i}
                className={classNames(
                  'flex items-center justify-between gap-4 rounded-lg transition-all',
                  'translate-y-1 px-4 py-0 md:py-2',
                  'hover:shadow-xl hover:text-accent hover:translate-y-0 hover:bg-white',
                )}
              >
                <div className="flex items-end gap-2">
                  <strong className="text-xl">{e.first}</strong>
                  <span className="font-light">{e.text}</span>
                </div>
                <i className={classNames('bx bx-check text-2xl')} />
              </div>
            ))}
          </div>
          <ul className="pl-4 pb-8">
            {Socials.map((e) => (
              <li key={e.link} className="flex items-center gap-2">
                <i className={e.icon} />
                <a
                  className="text-sm transition-all text-accent hover:underline"
                  target="_blank"
                  href={e.link}
                >
                  {e.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default SectionIntro
