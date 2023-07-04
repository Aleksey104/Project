import "./Baner.css";

function Baner (){
    return(<>
    <div className="banerLayer" >
      <div className="saleWright">Распродажа</div>
      <div className="saleWrightEnd">в честь нового сезона</div>
      <button className="saleButton"><div className="textSale">Все Акции</div></button>
      <button className="moreButton"><div className="textMore">Подробнее</div></button>
      <div className="bush"></div>
    </div>
    </>);
} 
export default Baner;