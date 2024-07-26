import React , { useState , useContext} from 'react';
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'
import '../css/common.css'
import { Appcontext } from './AppContext';

import { IoLayers } from "react-icons/io5";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { BiSolidLogOutCircle } from "react-icons/bi";

function Sidebar(){

    const menu = [
      //  {title:"Dashboard" , icon:IoLayers , link:"/" , subitems:[]},   for single menu
        {title:"AML SYSTEM" , icon:IoLayers , link:"/" , subitems:[
            {title:"Aml Threshold" , icon:FaCircle , link:"/AmlThreshold" , subitems:[]},
            {title:"Aml System" , icon:FaCircle , link:"/AmlSystem" , subitems:[]},
            {title:"Aml Monitoring Detail Report" , icon:FaCircle , link:"/" , subitems:[]},
            {title:"Aml Monitoring Log Report" , icon:FaCircle , link:"/" , subitems:[]},
        ]},
      {title:"Log Out" , icon:BiSolidLogOutCircle , link:"AmlSystem" , subitems:[]}, 
    ];
    const{appData,setAppData} = useContext(Appcontext);
    const[activeTab , setActiveTab] = useState(menu[0].title);
    const[collapse , setCollapse] = useState(null);
    const setToggler = (val)=>{
        if(collapse==val){
            setCollapse(null)
        }else{
            setCollapse(val);
        }

    }

    
    return(
        <>
        <div className={` ${appData.sidebarVisible ? 'w-[280px]' : 'w-[0px]'} transition-all duration-200 linear duration-900 flex-shrink-0 bg-gray-800 h-screen border-r border-r-[#888] text-white`}>
           
            <ul className='mt-2'>

                {menu.map((x)=>{
                    if(x.subitems.length >0 ){
                        // render
                       return <li className='w-full px-3 py-1 text-gray-300'>
                        <a onClick={()=>setToggler(x.title)} href='#' className={`flex px-4 py-3 group justify-between items-center hover:bg-gray-700 rounded-md ${activeTab == x.title ? 'bg-gray-700' :'' }`}>
                          <span className='left flex item-center group-hover:text-white'> 
                            {React.createElement(x.icon,{size:20})}
                            <p className='ml-4'>{x.title}</p>
                           </span> 
                           
                            <span className='right'><FaChevronCircleDown size={14}/></span>
                        </a>
                        <ul className={`${collapse == x.title ? '': 'hidden'}`}>
                            {x.subitems.map(y => {
                              return   <li className='w-full py-1 text-gray-300'>
                                 <a onClick={()=>setActiveTab(y.title)} href={y.link} className={`flex px-4 py-3 group justify-between items-center hover:bg-gray-700 rounded-md ${activeTab == y.title ? 'bg-gray-700' :'' }`}>
                                   <span className='left flex item-center ml-4 group-hover:text-white'> 
                                   {React.createElement(y.icon,{size:10})}
                                     <p className='ml-3'>{y.title}</p>
                                    </span> 
                                     <span className='right'></span>
                                 </a>
             
                                     </li>

                            })}
                       
                        </ul>
                    </li>
                    }
                    else{
                     return   <li className='w-full py-1 text-gray-300'>
                        <a onClick={()=>setActiveTab(x.title)} to={x.link} className={`flex px-4 py-3 group justify-between items-center hover:bg-gray-700 rounded-md ${activeTab == x.title ? 'bg-gray-700' :'' } `}>
                          <span className='left flex item-center ml-4 group-hover:text-white'> 
                          {React.createElement(x.icon,{size:20})}
                            <p className='ml-3'>{x.title}</p>
                           </span> 
                            <span className='right'></span>
                        </a>
    
                            </li>
                    }
                })}


             
            </ul>
        </div>
        </>
    )

}

export default Sidebar;