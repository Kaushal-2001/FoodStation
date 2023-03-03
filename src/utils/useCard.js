/*import { RES_API } from "../constants";

export const useCard = () => {
    
    const [restinfo, setRestinfo ] = useState(null);

    useEffect(()=>{
        getRestaurants();
      },[]);
      
      
     async function getRestaurants(){
        const data = await fetch(RES_API);
        const json = await data.json();
        setRestinfo(json?.data?.cards[2]?.data.data?.cards);
       
        
        
      }
    
    return restinfo
}

export default useCard;*/