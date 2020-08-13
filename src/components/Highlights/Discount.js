import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }


    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30)
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal={()=> this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 31st dec</h3>
                            <p>Sunburn festival 2020 is one of the world’s best music shows. This time the festival is organized in its home Goa. This is the 12th edition of Sunburn. Sunburn festival 2020 is to be scheduled from 31st december to 3 january. Sunburn 2020 tickets are available both online and on the spot. You can book both VIP and general tickets from Bookmyshow. Sunburn Goa attracts the audience from more than 30 countries. Many EDM lovers wait for the entire year only to enjoy this festival. You will get along with the vibe of the festival even if you are not an EDM fan. Hurry up and book you Sunburn tickets now.</p>
                        
                            <MyButton
                                text="Purchase tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="http://google.com"
                            />
                        
                        </div>
                    </Slide>
                    


                </div>
            </div>
        );
    }
}

export default Discount;