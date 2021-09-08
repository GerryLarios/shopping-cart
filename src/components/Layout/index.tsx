import React, { FunctionComponent } from 'react'

const Layout: FunctionComponent = ({ children }) => (
  <>
    <header>
      <h1>JS GUILD MARKET</h1>
    </header>
    <article>
      {children}
    </article>
    <footer>
      <p>Coded with love by @GerryLarios.</p>
    </footer>
  </>
)

export default Layout
