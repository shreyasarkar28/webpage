import React from 'react';
import { Carousel , Button } from 'antd';

const items = [
    {

    }

]

function AppHero() {
    return(
        <div className="heroBlock">
            <Carousel>
               {items.map(items => {
                   return(
                       <div className= "container-fluid"> key={items.key}
                           <div className= "content">
                               <h3>{items.title}</h3>
                               <p>{items.content}</p>
                               <div className="btnholder">
                               <Button type="primary" size="large">learn more</Button>
                               <Button size="large"><i class="fas fa-desktop"></i>watch a demo</Button>

                               </div>
                           </div>
                       </div>
                   );
               })}
            </Carousel>
        </div>
    );
}

export default AppHero;