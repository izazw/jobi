import TopNav from "./TopNav";
import CompanyFacts from "./CompanyFacts";

function Header () {
   return (
      <header>
             <TopNav/>
             <div className="wrapper-min">
               <h1> Find & Hire Experts for any Job</h1>
               <h2>Unlock your potential with quality job & earn from world leading brands</h2>  
             </div>
             <CompanyFacts/>
      </header>
   )
}

export default Header;