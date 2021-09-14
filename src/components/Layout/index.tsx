import React, { FunctionComponent } from 'react'

type LayoutProps = {
  userAccountBalance: number
}

const Layout: FunctionComponent<LayoutProps> = ({ children, userAccountBalance }) => (
  <>
    <header>
      <h1>JS</h1>
      <p>Your balance: &#36;{userAccountBalance.toFixed(2)}</p>
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
