import React, { Fragment, useEffect, useState } from 'react'
import Head from '../../components/head'
import { useRouter } from 'next/router'
import TopBar from '../TopBar'
import Footer from './../Footer/index';

const Layout = ({ children, path }) => {
  const Router = useRouter()
  const { pathname } = Router

  const renderTitle = () => {
    switch (pathname) {
      case '/': return ('Beneclub')
    }
  

  }
  return (
        <div>
            <Head title={renderTitle()} />
            
            {children}
            <Footer/>
        </div>
  )
}

export default Layout
