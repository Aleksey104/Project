import "./Catalog.css"

function Catalog (){
    return(<>
    <div className="categoriesText">Категории</div>
    <button className="allCategories allCategoriesText ">Все категории</button>
    <ul className="categoriesTabl">
        <li>Удобрения</li>
        <li>Средства Защиты и септики</li>
        <li>Посадочный материал</li>
        <li>Инструменты и инвентарь</li>
    </ul>
    </>);
} 
export default Catalog;