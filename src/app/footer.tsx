import Section from '@/components/section'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

const Contacts = [
  {
    name: '(+84) 944 281 788',
    icon: 'bx bxs-phone',
  },
  {
    name: 'phucloc8697@gmail.com',
    icon: 'bx bx-envelope',
  },
]

function Footer() {
  return (
    <Section className="py-10 md:py-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold md:text-4xl text-center md:text-left">
            Let{"'"}s make something
            <br />
            amazing
          </h2>
        </div>
        <div>
          <h3 className="hidden md:block md:text-xl font-medium">Information</h3>
          <ul className="pt-4">
            {Contacts.map((e) => (
              <li key={e.name} className="flex items-center gap-2">
                <i className={e.icon} />
                <span className="text-sm">{e.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="my-10" />
      <p className="text-secondary">©2023. All Rights Reserved</p>
    </Section>
  )
}

export default Footer
