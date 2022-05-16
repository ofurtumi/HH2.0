import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from "../../prismicio";
import { components } from '../../slices'


const AllNews = ({data}:{data:any}) => {
    return (
        <main>
            {data ? (
                data.map((news:any, i:number) => {
                    return (
                        <div className="newsBox" key={i}>
                            <PrismicRichText field={news.data.title}/>
                            <p>{news.data.date}</p>
                            <img src={news.data.image.cover.url} alt={news.data.image.alt} />
                            <SliceZone slices={news.data.slices} components={components} />
                        </div>
                    )
                })
            ) : (
                <h1>engar fréttir til staðar</h1>
            )}
        </main>
    )
}

export async function getStaticProps() {
    const client = createClient({  }); // sama functionality og í öllum hinum
	const data = await client.getAllByType('news');

    return { props:{ data}}
}

export default AllNews;