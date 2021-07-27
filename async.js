// synchronous

const { reject } = require("async");

// const { reject } = require("async");

// console.log(" I ");

// console.log(" eat  ");

// console.log(" spoon ");

// console.log(" ice cream  ");

// console.log(" with a  ");

// asynchronous
// console.log(" I ");

// console.log(" eat  ");

// setTimeout(() => {
//   console.log(" ice cream  ");
// }, 4000);

// console.log(" with a  ");

// console.log(" spoon ");

// function one(call_two) {
//   call_two();
//   console.log(" step 1 complete. please call step 2");
// }

// function two() {
//   console.log(" step 2 ");
// }

// one(two);

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let order = (Fruit_name, call_production) => {
//   setTimeout(() => {
//     call_production();

//     console.log(`${stocks.Fruits[Fruit_name]} was selected`);
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");

//     setTimeout(() => {
//       console.log("the fruit has been chopped");

//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);
//       }, 1000);

//       setTimeout(() => {
//         console.log("the machine was started");

//         setTimeout(() => {
//           console.log(`ice cream was placed on ${stocks.holder[0]}`);

//           setTimeout(() => {
//             console.log(`${stocks.toppings[0]} was added as toppings`);

//             setTimeout(() => {
//               console.log(`serve ice cream`);
//             }, 2000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// order(0, production);

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let is_shop_open = true;
// // let is_shop_open = false;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("our shop is closed"));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   .then(() => {
//     return order(0000, () => console.log("production has started"));
//   })

//   .then(() => {
//     return order(2000, () => console.log("fruit was chopped"));
//   })

//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`)
//     );
//   })

//   .then(() => {
//     return order(1000, () => console.log("start the machine"));
//   })

//   .then(() => {
//     return order(2000, () =>
//       console.log(`ice cream placed on ${stocks.holder[0]}`)
//     );
//   })

//   .then(() => {
//     return order(3000, () => {
//       console.log(`${stocks.toppings[0]} was selected`);
//     });
//   })

//   .then(() => {
//     return order(1000, () => {
//       console.log("ice cream was served");
//     });
//   })

//   .catch(() => {
//     console.log("customer left");
//   })

//   .finally(() => {
//     console.log("day ended shop is closed");
//   });

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let is_shop_open = true;
// // let is_shop_open = false;

// let order = () => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// };

// async function order() {
//   try {
//     await abc;
//   } catch (error) {
//     console.log("abc doesn't exist", error);
//   } finally {
//     console.log("runs code anways");
//   }
// }

// order().then(() => {
//   console.log("hello");
// });

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let is_shop_open = true;
// // let is_shop_open = false;

// let toppings_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("which topping would you love"));
//     }, 3000);
//   });
// };

// async function kitchen() {
//   console.log(" A ");
//   console.log(" B ");
//   console.log(" C ");

//   await toppings_choice();

//   console.log(" D ");
//   console.log(" E ");
// }

// kitchen();

// console.log("doing the dishes ");
// console.log("cleaning the tables ");
// console.log("taking other orders ");

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// let is_shop_open = true;
let is_shop_open = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0000);
    console.log("start the production");

    await time(2000);
    console.log("cut the fruit");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[0]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} was selected`);

    await time(2000);
    console.log("serve ice cream");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended, shop is closed");
  }
}

kitchen();
