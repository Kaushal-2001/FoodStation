import {useState} from "react";


const Section = ({title,description}) => {
    const [isVisible, setIsVisible] = useState(false);
    return(
    <div className="border p-2 m-2 mb-4 shadow-md">
        <h1 className="font-bold text-lg">{title}</h1>
        
        {!isVisible? <button onClick={()=>setIsVisible(true)} className="text-xs underline cursor-pointer font-semibold">Show</button>
        :<button onClick={()=>setIsVisible(false)} className="text-xs underline cursor-pointer font-semibold">Hide</button>}
        {isVisible && <p>{description}</p>}
    </div>
    );
} ;  


const Instamart = () => {
    return (
    <div>
        <h1 className="font-bold text-3xl p-2 m-2">Instamart</h1>
        <Section title="About" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."/>

        <Section title="Team" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."/>

        <Section title="Careers" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."/>
    </div>
    
    )

}

export default Instamart;
