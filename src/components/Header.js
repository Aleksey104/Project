import "./Header.css";

function Header (){
    return(<>
    <div className="header"  >

        <div className="logo" />
        

        <button className="buttonCatalog">Каталог</button>

        <ul className="links">
            <li>Категории</li>
            <li>Купоны</li>
            <li>Акции</li>
            <li>Контакты</li>
        </ul>

        <button className="shoppingBag">
          
       </button>
    </div>
    </>);
} 
export default Header;