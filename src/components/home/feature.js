import React from 'react';

import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

import {Row , Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature () {
    return(
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
                <div classname="titleholder">
                    <h2>Key Features and Benifits</h2>
                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>

                </div>
            <Row gutter={[16, 16]}>
             <Col span={8}>
             <Card
                 hoverable
    
                 cover={<img alt="Modern Design" src={image1} />}
               >
                 <Meta title="Modern Design" />
             </Card>
             </Col>
             <Col span={8}>
             <Card
                 hoverable
    
                 cover={<img alt="clean design" src={image2} />}
               >
                 <Meta title="clean design" />
             </Card>
             </Col>
             <Col span={8}>
             <Card
                 hoverable
    
                 cover={<img alt="great support" src={image3} />}
               >
                 <Meta title="great support" />
             </Card>
             </Col>
             <Col span={8}>
             <Card
                 hoverable
    
                 cover={<img alt="easy customise" src={image4} />}
               >
                 <Meta title="easy customise" />
             </Card>
             </Col>
             <Col span={8}>
             <Card
                 hoverable
    
                 cover={<img alt="unlimited features" src={image5} />}
               >
                 <Meta title="unlimited features" />
             </Card>
             </Col>
             <Col span={8}>
             <Card
                 hoverable
    
                 cover={<img alt="advanced option" src={image6} />}
               >
                 <Meta title="advanced option" />
             </Card>
             </Col>             
           </Row>
            </div>
        </div>

    );
}

export default AppFeature;