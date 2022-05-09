import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Titill = ({ slice }) => (
  <section>
    <PrismicRichText field={slice.primary.title} />
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default Titill