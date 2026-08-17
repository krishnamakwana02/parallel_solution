export default function ServiceCard({
    title,
    description,
    list,
    index,
  }) {
    return (
      <article className={`card card-${index}`}>
        <div className="line" aria-hidden="true" />
  
        <h3>{title}</h3>
  
        <p>{description}</p>
  
        <ul>
          {list.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      </article>
    );
  }