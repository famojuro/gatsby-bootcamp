import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
           <Layout>
           <Head title="About"/>
                <h1>About me</h1>
                <p>I am currently a programming facilitator at Civic academy .</p>
                <p>Want to work with me?<Link to="/contact"> Reach out.</Link></p>
           </Layout>

    )
}

export default AboutPage