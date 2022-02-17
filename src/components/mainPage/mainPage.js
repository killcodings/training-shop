import Block1Component from "../block1/Block1Component";
import Advantages from "../advantages/Advantages";
import Block2Component from "../block2/Block2Component";
import NewsComponent from "../block3/NewsComponent";
import Block4 from "../block4/block4";
import Block5Component from "../block5/block5";

const advantageItem = [
  {
    imgUrl: require("../advantages/adv1.png"),
    p: "FREE SHIPPING",
    h2: "On all UA order or order above $100",
  },
  {
    imgUrl: require("../advantages/adv2.png"),
    p: "30 DAYS RETURN",
    h2: "Simply return it within 30 days for an exchange",
  },
  {
    imgUrl: require("../advantages/adv3.png"),
    p: "SUPPORT 24/7",
    h2: "Contact us 24 hours a day, 7 days a week",
  },
];

const items = [
  {
    href: "№",
    imgUrl: require("../block3/news1.jpg"),
    p: "New Season",
    h2: "lookbook collection",
  },
];

const items2 = [
  {
    href: "№",
    imgUrl: require("../block3/news1.jpg"),
    p: "Sale",
    h2: "GET UP TO ",
    span: "50% OFF",
  },
];
const cards2 = [
  {
    href: "#",
    imgUrl: require("../block2/Rectangle1.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "5",
  },
  {
    href: "#",
    imgUrl: require("../block2/Rectangle2.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "5",
  },
  {
    href: "#",
    imgUrl: require("../block2//Rectangle3.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "4",
  },
  {
    href: "#",
    imgUrl: require("../block2//Rectangle4.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "#",
    imgUrl: require("../block2//Rectangle5.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "#",
    imgUrl: require("../block2//Rectangle6.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "#",
    imgUrl: require("../block2//Rectangle7.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "#",
    imgUrl: require("../block2//Rectangle8.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
];
const cards = [
  {
    href: "#",
    imgUrl: require("../block2/Rectangle1.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "5",
  },
  {
    href: "#",
    imgUrl: require("../block2/Rectangle2.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "5",
  },
  {
    href: "#",
    imgUrl: require("../block2//Rectangle3.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "4",
  },
  {
    href: "#",
    imgUrl: require("../block2//Rectangle4.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "#",
    imgUrl: require("../block2//Rectangle5.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "#",
    imgUrl: require("../block2//Rectangle6.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "#",
    imgUrl: require("../block2//Rectangle7.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "#",
    imgUrl: require("../block2//Rectangle8.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
];
function MainPage() {
  return (
    <div className="site">
      <Block1Component />
      <Advantages advantageItem={advantageItem} />
      <Block2Component name="women" products={cards} />
      <Block2Component name="men" products={cards2} />
      <div className="container block3">
        <NewsComponent items={items} />
        <NewsComponent items={items2} />
      </div>
      <Block4 />
      <Block5Component />
    </div>
  );
}

export default MainPage;
