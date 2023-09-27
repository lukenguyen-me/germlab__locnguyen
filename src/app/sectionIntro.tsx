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
function SectionIntro() {
  return (
    <Section className="bg-linen pt-40">
      <div className="flex gap-10">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-7xl font-semibold" style={{ lineHeight: 1.2 }}>
              Hey There,
              <br /> I{"'"}m Luke
            </h1>
            <p className="my-4">whose native fullname is Loc Nguyen</p>
          </div>
          <div className="flex items-center gap-4 pb-10">
            <strong className="text-7xl text-accent">5</strong>
            <div className="text-2xl font-light">
              YEARS
              <br />
              EXPERIENCE
            </div>
          </div>
        </div>
        <div className="max-w-sm overflow-visible flex items-end justify-center">
          <Image
            width={500}
            height={500}
            style={{ maxWidth: 'unset', marginTop: -200 }}
            alt="Portrait"
            src="/images/portrait.png"
          />
        </div>

        <div className="flex flex-col gap-20">
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
          <div className="flex justify-end gap-4 pb-10">
            <div
              className={classNames(
                'flex flex-col items-center bg-white rounded-lg transition-all',
                'text-lg font-light translate-y-1',
                'hover:shadow-xl hover:text-accent hover:font-medium p-4 hover:translate-y-0 hover:bg-white',
              )}
            >
              <i className="bx bx-user-check text-4xl" />
              <span>Ownership</span>
            </div>
            <div
              className={classNames(
                'flex flex-col items-center bg-white rounded-lg transition-all',
                'text-lg font-light translate-y-1',
                'hover:shadow-xl hover:text-accent hover:font-medium p-4 hover:translate-y-0 hover:bg-white',
              )}
            >
              <i className="bx bx-bulb text-4xl" />
              <span>Critical Thinking</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default SectionIntro
