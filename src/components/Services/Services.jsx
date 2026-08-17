import "./Services.scss";

import ServiceCard from "./ServiceCard";

export default function Services(){

return(

<section id="services" className="services">

<div className="container">

<ServiceCard

title="CONTENT"

description="Words, film and design that earn attention and hold it."

list={[

"Editorial & Copywriting",

"Video & Motion",

"Social Content",

"Brand Identity"

]}

/>

<ServiceCard

title="ADVERTISING"

description="Ideas big enough to be remembered across every screen."

list={[

"Campaign Concepts",

"Art Direction",

"Production",

"Print & Digital"

]}

/>

<ServiceCard

title="MARKETING"

description="Media, data and growth planning that compounds."

list={[

"Media Planning",

"Performance Marketing",

"SEO",

"Growth Strategy"

]}

/>

</div>

</section>

)

}