// import { HotCoffee, IcedCoffee } from "./coffee";

const HotCoffee = [
    // Hot Coffee
    HotCoffee1 = {
        Name: "Vanilla Latte",
        Image: "./src/assets/Coffee/HotCoffee1.png",
        Ingredients: {
            Ingredients1: "1 Shot of Espresso",
            Ingredients2: "175ml of semi skimmed milk",
            Ingredients3: "1 tsp Vanilla Syrup"
        },
        Recipe: {
            Step1: "Add a splash of vanilla syrup to your favourit mug",
            Step2: "Pour the freshly brewed espresso shot into your mug",
            Step3: "Froth your warmed milk or dairy alternative",
            Step4: "Gently add the milk into your mug, stir and enjoy"
        }
    },

    HotCoffee2 = {
        Name: "Cappuccino",
        Image: "./src/assets/Coffee/HotCoffee2.png",
        Ingredients: {
            Ingredients1: "1 Shot of Espresso",
            Ingredients2: "150ml semi skimmed milk",
            Ingredients3: "Pinch of cinnamon or chocolate shavings (optional)"
        },
        Recipe: {
            Step1: "Brew 1 shot of espresso",
            Step2: "Froth your warmed mil or dairy alternative",
            Step3: "Pour the espresso shot into your favourite mug",
            Step4: "Add the frothed milk or dairy alternative",
            Step5: "Sprinkle the cinnamon or chocolate shavings over the top"
        }
    },

    HotCoffee3 = {
        Name: "Caffé Americano",
        Image: "./src/assets/Coffee/HotCoffee3.png",
        Ingredients: {
            Ingredients1: "2 Shot of Espresso",
            Ingredients2: "250ml of hot water",
        },
        Recipe: {
            Step1: "Boil the water and pour it into your favourite mug",
            Step2: "Slowly pour the brewed espresso into the hot water and enjoy",
        }
    },

    HotCoffee4 = {
        Name: "Latte Macchiato",
        Image: "./src/assets/Coffee/HotCoffee4.png",
        Ingredients: {
            Ingredients1: "1 Shot of Espresso",
            Ingredients2: "175ml of semi skimmed Milk",
        },
        Recipe: {
            Step1: "Brew 1 shot of espresso",
            Step2: "Froth your warmed milk or dairy alternative",
            Step3: "Pour the warm frothy milk into your favourite mug",
            Step4: "Slowly pour the coffee in the middle of your mug"
        }
    }
];

const IcedCoffee = [
    // Iced Coffee
    IcedCoffee1 = {
        Name: "Cappuccino",
        Image: "./src/assets/Coffee/IcedCoffee1.png",
        Ingredients: {
            Ingredients1: "1 Shot of Espresso",
            Ingredients2: "Pinch of cinnamon",
            Ingredients3: "6-8 ice cubes",
            Ingredients4: "80ml cold milk"
        },
        Recipe: {
            Step1: "Brew a shot of espresso",
            Step2: "Add ice cubes into your favourite glass",
            Step3: "Pour the espresso over the ice",
            Step4: "Give it a stir to cool the espresso",
            Step5: "Froth the milk",
            Step6: "Pour the frothed milk over the espresso",
            Step7: "Top with a dash of cinnamon"
        }
    },

    IcedCoffee2 = {
        Name: "Caramel Macchiato",
        Image: "./src/assets/Coffee/IcedCoffee2.png",
        Ingredients: {
            Ingredients1: "1 Shot of Espresso",
            Ingredients2: "175ml of semi skimmed milk",
            Ingredients3: "Ice cubes",
            Ingredients4: "1 tbsp vanilla syrup",
            Ingredients5: "1 tsp caramel sauce"
        },
        Recipe: {
            Step1: "Brew 1 shot of espresso",
            Step2: "Fill your glass with ice",
            Step3: "Add the vanilla syrup and the milk and stir gently",
            Step4: "Stir it up!",
            Step5: "Pour the coffee in the middle of your mug",
            Step6: "Finish with a drizzle of caramel sauce for a special treat"
        }
    },

    IcedCoffee3 = {
        Name: "Caramel Latte",
        Image: "./src/assets/Coffee/IcedCoffee3.png",
        Ingredients: {
            Ingredients1: "2 Shot of Espresso",
            Ingredients2: "125ml whipping cream",
            Ingredients3: "1 tsp granulated sugar",
            Ingredients4: "1 tsp vanilla essence",
            Ingredients5: "1 tsp caramel sauce",
            Ingredients6: "1/2 tsp. tbsp brown sugar",
            Ingredients7: "Ice cubes",
        },
        Recipe: {
            Step1: "Brew 2 shot of espresso",
            Step2: "Combine cream sugar and vanilla in a bowl",
            Step3: "Beat with a hand mixer or whisk until thick",
            Step4: "Put the caramel brown sugar and coffee in a glass",
            Step5: "Add the ice cubes",
            Step6: "Slowly drizzle with vanilla cream and enjoy"
        }
    },

    IcedCoffee4 = {
        Name: "Latte",
        Image: "./src/assets/Coffee/IcedCoffee4.png",
        Ingredients: {
            Ingredients1: "30ml of espresso",
            Ingredients2: "175ml of semi skimmed milk",
            Ingredients3: "1 tbsp vanilla syrup",
            Ingredients4: "Ice cubes"
        },
        Recipe: {
            Step1: "Brew the espresso",
            Step2: "Fill your glass with ice, and pour in your freshly brewed espresso",
            Step3: "Combine your milk or dairy alternative, add a splash of syrup in a jug and stir",
            Step4: "Pour the milk and syrup mixture into your glass over the ice and espresso"
        }
    }
];

// for (let i = 0; i < HotCoffee.length; i++) {
//     console.log("HotCoffee " + HotCoffee[i].Name)
// }

// for (let i = 0; i < IcedCoffee.length; i++) {
//     console.log("IcedCoffee " + IcedCoffee[i].Name)
// }

let coffee = document.getElementById("coffee");

// coffee.insertAdjacentHTML("beforeend", "<img src=''>");

// for (let i = 0; i < HotCoffee.length; i++) {
//     coffee.insertAdjacentHTML("beforeend", `<p>${HotCoffee[i].Name}</p>`)
//     coffee.insertAdjacentHTML("beforeend", `<img src='${HotCoffee[i].Image}'>`);
// }

// for (let ii = 0; ii < IcedCoffee.length; ii++) {
//     coffee.insertAdjacentHTML("beforeend", `<p>${IcedCoffee[ii].Name}</p>`)
//     coffee.insertAdjacentHTML("beforeend", `<img src='${IcedCoffee[ii].Image}'>`);
// }