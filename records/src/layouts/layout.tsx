'use client'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import '../../src/styles/transitions.css'
import "../../app/globals.css"

export interface Props {
  children: any
}

export const Layout = ({ children }: Props) => (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
)