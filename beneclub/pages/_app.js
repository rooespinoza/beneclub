import './../public/reset.css'
import { useRouter } from 'next/router'
import Layout from './../components/Layout'
import { Fragment } from 'react'
const renderLayout = (Component, pageProps, path) => {
  console.log(path)
  if (path === '/') {
    return (
      <Layout path={path}>
        <Component {...pageProps} />
      </Layout>
    )

  }
  return (<Component {...pageProps} />)
}

const App = ({ Component, pageProps }) => {
  const Router = useRouter()
  const path = Router.pathname
  return (
    <Fragment>
      {renderLayout(Component, pageProps, path)}
    </Fragment>
  )
}
export default App
