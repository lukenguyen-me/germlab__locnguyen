import SectionIntro from './sectionIntro'
import SectionSkill from './sectionSkill'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SectionIntro />
      <SectionSkill />
    </main>
  )
}
