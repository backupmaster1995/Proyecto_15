import React from "react"
import Helmet from "react-helmet"

import useSeo from "../../hooks/useSeo"

import GlobalStyle from "../globalStyle"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout(props) {
  const seo = useSeo()
  const { title, description } = seo

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap"
        />
      </Helmet>

      <Header />

      {props.children}

      <Footer title={title} />
    </>
  )
}
