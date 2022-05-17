import { SliceZone } from "@prismicio/react";
import Link from "next/link";
import { createClient } from "../../prismicio"
import { components } from "../../slices";

const Veitingahus = ({data}:{data:any}) => {
    return (
		<main>
            <ul style={{display: "flex", justifyContent:"center", gap: "1.5em", listStyle: "none", paddingInlineStart:"0"}}>
				<li><Link passHref href={"/veitingahus"}>Veitingahús</Link></li>
				<li><Link passHref href={"/veitingahus/dogurdur"}>Helgardögurður</Link></li>
				<li><Link passHref href={"/veitingahus/hadegismatur"}>Hádegismatur</Link></li>
				<li><Link passHref href={"/veitingahus/veislur"}>Veislur</Link></li>
				<li><Link passHref href={"/veitingahus/matarstefna"}>Matarstefna</Link></li>
				<li><Link passHref href={"/veitingahus/gjafabref"}>Gjafabréf</Link></li>
			</ul>
			<SliceZone slices={data.data.slices} components={components} />
		</main>
	);
}

export async function getStaticProps() {
    const client = createClient();
    const data = await client.getByUID("basic", "veitingahus");

    return { props : { data }}
}

export default Veitingahus