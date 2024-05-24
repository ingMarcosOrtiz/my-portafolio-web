import Image from 'next/image'
import { PortfolioItemData } from '@/app/lib/interfaces'
import styles from './portfolio-item.module.css'
interface Props {
  item: PortfolioItemData

  handleOpenModal: (value: string, data: PortfolioItemData) => void
}

export function PortafolioItem({ handleOpenModal, item }: Props) {
  return (
    <>
      <div className={styles.containerbox}>
        <div className={styles.box}>
          <Image
            src={item.imageSrc}
            alt={`foto portafolio ${item.title}`}
            width={400}
            height={400}
            priority
            onClick={() => handleOpenModal('open', item)}
          />
        </div>
        <h1 className={styles.titlePortafolio}>{item.title}</h1>
      </div>
    </>
  )
}
