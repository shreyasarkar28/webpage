import React from "react";
import { Button , Modal} from 'antd';


class AppWork extends React.Component {
    state = { visible: false};

    showModal = () => {
        this.setState({
            visible: true,
        }
        );
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        }
        );
    };
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        }
        );
    };
    render() {
        return(
            <div className="block worksBlock">
              <div className="container-fluid">
                 <div className="titleHolder">
                   <h2>How it works</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                 </div> 
                 <Button type="primary"  onClick={this.showModal}>
                     Open Modal
                 </Button>
                 <Modal
                     title="Basic Modal"
                     visible={this.state.visible}
                     onOk={this.handleOk}
                     onCancel={this.handleCancel}
                  >
                    <p>some contents...</p> 
                    <p>some contents...</p> 
                    <p>some contents...</p> 
                 </Modal>
               </div>   
            </div>
        );
    }
}
export default AppWork;