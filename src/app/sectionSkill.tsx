import Section from '@/components/section'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

const SkillFrontend = [
  {
    name: 'Typescript',
    image: '/images/ic_typescript.svg',
    desc: 'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.',
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'React',
    image: '/images/ic_react.svg',
    desc: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components.',
    link: 'https://react.dev/',
  },
  {
    name: 'Bootstrap',
    image: '/images/ic_bootstrap.svg',
    desc: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
    link: 'https://getbootstrap.com/',
  },
  {
    name: 'MUI',
    image: '/images/ic_mui.svg',
    desc: 'MUI offers a comprehensive suite of free UI tools to help you ship new features faster.',
    link: 'https://mui.com/',
  },
  {
    name: 'Tailwind CSS',
    image: '/images/ic_tailwindcss.svg',
    desc: 'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'Chakra UI',
    image: '/images/ic_chakraui.svg',
    desc: 'Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.',
    link: 'https://chakra-ui.com/',
  },
]

const SkillBackend = [
  {
    name: 'NodeJS',
    image: '/images/ic_nodejs.svg',
    desc: 'Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.',
    link: 'https://nodejs.org/',
  },
  {
    name: 'Django',
    image: '/images/ic_django.svg',
    desc: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
    link: 'https://www.djangoproject.com/',
  },
  {
    name: 'PostgresQL',
    image: '/images/ic_postgresql.svg',
    desc: 'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.',
    link: 'https://www.postgresql.org/',
  },
  {
    name: 'MongoDB',
    image: '/images/ic_mongodb.svg',
    desc: 'MongoDB is a source-available cross-platform document-oriented database program.',
    link: 'https://www.mongodb.com/',
  },
  {
    name: 'Docker',
    image: '/images/ic_docker.svg',
    desc: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
    link: 'https://www.docker.com/',
  },
]

const SkillAWS = [
  {
    name: 'Lambda',
    image: '/images/ic_awslambda.svg',
    desc: 'AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services.',
    link: 'https://aws.amazon.com/lambda/',
  },
  {
    name: 'S3',
    image: '/images/ic_awss3.svg',
    desc: 'Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services that provides object storage through a web service interface.',
    link: 'https://aws.amazon.com/s3/',
  },
  {
    name: 'EC2',
    image: '/images/ic_awsec2.svg',
    desc: "Amazon Elastic Compute Cloud is a part of Amazon.com's cloud-computing platform, Amazon Web Services, that allows users to rent virtual computers on which to run their own computer applications.",
    link: 'https://aws.amazon.com/ec2/',
  },
]

const Groups = [
  {
    name: 'Frontend',
    desc: '5 years of experience',
    icon: 'bx-tv',
    items: SkillFrontend,
    color: 'bg-green-400',
  },
  {
    name: 'Backend',
    desc: '3 years of experience',
    icon: 'bx-cog',
    items: SkillBackend,
    color: 'bg-orange-500',
  },
  {
    name: 'AWS Services',
    desc: 'Developer Associate Certified',
    icon: 'bxl-aws',
    items: SkillAWS,
    color: 'bg-yellow-500',
  },
]
function SectionSkill() {
  return (
    <Section className="py-10 md:py-40">
      <h2 className="text-4xl md:text-5xl font-medium text-center mb-10 md:mb-40">My Skills</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-12 items-center gap-x-20 gap-y-10">
        {Groups.map((group) => (
          <React.Fragment key={group.name}>
            <div
              className={classNames(
                'col-span-1 md:col-span-6 xl:col-span-5',
                'flex items-center gap-8 transition-all translate-y-2 p-4 lg:p-10',
                'text-center rounded-3xl border-2 border-slate-200 bg-gray-50',
                'hover:shadow-lg hover:translate-y-0 hover:bg-white',
              )}
            >
              <div
                className={classNames(
                  'flex items-center justify-center rounded-full',
                  'w-10 h-10 md:w-16 md:h-16  lg:w-20 lg:h-20',
                  group.color,
                )}
              >
                <i className={classNames('bx md:text-4xl text-white', group.icon)} />
              </div>
              <div className="text-left">
                <h3 className="text-xl md:text-3xl font-semibold">{group.name}</h3>
                <span className="md:text-lg text-secondary">{group.desc}</span>
              </div>
            </div>
            <div
              className={classNames(
                'col-span-1 md:col-span-6 xl:col-span-7',
                'w-full flex flex-wrap justify-center md:justify-start gap-x-10',
              )}
            >
              {group.items.map((e) => (
                <a
                  key={e.name}
                  href={e.link}
                  target="_blank"
                  style={{ minWidth: 100 }}
                  className={classNames(
                    'flex flex-col items-center gap-4',
                    'translate-y-2 transition-all p-4 rounded-lg cursor-pointer',
                    'hover:shadow-lg hover:translate-y-0 hover:border',
                  )}
                >
                  <Image alt={e.name} width={50} height={50} style={{ height: 50 }} src={e.image} />
                  <span>{e.name}</span>
                </a>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </Section>
  )
}

export default SectionSkill
