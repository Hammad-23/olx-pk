import React from 'react';
import { Row, Col, Select} from 'antd';
// import Olx from '../../assets/olxlogo.png'





function Home(){
    return(
        <>

        <Row style={{display: 'flex',justifyContent: 'space-around', alignItems: 'center',backgroundColor:'#ededed'}}>

            <Col span={4.8}>
                 <h3>OLX</h3>
            </Col>
            <Col span={4.8} style={{width:'250px',height:'42px'}}>
                 <select  style={{width: '100%',height: '100%'}}>
                     <option>Karachi</option>
                     <option>Lahore</option>
                     <option>Islamabad</option>
                     <option>Peshawar</option>
                     <option>Mir pur khas</option>
                 </select>
            
            </Col>
            <Col span={4.8}  style={{width:'500px',height:'42px'}}>

                <input style={{width: '100%',height: '100%'}} type='text'/>
            
            
            </Col>
            <Col span={4.8} >
                <p>Log In</p>
            
            </Col>

            <Col span={4.8}>
               
               <button>Sell</button>
            
            </Col>


        </Row>




        </>
    )
}

export default Home;







