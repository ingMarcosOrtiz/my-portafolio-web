import React, { ReactNode } from 'react'
import { FaRegCircleXmark } from 'react-icons/fa6'
import styles from './modal.module.css'

// Definimos los tipos permitidos para las props position, width y modalPaddingCustom
type PositionType = 'pTop' | 'pMedium' | 'pBottom'
type WidthType =
  | 'modalXs'
  | 'modalMd'
  | 'modalLg'
  | 'modalXt'
  | 'modalWidhtPost'
type ModalPaddingCustomType = 'modalPaddingXt' | 'modalPaddingPost'

interface Props {
  title?: string
  showModal: boolean
  closeModal?: () => void
  position?: PositionType
  width?: WidthType
  children: ReactNode
  btnCloseModal?: boolean
  nameModal?: string
  nameModalContent?: string
  modalPaddingCustom?: ModalPaddingCustomType
}

export function Modal({
  children,
  closeModal,
  showModal,
  title,
  btnCloseModal,
  modalPaddingCustom,
  nameModal,
  nameModalContent,
  position,
  width,
}: Props) {
  const MYCLASS = {
    pTop: styles.pTop,
    pMedium: styles.pMedium,
    pBottom: styles.pMedium,
    modalXs: styles.modalXs,
    modalMd: styles.modalMd,
    modalLg: styles.modalLg,
    modalXt: styles.modalXt,
    modalWidhtPost: styles.modalWidhtPost,
    modalPaddingXt: styles.modalPaddingXt,
    modalPaddingPost: styles.modalPaddingPost,
  }

  return (
    <div
      id={nameModal}
      className={`${styles.popUp} ${showModal ? styles.show : ''} ${
        position ? MYCLASS[position] : ''
      }`}>
      <div
        id={nameModalContent}
        className={`${styles.popUpWrapper} ${width ? MYCLASS[width] : ''} ${
          showModal ? styles.show : ''
        }`}>
        <div
          className={`${styles.modal} ${
            modalPaddingCustom ? MYCLASS[modalPaddingCustom] : ''
          }`}>
          <h1 className={styles.alertTitle}>{title}</h1>

          {btnCloseModal && (
            <button
              className={styles.btnClose}
              type='button'
              onClick={closeModal}>
              {/* <img
                                src={images.iconClose}
                                alt="iconClose"
                                className="close-modal__img"
                            /> */}
              <FaRegCircleXmark color='var(--yellow)' fontSize={35} />
            </button>
          )}

          <div className={styles.modalBody}>{children}</div>
        </div>
      </div>
    </div>
  )
}
