export default function ServiceCard({

    title,
    
    description,
    
    list
    
    }){
    
    return(
    
    <div className="card">
    
    <div className="line"/>
    
    <h3>{title}</h3>
    
    <p>
    
    {description}
    
    </p>
    
    <ul>
    
    {
    
    list.map((item,index)=>(
    
    <li key={index}>{item}</li>
    
    ))
    
    }
    
    </ul>
    
    </div>
    
    )
    
    }