import greekSaladImage from "../assets/images/traditional-Greek-salad.jpg";
import CretanDakosSaladImage from "../assets/images/cretan-dakos-salad.webp";
import caesarSaladImage from "../assets/images/salata-caesar-me-kotopoulo-pane.jpg";
import octopusSaladImage from "../assets/images/salata-xtapodi.jpg";
import zucchiniImage from "../assets/images/kolokithokeftedes.jpg";
import beefGiouvetsiImage from "../assets/images/giouvetsi-mosxari.jpg";
import chickenLemonato from "../assets/images/kotopoulo-lemonato-patates.jpg";
import lambKleftikoImage from "../assets/images/lamb-kleftiko.jpg";
import moussakaImage from "../assets/images/mousakas.jpg";
import gyrosImage from "../assets/images/gyros-plate.webp";
import pitaSouvlakiImage from "../assets/images/souvlaki-tylixto.jpg";
import lambChopsImage from "../assets/images/lamb-chops.jpg";
import beefBurgerImage from "../assets/images/mpiftekia-gemista.jpg";
import tomahawkImage from "../assets/images/tomahawk.webp";
import octopusImage from "../assets/images/xtapodi-xidato.jpg";
import shrimpSaganakiImage from "../assets/images/garides-saganaki.jpg";
import anchoviesImage from "../assets/images/gauros-thganhtos.jpg";
import stuffedSquidImage from "../assets/images/kalamari-gemisto.jpg";
import seabassImage from "../assets/images/lavraki-sxaras.jpg";
import mpaklavasImage from "../assets/images/mpaklavas.jpg";
import galaktompourekoImage from "../assets/images/galaktompoureko.jpg";
import ravaniImage from "../assets/images/ravani.jpg";

const menuData = [
  {
    title: "Starters",
    note: "Great for sharing",
    items: [
      {
        name: "Greek Salad",
        price: "12.00$",
        image: "greekSaladImage",
        description:
          "Fresh, sun-ripened tomatoes, crunchy cucumbers, onions, and olives topped with a classic block of creamy feta cheese, finished with Greek herbs and pure olive oil.",
      },
      {
        name: "Cretan Dakos Salad",
        price: "12.00$",
        image: "cretanDakosSaladImage",
        description:
          "Crisp Cretan barley rusk topped with sweet, sun-ripened tomatoes, rich crumbled white cheese, wild oregano, and a drizzle of premium extra virgin olive oil.",
      },
      {
        name: "Crispy Chicken Caesar Salad",
        price: "15.00$",
        image: "caesarSaladImage",
        description:
          "Fresh, crunchy greens paired with crispy breaded chicken, savory croutons, and shaved Parmesan, all brought together with a classic creamy Caesar dressing.",
      },
      {
        name: "Mediterranean Octopus Salad",
        price: "16.00$",
        image: "octopusSaladImage",
        description:
          "Char-grilled octopus paired with peppery arugula, sweet roasted tomatoes, and savory olives, finished with a bright, creamy dressing.",
      },
      {
        name: "Greek Zucchini Fritters",
        price: "10.00$",
        image: "zucchiniImage",
        description:
          "Savory, golden zucchini fritters infused with Greek feta and aromatic fresh herbs, perfectly paired with a creamy garlic-yogurt dip.",
      },
    ],
  },
  {
    title: "Greek Dishes",
    note: "Traditional Greek Dishes",
    items: [
      {
        name: "Traditional Beef Giouvetsi",
        price: "20.00$",
        image: "beefGiouvetsiImage",
        description:
          "Succulent, clay-pot style braised beef over tender orzo pasta, bathed in a rich, spiced heirloom tomato reduction. Authentic Mediterranean comfort in every spoonful.",
      },
      {
        name: "Rustic Lemon-Herb Chicken Feast",
        price: "19.00$",
        image: "chickenLemonato",
        description:
          "Crispy, golden-baked chicken and tender roasted potatoes slow-cooked in a zesty, garlic-infused lemon sauce and finished with fresh herbs.",
      },
      {
        name: "Traditional Lamb Kleftiko",
        price: "22.00$",
        image: "lambKleftikoImage",
        description:
          "Succulent, fall-off-the-bone lamb slow-baked with tender potatoes and savory Greek herbs, sealing in all the rich, natural juices and flavors.",
      },
      {
        name: "Traditional Greek Moussaka",
        price: "17.00$",
        image: "moussakaImage",
        description:
          "A rich, baked casserole featuring layered eggplant, potatoes, and savory seasoned minced meat, blanketed under a thick, decadent layer of toasted béchamel sauce.",
      },
    ],
  },
  {
    title: "Grill Dishes",
    note: "Flame Grilled Dishes",
    items: [
      {
        name: "The Ultimate Gyros Platter",
        price: "18.00$",
        image: "gyrosImage",
        description:
          "Juicy, seasoned rotisserie meat paired with crisp fries, toasted pita, a vibrant garden salad, and authentic, garlic-infused tzatziki sauce.",
      },
      {
        name: "Pita Souvlaki Wrap",
        price: "10.00$",
        image: "pitaSouvlakiImage",
        description:
          "Tender grilled chicken skewers, crispy fries, and fresh tomatoes tucked into a warm pita bread with authentic, garlic-infused tzatziki sauce.",
      },
      {
        name: "Gourmet Grilled Lamb Chops",
        price: "25.00$",
        image: "lambChopsImage",
        description:
          "Juicy, flame-seared lamb chops served medium-rare and drizzled with a bright, tangy Mediterranean herb and olive oil salsa for the ultimate flavor balance.",
      },
      {
        name: "Feta-Stuffed Greek Burgers",
        price: "18.00$",
        image: "beefBurgerImage",
        description:
          "Tender, seasoned grilled beef patties with a warm, melty center of feta and tomato, paired with crispy roasted sweet potato wedges.",
      },
      {
        name: "Flame-Grilled Tomahawk Steak",
        price: "30.00$",
        image: "tomahawkImage",
        description:
          "Juicy, richly marbled bone-in ribeye steak seared over high flame, seasoned simply with sea salt and fresh rosemary to let the premium quality shine.",
      },
    ],
  },
  {
    title: "Seafood Dishes",
    note: "Dishes from the Aegean Sea",
    items: [
      {
        name: "Marinated Octopus Meze",
        price: "16.00$",
        image: "octopusImage",
        description:
          "Succulent, tender octopus steeped in a zesty vinegar and olive oil infusion, elegantly tossed with capers, aromatics, and delicate pearl onions.",
      },
      {
        name: "Shrimp Saganaki",
        price: "19.00$",
        image: "shrimpSaganakiImage",
        description:
          "Succulent jumbo prawns slow-baked in a savory, herb-spiced tomato reduction and blanketed with warm, melted Greek feta cheese.",
      },
      {
        name: "Crispy Fried Anchovies",
        price: "17.00$",
        image: "anchoviesImage",
        description:
          "Fresh Mediterranean anchovies lightly dusted and fried to a delicate, savory crunch. The perfect seafood meze, finished with a generous squeeze of fresh lemon.",
      },
      {
        name: "Grilled Stuffed Squid",
        price: "23.00$",
        image: "stuffedSquidImage",
        description:
          "Succulent grilled squid tubes filled with a rich, herbaceous feta and pepper stuffing, drizzled with extra virgin olive oil and fresh lemon juice.",
      },
      {
        name: "Fresh Grilled Sea Bass",
        price: "25.00$",
        image: "seabassImage",
        description:
          "Premium whole sea bass expertly grilled over an open flame, finished with a classic Greek ladolemono sauce and wild Mediterranean herbs.",
      },
    ],
  },
  {
    title: "Desserts",
    note: "Sweet finishes",
    items: [
      {
        name: "Crispy Spiced Walnut Baklava",
        price: "10.00$",
        image: "mpaklavasImage",
        description:
          "Pure indulgence in every layer. Experience the shattering crunch of delicate, buttery phyllo meeting the sweet warmth of cinnamon-spiced nuts and a glossy, rich honey reduction",
      },
      {
        name: "Traditional Galaktoboureko",
        price: "10.00$",
        image: "galaktompourekoImage",
        description:
          "An iconic Greek dessert featuring a velvety, rich custard core enclosed in crunchy, syrup-soaked phyllo sheets, finished with a hint of orange zest and cinnamon.",
      },
      {
        name: "Greek Ravani",
        price: "10.00$",
        image: "ravaniImage",
        description:
          "A wonderfully moist and airy Greek semolina cake soaked in a fragrant citrus syrup, elegantly finished with vibrant crushed pistachios and candied peel.",
      },
    ],
  },
];

export default menuData;
