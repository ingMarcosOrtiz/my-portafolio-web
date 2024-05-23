import { BtnMovil, Header } from './components/ui'
import {
  SectionEducation,
  SectionAbout,
  SectionHome,
  SectionPortafolio,
  SectionContact,
} from './components/section'

export default function Home() {
  return (
    <main>
      {/* header section start */}
      <Header />
      <BtnMovil />
      {/* header section end */}

      {/* home section start */}
      <SectionHome />
      {/* home section end */}

      {/* About section start */}
      <SectionAbout />
      {/* About section end */}

      {/* Education section start */}
      <SectionEducation />
      {/* Education section end */}

      {/* Portafolio section start */}
      <SectionPortafolio />
      {/* Portafolio section end */}

      {/* Contact section start */}
      <SectionContact />
      {/* Contact section end*/}
    </main>
  )
}
