import Footer from './footer'
import SectionIntro from './sectionIntro'
import SectionSkill from './sectionSkill'
import SectionWorkExperience from './sectionWorkExperience'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SectionIntro />
      <SectionSkill />
      <SectionWorkExperience />
      <Footer />
    </main>
  )
}
