import React from 'react'
import {LaunchInfoQuery, useLaunchInfoQuery} from '../../generated/graphql'
import './style.css'

interface Props {
    data : LaunchInfoQuery;
}

const LaunhDetails : React.FC<Props> = ({data}) => {
    
    if(!data.launch){
        return <div>Launch unavailable</div>
    }

    return <div className="launchDetails">
        <hr/>
        <div className="launchDetailsStatus">
            <h3>Flight Number {data.launch.flight_number}</h3>
            <h3>Flight Status : <span style={ data.launch.launch_success ? { color: 'green'} : {color: 'red'}} >{data.launch.launch_success? 'Successfull' : 'Failed'}</span> </h3>
            <h1>{data.launch.mission_name} {data.launch.rocket?.rocket_name}</h1>
            <h2 style={{color: 'yellow'}}>Launch Site : {data.launch.launch_site?.site_name}</h2>
            <h3 style={{color:'orange'}}>Launch Year : {data.launch.launch_year}</h3>
            {data.launch.links?.flickr_images?.map((image)=>{
                return  image ? <img src={image} style={{}} /> : null;
            })}
        </div>
    </div>
}

export default LaunhDetails
