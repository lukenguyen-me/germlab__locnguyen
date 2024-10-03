import clsx from 'clsx'
import { ReactNode } from 'react'

interface SectionProps {
  className?: string
  children: ReactNode
}

function Section(props: SectionProps) {
  const { className, children } = props
  return (
    <section className={clsx(className)}>
      <div className="max-w-7xl w-full px-10 xl:px-4 2xl:px-0 mx-auto">{children}</div>
    </section>
  )
}

export default Section
