import React from 'react'
import { Document, Page, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import Perfil from './Perfil'
import Sobre from './Sobre'
import styles from '../model/styles'

const Preview2 = ({ profile }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer
        showToolbar={false}
        style={{
          width: '100%',
          height: '95%',
        }}
      >
        <Template profile={profile} />
      </PDFViewer>
      <PDFDownloadLink
        document={<Template profile={profile} />}
        fileName='resume.pdf'
      >
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )
}

const Template = ({ profile }) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <Perfil profile={profile} />
        <Sobre address={profile.address} />
      </Page>
    </Document>
  )
}

export default Preview2