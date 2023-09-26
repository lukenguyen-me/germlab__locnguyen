import Section from '@/components/section'
import classNames from 'classnames'
import Image from 'next/image'

const Socials = [
  {
    link: 'https://github.com/phucloc8697',
    name: 'https://github.com/phucloc8697',
    icon: 'bx bxl-github',
  },
  {
    link: 'https://www.linkedin.com/in/locnguyen97/',
    name: 'https://www.linkedin.com/in/locnguyen97/',
    icon: 'bx bxl-linkedin-square',
  },
  { link: 'mailto://phucloc8697@gmail.com', name: 'phucloc8697@gmail.com', icon: 'bx bx-envelope' },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Section className="bg-linen pt-40">
        <div className="flex">
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h1 className="text-7xl font-semibold" style={{ lineHeight: 1.2 }}>
                Hey There,
                <br /> I{"'"}m Luke
              </h1>
              <p className="my-4">whose native fullname is Loc Nguyen</p>
              <ul className="pl-4">
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
            <div className="flex flex-col my-10 max-w-xl w-fit">
              <div className="flex items-center gap-4">
                <strong className="text-7xl text-accent">5</strong>
                <div className="text-2xl font-light">
                  YEARS
                  <br />
                  EXPERIENCE
                </div>
              </div>
              <div
                className={classNames(
                  'mt-4 transition-all rounded bg-white border border-slate-200',
                  'text-xl font-light translate-y-1',
                  'hover:shadow-xl hover:text-accent hover:font-medium p-4 hover:translate-y-0',
                )}
              >
                <div className="flex items-center gap-4">
                  <i className="bx bx-user-check text-4xl" />
                  <span>Ownership</span>
                </div>
              </div>
              <div
                className={classNames(
                  'mt-4 transition-all rounded bg-white border border-slate-200',
                  'text-xl font-light translate-y-1',
                  'hover:shadow-xl hover:text-accent hover:font-medium p-4 hover:translate-y-0',
                )}
              >
                <div className="flex items-center gap-4">
                  <i className="bx bx-bulb text-4xl" />
                  <span>Critical Thinking</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-end">
            <Image width={400} height={600} alt="Portrait" src="/images/portrait.png" />
          </div>
        </div>
      </Section>
    </main>
  )
}
