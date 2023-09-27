import { ReactNode } from 'react'
import classNames from 'classnames'

interface SectionProps {
  className?: string
  children: ReactNode
}

function Section(props: SectionProps) {
  const { className, children } = props
  return (
    <section className={classNames(className)}>
      <div className="max-w-7xl w-full px-8 xl:px-0 mx-auto">{children}</div>
    </section>
  )
}

export default Section