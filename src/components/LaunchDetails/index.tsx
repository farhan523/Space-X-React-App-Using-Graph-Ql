import React,{useContext} from 'react'
import {useLaunchInfoQuery} from '../../generated/graphql'
import LaunchDetails from './LaunhDetails'
import {context} from '../globlestate'
import { Console } from 'console'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function LaunhDetailsContainer() {

    let state = useContext(context)
    console.log(state)

    const {data,error,loading} = useLaunchInfoQuery({
           variables: {
              id: state ? state.number : null
           },
         })
   if(loading){
       return <div className="launchDetails loader"> <Loader
       type="Bars"
       color="#00BFFF"
       height={100}
       width={100}
       timeout={3000} //3 secs
     /></div>
   }
   if(error){
       return <div>Error</div>
   }
   if(!data){
       return <div>Please select a mission for it,s details</div>
   }

   return <LaunchDetails data={data}/>
}

export default LaunhDetailsContainer
