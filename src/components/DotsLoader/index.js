import React from 'react';
import Loader from 'react-loader-spinner' ;

const DotsLoader = ({ isloading }) => {
    return (
        <div className="loader" style={{ display: isloading ? 'flex' : 'none' }}>
            <Loader
                visible={isloading}
                type="Puff"
                color="#fff"
                height={100}
                width={100}
            />
        </div>
    );
  };
  
  export default DotsLoader;