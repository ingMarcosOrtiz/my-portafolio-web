'use client'

import styles from './btn-movil.module.css'
import { useUIStore } from '@/app/store'
export function BtnMovil() {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen)
  const openMenuUIStore = useUIStore((state) => state.openSideMenu)
  const closeMenuUIStore = useUIStore((state) => state.closeSideMenu)

  function setToggleMenu() {
    if (isSideMenuOpen) {
      closeMenuUIStore()
    } else {
      openMenuUIStore()
    }
  }

  return (
    <>
      <button className={styles.btnMobil} onClick={() => setToggleMenu()}>
        {!isSideMenuOpen && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={30}
            height={30}
            viewBox='0 0 24 24'
            fill='none'
            // stroke="#ffffff"
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className={styles.iconHamburguer}>
            <line x1={3} y1={12} x2={21} y2={12} />
            <line x1={3} y1={6} x2={21} y2={6} />
            <line x1={3} y1={18} x2={21} y2={18} />
          </svg>
        )}
        {isSideMenuOpen && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={30}
            height={30}
            viewBox='0 0 24 24'
            fill='none'
            // stroke="#ffffff"
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className={styles.iconClose}>
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        )}
      </button>
    </>
  )
}
