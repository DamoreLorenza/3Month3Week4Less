import { useEffect, useState } from "react"
import { Container, Row, Col} from "react-bootstrap";
import { Results } from "../interface/interface";
import { Link } from "react-router-dom";


interface FunctionalProps {
    textContent: string

  }

const Home=(props: FunctionalProps)=>{
const[homing,setHoming]= useState<Results[]>([]);

useEffect(()=>{getFetch()},[])

const getFetch=()=>{
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
    .then((res)=>{if (res.ok){return res.json()}else{throw new Error("aia")}})
    .then((data)=>{
        console.log('data', data)
        setHoming(data.results)})
    .catch((err)=>{console.log("aiaissimo", err)})
}

  return(  
    <Container className="justify-content-center">
        <Row>
            <Col sm={1}></Col>
            

    <Col sm={10}>          
            
    {homing.map((data) => (
            <div className="mb-5 mt-5" key={data.id}>
            <Link to={`/article/${data.id}`}>
      <h4>{data.title}</h4>
    </Link>
              <p>{data.published_at}</p>
              <img src={data.image_url} alt="img" style={{ width: '18rem' }}/>
              
            </div>
          ))}


</Col>

 
            
            <Col sm={1}></Col>
        </Row>
    </Container>

)

}
export default Home