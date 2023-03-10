import "./App.css";

export default function App() {
  //props
  return (
    <div className="app1">
      <div className="App">
        
        <Details
          hd="FREE"
          dollar="$0"
          line1="✔ Single User"
          line2="✔ 5GB Storage"
          line3="✔ Unlimited Public Projects"
          line4="✔ Community Access"
          line5="✖ Unlimited Private Projects"
          line6="✖ Dedicated Phone Support"
          line7="✖ Free Subdomain"
          line8="✖ Monthly Status Reports" 
               
         
        />
        

        <Details
           hd="PLUS"  
          dollar="$9"
          line1="✔ 5 Users"
          line2="✔ 50GB Storage"
          line3="✔ Unlimited Public Projects"
          line4="✔ Community Access"
          line5="✔ Unlimited Private Projects"
          line6="✔ Dedicated Phone Support"
          line7="✔ Free Subdomain"
          line8="✖ Monthly Status Reports"
        />

        <Details
          hd="PRO"
          dollar="$49"
          line1="✔ Unlimited Users"
          line2="✔ 150GB Storage"
          line3="✔ Unlimited Public Projects"
          line4="✔ Community Access"
          line5="✔ Unlimited Private Projects"
          line6="✔ Dedicated Phone Support"
          line7="✔ Unlimited Free Subdomains"
          line8="✔ Monthly Status Reports" 
         

          
        />
      </div>
    </div>
  );
}

function Details(props) {
  return (
    <div className="card">
      
      <div class="free">
        <h4>{props.hd}</h4></div>

      <h6 className="amount">{props.dollar}<span class="period">/month</span></h6>
      <hr/>
            <div class="lines">
    <p>{props.line1}</p>
    <p>{props.line2}</p>
    <p>{props.line3}</p>
    <p>{props.line4}</p>
    <p>{props.line5}</p>
    <p>{props.line6}</p>
    <p>{props.line7}</p>
    <p>{props.line8}</p>
      </div>
      <button><h4>BUTTON</h4></button>
    </div>
  );
}
