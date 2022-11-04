import React from 'react'
import { Document, Page, PDFViewer } from '@react-pdf/renderer'
import Perfil from './Perfil'
import Sobre from './Sobre'
import styles from './styles'

const Preview = ({ profile }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer
        showToolbar={false}
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          height: '100%'
        }}
      >
        <Template profile={profile} />
      </PDFViewer>
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

export default Preview