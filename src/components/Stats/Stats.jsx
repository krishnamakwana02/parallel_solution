import "./Stats.scss";

const stats = [

{
number:"3",
text:"Disciplines, One Team"
},

{
number:"360°",
text:"Integrated Campaigns"
},

{
number:"24/7",
text:"Always-On Optimisation"
},

{
number:"1:1",
text:"Senior Attention"
}

];

export default function Stats(){

return(

<section className="stats">

<div className="container">

{

stats.map((item,index)=>(

<div className="item" key={index}>

<h2>{item.number}</h2>

<p>{item.text}</p>

</div>

))

}

</div>

</section>

)

}