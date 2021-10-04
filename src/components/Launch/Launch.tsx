import React,{useContext} from 'react'
import {LaunchesQuery} from '../../generated/graphql'
import './style.css'
import {context} from '../globlestate'

interface Props{
    data:LaunchesQuery;
}

const Launch:React.FC<Props> = ({data}) => {

    let state = useContext(context)
    
    return (
        <div className="launches">
            <h3>All Space X launches</h3>
           <ul className="LaunchesOL">
            {!!data.launches && data.launches.map((launch,i) => !!launch && (
                        <li key={i} className="launchesItem" onClick={()=>{ state.setNumber( JSON.stringify(launch.flight_number))}}>
                            {launch.mission_name}
                        </li>
                    )
                ) }
           </ul>
        </div>
    )
}

export default Launch
