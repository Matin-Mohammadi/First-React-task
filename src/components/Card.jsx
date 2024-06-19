import "./mystyle.css"
const Card = (props)=>{ 
    
    return(
        <div >
          <div className="mother">
            <div className="image" >
              <img  src={props.src} alt="logo" />
            </div>            
            <div className="description">
              <h3 className="text">Tomato, black olive, feta &amp; anchovy tart ulla mco laboris</h3>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>
              <a href="blog_details.html" >Learn More</a>
            </div>
          </div>
    
        </div>
    )
}
export default Card