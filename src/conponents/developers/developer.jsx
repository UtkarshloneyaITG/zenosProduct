import FrontendDeveloper from "./Frontend"
import Backend from "./backende"
import DevOps from "./devops"
import Designer from "./designer"
import { useParams } from "react-router"
function Developer(){
  let {developer} = useParams()
  if(developer == 'frontend'){
    return (
      <FrontendDeveloper />
    )
  }
  if(developer == 'backend'){
    return (
      <Backend />
    )
  }
  if(developer == 'designer'){
    return (
      <Designer />
    )
  }
  if(developer == 'devops'){
    return (
      <DevOps />
    )
  }
}
export default Developer