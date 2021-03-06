//CSS to be loaded by every page
//This App component is the top-level component
//Which will be common across all the different pages.
//You can use this App component to keep state when navigating between pages


import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
