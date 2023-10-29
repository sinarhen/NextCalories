import axios from 'axios';

const fetcher = async ({url, params}: {url: string; params?: object}) => {
    const fetchedData = await axios.get(url, {
        params: params,
    }).then(res => {
        return res.data
    }).catch(
        err => {
            console.log("[ERROR OCCURED]" + err + '\n')
            return null;
        }
    )
    return fetchedData;

}
  
export default fetcher;