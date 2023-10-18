'use client'
import { Footer } from './Footer'
import { Header } from './Header'
// import '../../src/styles/transitions.css'
// import "../../app/globals.css"

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