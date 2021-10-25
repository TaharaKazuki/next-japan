import React from 'react'
import Layout from 'components/Layout'

const ResourceDetail = ({ resource }) => {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="content is-medium">
                  <h2 className="subtitle is-4">{resource.createdAt}</h2>
                  <h1 className="title">{resource.title}</h1>
                  <p>{resource.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  )
  const data = await dataRes.json()

  return {
    props: {
      resource: data
    }
  }
}

export default ResourceDetail
