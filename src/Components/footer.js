import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class Footer extends Component {
    render(){
        return(
            <div style={{bottom: 0, position: 'fixed', width: '100%', backgroundColor: '#E8E7E8'}}>
                <div style={{float: 'left', paddingLeft: '1%'}}>
                    <Typography style={{fontSize: '15px'}}>
                        Gallereasy POC web app
                    </Typography>
                </div>
                <div style={{float: 'right', paddingRight: '1%'}}>
                    <Typography style={{fontSize: '15px'}}>
                        2359 Media
                    </Typography>
                </div>
            </div>
        )
    }
}

export default Footer;