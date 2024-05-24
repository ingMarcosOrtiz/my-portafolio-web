'use client'
import { useState } from 'react'
import { ContentModalPortafolio, Modal, PortafolioItem } from '../../ui'
import { PortfolioItemData } from '@/app/lib/interfaces'
import styles from './section-portafolio.module.css'
import { portfolioItems } from '@/app/lib/utils'

export function SectionPortafolio() {
  const [showModal, setShowModal] = useState(false)
  const [portafolioItemSelected, setPortafolioItemSelected] =
    useState<PortfolioItemData | null>(null)

  function handleOpenModal(value: string, data: PortfolioItemData) {
    console.log('🟢', data)

    if (value === 'open') {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      setPortafolioItemSelected(data)
      setShowModal(true)
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'visible'
      setPortafolioItemSelected(null)
      setShowModal(false)
    }
  }

  return (
    <>
      <section className={styles.portafolio} id='portafolio'>
        <h1 className='heading'>
          My <span>Portafolio</span>
        </h1>

        <div className={styles.containerPortafolio}>
          {portfolioItems.map((item, index) => (
            <PortafolioItem
              key={index}
              item={item}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </div>

        {/* <Modal /> */}
        <Modal
          showModal={showModal}
          // showModal={true}
          width='modalLg'
          btnCloseModal
          closeModal={() => handleOpenModal('close', {} as PortfolioItemData)}>
          <>
            {portafolioItemSelected && (
              <ContentModalPortafolio data={portafolioItemSelected} />
            )}
          </>
        </Modal>
      </section>
    </>
  )
}
