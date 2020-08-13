import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
     

            <iframe
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61498.05351193492!2d73.6973294!3d15.558042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfe96efd4101af%3A0x1fe7bea632841b03!2sVagator%20Beach!5e0!3m2!1sen!2sin!4v1585637962471!5m2!1sen!2sin" 
            width="100%"
             height="500px"
            
    
             allowFullScreen/>
             
            

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;