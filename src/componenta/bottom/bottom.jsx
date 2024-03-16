import './b.css'



const Bottom=()=>(
    <div className="flex flex-col flex-wrap  mx-8 space-y-4 vv">
        <h1 className="text-center">Testimonials</h1>
        <h1 className="text-center text-red-600 text-2xl">
            Customer Reviews
        </h1>
       
    

        <div className=" w-1/2 self-start border-black border-2 mx-8">
            <p>"Booking a puja online was a delightful experience from start to finish. The website was easy to navigate, and the booking process was simple and straightforward. The puja ceremony was conducted with great reverence, and I could feel the positive energy flowing throughout.
                 I highly recommend Vedaz for anyone looking to book a puja online."</p>
                 <div className="bg-teal-900 h-10">
<h1 className="text-end">puja</h1>
<p className="text-end"> 4.8</p>
                 </div>
        </div>
        <div className=" w-1/2 self-end  border-black border-2 mx-8">
            <p>"Booking a puja online was a delightful experience from start to finish. The website was easy to navigate, and the booking process was simple and straightforward. The puja ceremony was conducted with great reverence, and I could feel the positive energy flowing throughout.
                 I highly recommend Vedaz for anyone looking to book a puja online."</p>
                 <div className="bg-teal-900 h-10">
<h1 className="text-end">indra</h1>
<p className="text-end">4.5</p>
                 </div>
        </div>
    </div>
)

export default Bottom