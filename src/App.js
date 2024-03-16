
import './input.css'
import Header from './componenta/headers/navbar'
import MainHeading from './componenta/headers/mainheading'
import Bottom from './componenta/bottom/bottom'
import Des from './componenta/description/des'
import Packages from './componenta/Packages/packages'
import Details from './componenta/pujadeatils/deatils'

export default function App() {
  return (
    <>
    <Header/>
    
    <MainHeading/>
    <Des/>
    <Packages/>
    <Details/>
    <Bottom/>
    </>
  )
}