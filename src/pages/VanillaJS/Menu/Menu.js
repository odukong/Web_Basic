import React, { useEffect, useState } from "react";
import "./Menu.style.css";
const DATA = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://a.cdn-hotels.com/gdcs/production9/d1046/cf0f5840-1bdd-4d7a-8863-361b5b80034f.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://img.taste.com.au/sv9d9AM6/w720-h480-cfill-q80/taste/2016/11/pork-and-bean-burrito-bowl-109208-1.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://preppykitchen.com/wp-content/uploads/2021/04/Milkshake-Recipe-Card.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/36/d8/8e/hill-country-delight.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://www.allrecipes.com/thmb/_tlTl7zfu2mCZzzuf9r8WOW-31U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/256007-best-scrambled-eggs-ddmfs-3X4-0031-ff526aac78f24031a5f947a546918a39.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://www.thereciperebel.com/wp-content/uploads/2021/07/oreo-milkshake-www.thereciperebel.com-1200-8-of-29.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://static.toiimg.com/thumb/57407393.cms?imgsize=77196&width=800&height=800",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg?quality=82&strip=1",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://juiceland.pk/wp-content/uploads/2021/04/Rainbow-Shake.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  }
];
const Menu = () => {
  const [menus, setMenus] = useState(DATA);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categories = DATA.reduce(
      (values, item) => {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    setCategories(categories);
  }, []);

  const filterItems = category => {
    if (category === "all") {
      setMenus(DATA);
    } else {
      const filteredMenus = DATA.filter(menu => menu.category === category);
      setMenus(filteredMenus);
    }
  };
  return (
    <section className="menu">
      <div className="menu-title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <div className="menu-btn-container">
        {" "}
        {categories.map((category, index) => (
          <button key={index} className="filter-btn" onClick={() => filterItems(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="menu-items">
        {menus.map(menu => (
          <article key={menu.id} className="menu-item">
            <img src={menu.img} alt={menu.title} className="menu-item-photo" />
            <div className="menu-item-info">
              <header>
                <h4>{menu.title}</h4>
                <h4 className="price">${menu.price}</h4>
              </header>
              <p className="menu-item-text">{menu.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Menu;
