import React from 'react'
import { Nav } from './Nav'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Mars } from './Mars'
import { MiniMars } from './MiniMars'

export const Layout = () => {
  return (
    <div>
        <header>
            <Nav/>
        </header>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}
