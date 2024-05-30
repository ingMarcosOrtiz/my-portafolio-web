'use client'
import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import { useUIStore } from '@/app/store'
import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaSquareYoutube } from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa6'

import { Link } from 'react-scroll'

export function Header() {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen)
  const closeSideMenuStore = useUIStore((state) => state.closeSideMenu)
  return (
    <>
      <header className={`${styles.header} ${isSideMenuOpen && styles.toggle}`}>
        <div className={styles.user}>
          <Image
            src='/img/avatar.jpg'
            alt='foto perfil'
            className={styles.picture}
            width={100}
            height={100}
            priority
          />
          <h3 className={styles.name}>Marcos Ortiz</h3>

          <p className={styles.cargo}>Ingeniero de Sistemas</p>
          <div className={styles.containerStar}>
            <FaStar color='var(--yellow)' fontSize={16} />
            <FaStar color='var(--yellow)' fontSize={16} />
            <FaStar color='var(--yellow)' fontSize={16} />
            <FaStar color='var(--yellow)' fontSize={16} />
            <FaStar color='var(--yellow)' fontSize={16} />
            <p>5/5</p>
          </div>
        </div>

        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link
                onClick={() => closeSideMenuStore()}
                activeStyle={{
                  background: 'var(--yellow)',
                  color: '#333',
                  fontWeight: 600,
                }}
                to='home'
                spy={true}
                smooth={true}
                // offset={-100}
                duration={400}>
                Inicio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeSideMenuStore()}
                activeStyle={{
                  background: 'var(--yellow)',
                  color: '#333',
                  fontWeight: 600,
                }}
                to='about'
                spy={true}
                smooth={true}
                // offset={100}
                duration={400}>
                Acerca de mi
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeSideMenuStore()}
                to='education'
                smooth={true}
                spy={true}
                // offset={100}
                duration={400}
                activeStyle={{
                  background: 'var(--yellow)',
                  color: '#333',
                  fontWeight: 600,
                }}>
                Educación
              </Link>
            </li>

            <li>
              <Link
                onClick={() => closeSideMenuStore()}
                activeStyle={{
                  background: 'var(--yellow)',
                  color: '#333',
                  fontWeight: 600,
                }}
                to='portafolio'
                smooth={true}
                spy={true}
                // offset={-90}
                duration={400}>
                Portafolio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeSideMenuStore()}
                activeStyle={{
                  background: 'var(--yellow)',
                  color: '#333',
                  fontWeight: 600,
                }}
                to='contacto'
                smooth={true}
                spy={true}
                // offset={100}
                duration={400}>
                Contacto
              </Link>
            </li>
            {/* <li>
              <Link to='portafolio'>Galeria</Link>
            </li> */}
          </ul>
        </nav>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}>
          <FaGithub fontSize={24} color='var(--yellow)' />
          <FaLinkedin fontSize={24} color='var(--yellow)' />
          <FaInstagram fontSize={24} color='var(--yellow)' />
          <FaSquareYoutube fontSize={24} color='var(--yellow)' />
        </div>
      </header>
    </>
  )
}
