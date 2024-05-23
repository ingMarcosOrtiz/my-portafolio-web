import styles from './section-education.module.css'
import { FaGraduationCap } from 'react-icons/fa6'

interface Props {
  ref?: React.ForwardedRef<HTMLElement>
}

export function SectionEducation({ ref }: Props) {
  return (
    <>
      <section className={styles.education} id='education'>
        <h1 className='heading'>
          My <span>Education</span>
        </h1>

        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <FaGraduationCap />
            <span>2016</span>
            <h3>Frond end development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              qui quas, quisquam, ipsum sapiente tempore obcaecati veritatis
              quis cumque sit deserunt maxime modi. Veritatis expedita
              dignissimos, optio quae dicta earum?
            </p>
          </div>

          <div className={styles.box}>
            <FaGraduationCap />
            <span>2017</span>
            <h3>Frond end development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              qui quas, quisquam, ipsum sapiente tempore obcaecati veritatis
              quis cumque sit deserunt maxime modi. Veritatis expedita
              dignissimos, optio quae dicta earum?
            </p>
          </div>

          <div className={styles.box}>
            <FaGraduationCap />
            <span>2018</span>
            <h3>Frond end development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              qui quas, quisquam, ipsum sapiente tempore obcaecati veritatis
              quis cumque sit deserunt maxime modi. Veritatis expedita
              dignissimos, optio quae dicta earum?
            </p>
          </div>
          <div className={styles.box}>
            <FaGraduationCap />
            <span>2019</span>
            <h3>Frond end development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              qui quas, quisquam, ipsum sapiente tempore obcaecati veritatis
              quis cumque sit deserunt maxime modi. Veritatis expedita
              dignissimos, optio quae dicta earum?
            </p>
          </div>

          <div className={styles.box}>
            <FaGraduationCap />
            <span>2020</span>
            <h3>Frond end development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              qui quas, quisquam, ipsum sapiente tempore obcaecati veritatis
              quis cumque sit deserunt maxime modi. Veritatis expedita
              dignissimos, optio quae dicta earum?
            </p>
          </div>

          <div className={styles.box}>
            <FaGraduationCap />
            <span>2021</span>
            <h3>Frond end development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              qui quas, quisquam, ipsum sapiente tempore obcaecati veritatis
              quis cumque sit deserunt maxime modi. Veritatis expedita
              dignissimos, optio quae dicta earum?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
