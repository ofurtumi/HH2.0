import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Mynd = ({ slice }) => (
  <section>
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
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

export default Mynd