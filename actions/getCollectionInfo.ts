import { slugify } from "@/libs/utils";
import axios from "axios";

const ColletionInfo = async (query: any) => {
	if (!query) {
		 return null
	 }
	const slug = slugify(query);
	
	const URL = `${process.env.NEXT_PUBLIC_API_URL}/collections/${slug}`;

	try {
		const res = await axios.get(URL, {
			headers: {
				"Cache-Control": "no-store",
			},
			validateStatus: function (status) {
				return status >= 200 && status < 300; // Reject only if the status code is outside this range
			},
		});

		if (res.status < 200 || res.status >= 300) {
			throw new Error(`HTTP error! Status: ${res.status}`);
		}

		return res.data;
	} catch (error:any) {
		 console.log(error.toJSON());
		
		throw error;
	}
};

export default ColletionInfo;
