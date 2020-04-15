/* import axios from 'axios';
import booksLocal from '../../books.json'
import { LOCAL_RESOURCE } from '../constants';

function hasResources(to) {
    return to.meta && to.meta.resources;
  }


export function handleResources(resources,next){
      const resourcesArray=Object.entries(resources)
      const resourcesCalls = resourcesArray.map(([key, value])=>{
          if(value===LOCAL_RESOURCE){
              return Promise.resolve(key,booksLocal[key])
          }
          return axios.get(value).then(res=>[key,res.data])
      });
      next(vm=>
          Promise.all(resourcesCalls).then(data=>{
              data.forEach(([key,value])=>{vm[key]=value})
          })
      )
}

const databaseMixin={
    data:()=>({isFetching:false}),
    beforRouteEnter(to,from,next){
        if(!hasResources){ next(); return;}
       
        const resources=to.meta.resources
        handleResources(resources,cb=>{
            
            next(vm=>{
                vm.isFetching=true;
               
                cb(vm).then(()=>{
                    vm.isFetching=false
                })
               
            })
        })
    }
}
export default databaseMixin */