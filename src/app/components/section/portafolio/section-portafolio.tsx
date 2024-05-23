'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './section-portafolio.module.css'
import { ContentModalPortafolio, Modal } from '../../ui'

export function SectionPortafolio() {
  const [showModal, setShowModal] = useState(false)

  function handleOpenModal(value: string) {
    if (value === 'open') {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      setShowModal(true)
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'visible'
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
          <div className={styles.containerbox}>
            <div className={styles.box}>
              <Image
                src='/img/Imagen1.png'
                alt='foto portafolio'
                // className={styles.picture}
                width={400}
                height={400}
                priority
                onClick={() => handleOpenModal('open')}
              />
            </div>
            <h1 className={styles.titlePortafolio}>Desarrollador Frontend</h1>
          </div>
          <div className={styles.containerbox}>
            <div className={styles.box}>
              <Image
                src='/img/Imagen2.png'
                alt='foto portafolio'
                // className={styles.picture}
                width={400}
                height={400}
                priority
                onClick={() => handleOpenModal('open')}
              />
            </div>
            <h1 className={styles.titlePortafolio}>Desarrollador Frontend</h1>
          </div>
          <div className={styles.containerbox}>
            <div className={styles.box}>
              <Image
                src='/img/Imagen3.png'
                alt='foto portafolio'
                // className={styles.picture}
                width={400}
                height={400}
                priority
                onClick={() => handleOpenModal('open')}
              />
            </div>
            <h1 className={styles.titlePortafolio}>Desarrollador Frontend</h1>
          </div>

          <div className={styles.containerbox}>
            <div className={styles.box}>
              <Image
                src='/img/a_1foto.jpg'
                alt='foto portafolio'
                // className={styles.picture}
                width={400}
                height={400}
                priority
                onClick={() => handleOpenModal('open')}
              />
            </div>
            <h1 className={styles.titlePortafolio}>Desarrollador Frontend</h1>
          </div>
          <div className={styles.containerbox}>
            <div className={styles.box}>
              <Image
                src='/img/img100.jpg'
                alt='foto portafolio'
                // className={styles.picture}
                width={400}
                height={400}
                priority
                onClick={() => handleOpenModal('open')}
              />
            </div>
            <h1 className={styles.titlePortafolio}>Desarrollo Movil|</h1>
          </div>
          <div className={styles.containerbox}>
            <div className={styles.box}>
              <Image
                src='/img/img300.jpg'
                alt='foto portafolio'
                // className={styles.picture}
                width={400}
                height={400}
                priority
                onClick={() => handleOpenModal('open')}
              />
            </div>
            <h1 className={styles.titlePortafolio}>Desarrollo Full Stack</h1>
          </div>
          <div className={styles.containerbox}>
            <div className={styles.box}>
              <Image
                src='/img/img300.jpg'
                alt='foto portafolio'
                // className={styles.picture}
                width={400}
                height={400}
                priority
                onClick={() => handleOpenModal('open')}
              />
            </div>
            <h1 className={styles.titlePortafolio}>Desarrollo Full Stack</h1>
          </div>
          <div className={styles.containerbox}>
            <div className={styles.box}>
              <Image
                src='/img/img300.jpg'
                alt='foto portafolio'
                // className={styles.picture}
                width={400}
                height={400}
                priority
                onClick={() => handleOpenModal('open')}
              />
            </div>

            <h1 className={styles.titlePortafolio}>Desarrollo Full Stack</h1>
          </div>
          <div className={styles.containerbox}>
            <div className={styles.box}>
              <Image
                src='/img/img300.jpg'
                alt='foto portafolio'
                // className={styles.picture}
                width={400}
                height={400}
                priority
                onClick={() => handleOpenModal('open')}
              />
            </div>
            <h1 className={styles.titlePortafolio}>Desarrollo Full Stack</h1>
          </div>
        </div>

        {/* <Modal /> */}
        <Modal
          showModal={showModal}
          // showModal={true}
          width='modalLg'
          btnCloseModal
          closeModal={() => handleOpenModal('close')}>
          <>
            <ContentModalPortafolio />
          </>
        </Modal>
      </section>
    </>
  )
}
