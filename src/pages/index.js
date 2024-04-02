import React from 'react'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const spreadsheetData = data.allGoogleSheet.edges

  return (
    <div>
      <h1>Data dari Spreadsheet</h1>
      <ul>
        {spreadsheetData.map(({ node }) => (
          <li key={node.id}>
            <p>Nama: {node.nama}</p>
            <p>Usia: {node.usia}</p>
            <p>Email: {node.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    allGoogleSheet {
      edges {
        node {
          id
          nama
          usia
          email
        }
      }
    }
  }
`

export default IndexPage
