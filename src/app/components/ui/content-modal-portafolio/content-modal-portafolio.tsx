import { PortfolioItemData } from '@/app/lib/interfaces'
import styles from './content-modal-portafolio.module.css'
import Image from 'next/image'

interface Props {
  data: PortfolioItemData
}

export function ContentModalPortafolio({ data }: Props) {
  const { description, imageSrc, subtitle, subtitle2, tecnology, title, url } =
    data
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgPortafolio}>
          {/* <p>Imagen Portafolio</p> */}
          <Image
            src={imageSrc}
            alt={`foto portafolio ${title}`}
            // className={styles.picture}
            width={400}
            height={400}
            priority
          />
        </div>
        <div className={styles.descriptionPortafolio}>
          <div className={styles.portafoliocContent}>
            <div>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
            </div>
            <div>
              <p>{description}</p>
            </div>
            <a target='_blank' className={styles.link} href={url}>
              {url}
            </a>
            <h2 className={styles.subtitle}>{subtitle2}</h2>
            <div className={styles.wrapperTecnology}>
              <div className={styles.wrapperItem}>
                <ul>
                  {tecnology.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              {/* <div className={styles.wrapperItem}>
                <ul>
                  <li>React</li>
                  <li>CSS</li>
                  <li>Mysql</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
