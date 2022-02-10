import React from 'react';


const Nav = () => {



 return(
   <div id="menu"> 

  <div className="nawigacja">   
                      <div className="nazwaFirmy"><a href="#menu"  ><button id="nazwa_firmy" >Moja firma</button>  </a> </div> 
                    
               
                    <div className="prawaStronaNawigacji">
                        <div><a href="#specialists"><button> O nas </button>  </a> </div>  
                        <div><a href="#o_nas"> <button>Oferta</button> </a> </div>
                        <div ><a href="#" > <button id="specialnyButton"  >Kontakt</button> </a> </div>
                    </div>
               </div>  
</div>
);

};

export default Nav;
