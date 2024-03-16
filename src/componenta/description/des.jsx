

import './des.css'
const Des=()=>(
    <div className="container pl-2">
<h1>About puja</h1>
        <div className="flex  flex-row justify-between flex-wrap bg ">
   


        <div className="  flex-col  space-y-4  w-3/5 pl-2 v  ">
        <div className=" flex ">
        <img src="https://img.pikbest.com/origin/08/98/96/42apIkbEsT8yb.png!bwr800" alt="de" className="max-w-16"/>

            <p className="">The festive season of India is earmarked by the worshipping and celebration of Goddess Durga. It generally occurs in the month of September-October.</p>
</div>
<hr/>
        <div className="flex ">
            
        <img src="https://img.pikbest.com/origin/08/98/96/42apIkbEsT8yb.png!bwr800" alt="de" className="max-w-16 "/>

            <p>The entire nation becomes more colourful and celebrates the fact of good's win over evil. Goddess Durga is considered to be the physical form of 'Shakti' or 'Universal Energy'.</p>
        </div>
        <hr/>
        <div className=" flex "> 
        <img src="https://img.pikbest.com/origin/08/98/96/42apIkbEsT8yb.png!bwr800" alt="de" className="max-w-16"/>
            <p >Online puja, also known as e-puja or virtual puja, is a modern approach to performing traditional Hindu rituals through digital platforms. It allows individuals to participate in religious ceremonies and seek blessings from the comfort of their homes, regardless of geographical location."
</p>
        </div><hr/>
        <div className="flex ">
        <img src="https://img.pikbest.com/origin/08/98/96/42apIkbEsT8yb.png!bwr800" alt="de" className="max-w-16"/>
            <p className="">Online puja services offer convenience and accessibility, especially for those who may not have access to local temples or priests. However, it's important to choose a reputable service provider to ensure the authenticity and sanctity of the rituals."</p>
        </div>
        
        
        </div>

        <div className=" v box-content h-60 w-3/12 p-4 border-4 bg-stone-400 rounded-md space-y-4 ">
            <h1>Book Now</h1>
            <p>Birth Deatils</p>
        <input type="date" name="begin"
        placeholder="dd-mm-yyyy" value=""
        min="1997-01-01" max="2030-12-31" className="text-center"/>  
        <h1>Venue</h1>
        <input type="text" placeholder="Enter the venue"/>

        </div>
        </div>
        </div>
)

export default Des