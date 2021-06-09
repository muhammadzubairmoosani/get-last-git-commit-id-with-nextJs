import styles from '../styles/Home.module.css'
import getConfig from 'next/config'
import React from 'react'

export default function Home({ buildId }) {
  return (
    <div className={styles.container}>
      <h1>Build id: {buildId}</h1>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const { publicRuntimeConfig } = getConfig()

  const buildId = await publicRuntimeConfig?.generateBuildId()

  return { buildId }
}