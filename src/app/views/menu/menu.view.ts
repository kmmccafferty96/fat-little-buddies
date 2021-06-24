import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FAT_LITTLE_BUDDIES_TITLE } from '../../app.component';

export interface MenuCategory {
  title: string;
  description?: string;
  items: MenuItem[];
}

export interface MenuItem {
  title: string;
  description?: string;
  price: string | number;
}

@Component({
  selector: 'flb-menu',
  templateUrl: './menu.view.html',
  styleUrls: ['./menu.view.scss']
})
export class MenuView {
  menu: MenuCategory[] = [
    {
      title: `Appetizers`,
      items: [
        { title: `Todd's Seasoned Flat Fries (Sm/Lg)`, price: '4 / 5' },
        { title: `Tater Tots (Sm/Lg)`, price: '4 / 5' },
        { title: `Fresh Cut Fries (Sm/Lg)`, price: '4 / 5' },
        { title: `Fresh Onion Rings (Sm/Lg)`, price: '4 / 5' },
        { title: `Homemade Chips (Sm/Lg)`, description: `Served with french onion dip`, price: '4 / 6' },
        { title: `Nacho Chips`, description: `Served with choice of dip`, price: 6 },
        {
          title: `Lauren's Sweet Potato Fries (Sm/Lg)`,
          description: `Topped with maple cinnamon sugar & served with...`,
          price: '5 / 7'
        },
        { title: `Breaded Mushrooms`, description: `Served with ranch`, price: 6 },
        { title: `Mozzarella Sticks`, description: `Served with marinara`, price: 6 },
        { title: `Macaroni & Cheese Bites`, description: `Served with ranch`, price: 6 },
        { title: `Jalapeno Poppers`, description: `Served with ranch`, price: 6 },
        { title: `Jalapeno & Cheese Stuffed Pretzel`, description: `Served with ranch`, price: 6 },
        { title: `Broccoli Cheddar Bites`, description: `Contains bacon flakes & served with ranch`, price: 7 },
        { title: `Fried Green Beans`, description: `Served with Spicy Tony's Sauce`, price: 7 },
        { title: `Chicken Fingers`, description: `Served with choice of dip`, price: 7 },
        { title: `Panko Crusted Shrimp (6/12)`, description: `Served with Owen's Tarter Sauce`, price: '7 / 10' },
        { title: `Deep Fried Shrimp Basket`, description: `Served with cocktail sauce`, price: 8 },
        { title: `Potato Skins`, description: `With cheddar cheese, bacon, and sour cream`, price: 8 },
        { title: `Bacon Cheese "Flat" Fries`, description: `Served with sour cream`, price: 8 },
        { title: `Bacon Cheese Fresh Cut Fries`, description: `Served with sour cream`, price: 8 },
        { title: `Bacon Cheese Tater Tots`, description: `Served with sour cream`, price: 8 },
        {
          title: `Veggie Nachos`,
          description: `With cheddar cheese, tomatoes, black olives, onion, salsa, and sour cream`,
          price: 8
        },
        {
          title: `Beef or Chicken Nachos`,
          description: `With cheddar cheese, tomatoes, black olives, onion, salsa, and sour cream`,
          price: 10
        },
        { title: `Pizza "Flat" Fries`, description: `With Marinara, Mozzarella & Pepperoni`, price: 10 },
        {
          title: `Porkos Nachos`,
          description: `With pulled pork, cheddar cheese, bacon, jalapenos, onion, and sour cream`,
          price: 10
        }
      ]
    },
    {
      title: `Wings`,
      description:
        `Sauces: FLB (Hot Buffalo w/ Italian seasoning), ` +
        `MK's Hot Buffalo, Medium Buffalo, Sear's Mild Buffalo, BBQ Jack, Hot BBQ, Carolina BBQ (Southern BBQ), ` +
        `Sweet Hot Chili, Cajun Dry Rub, Teriyaki, Hot Teriyaki, Krabby's Bourbon, Garlic Parmesan, Hot Garlic, ` +
        `Hot Garlic Parmesan, Joe's Honey Mustard, and Weihn's Hot Ranch.`,
      items: [
        { title: `6 Wings`, price: 6 },
        { title: `12 Wings`, price: 11 },
        { title: `Blue Cheese or Ranch and Celery`, price: 1 },
        { title: `Extra Side Sauce`, price: 0.5 }
      ]
    },
    {
      title: `Pizza`,
      description: `Comes in both 9" and 12"`,
      items: [
        { title: `Cheese`, description: `Gallucci's Marinara or FLB Sauce`, price: '8 / 10' },
        {
          title: `BBQ Chicken`,
          description: `BBQ Sauce, Grilled Chicken, Bacon, and Mozzarella Cheese`,
          price: '10 / 13'
        },
        {
          title: `BBQ Chicken`,
          description: `BBQ Sauce, Grilled Chicken, Bacon, and Mozzarella Cheese`,
          price: '10 / 13'
        },
        {
          title: `Buffalo Chicken`,
          description: `Hot Ranch, Grilled Chicken in Mild Buffalo, and Jack Cheddar`,
          price: '10 / 13'
        },
        {
          title: `The Bulldog`,
          description: `Pepperoni, Sausage, Mushrooms, Banana Peppers, and Mozzarella`,
          price: '10 / 13'
        },
        {
          title: `Additional Toppings`,
          description: `Pepperoni, Sausage Bacon, Onion, Mushroom, Pepper, Banana Peppers, Tomato, and Extra Cheese`,
          price: '1 / 2'
        }
      ]
    },
    {
      title: `Quesadillas`,
      description: `Served with hot, medium, or mild salsa & sour cream`,
      items: [
        { title: `Cheese`, price: 7 },
        { title: `Veggie`, description: `Red & green peppers, onion, tomatoes, and jack cheddar`, price: 7 },
        { title: `Chicken & Cheese`, description: `Grilled or fried chicken & jack cheddar`, price: 9 },
        {
          title: `Fajita Chicken`,
          description: `Grilled chicken, red & green peppers, onion, mushrooms, and jack cheddar`,
          price: 10
        },
        {
          title: `Fajita Steak`,
          description: `Grilled steak, red & green peppers, onion, mushrooms, and jack cheddar`,
          price: 10
        },
        {
          title: `Fajita Steak`,
          description: `Grilled steak, red & green peppers, onion, mushrooms, and jack cheddar`,
          price: 11
        },
        { title: `BBQ Chicken`, description: `BBQ sauce, grilled or fried chicken, and jack cheddar`, price: 10 },
        { title: `Chicken Mac`, description: `BBQ sauce, grilled or fried chicken, and jack cheddar`, price: 10 }
      ]
    },
    {
      title: `Salads`,
      description: `Dressings: Ranch, Blue Cheese, Italian, Honey Mustard, Greek, or Balsamic`,
      items: [
        { title: `Side`, description: `House or Caesar`, price: 6 },
        {
          title: `House`,
          description: `Lettuce, Tomato, Celery, Peppers, Mushroom, Black Olives, Croutons, and Cheddar Jack`,
          price: 8
        },
        { title: `Caesar`, description: `Romaine, Tomatoes, Onion, Parmesan, and Croutons`, price: 8 },
        { title: `Greek`, description: `Romaine, Geta, Tomatoes, Olives, and Peppercini`, price: 8 },
        {
          title: `Buffalo Chicken`,
          description: `Lettuce, FLB tossed Grilled or Fried Chicken, Celery, Banana Peppers, Tomatoes, and Crumbled Blue Cheese`,
          price: 8
        },
        {
          title: `Add Chicken`,
          price: 2
        }
      ]
    },
    {
      title: `Burgers`,
      description: `Comes with chips`,
      items: [
        {
          title: `FLB`,
          description: `1/3 lb. burger with choice of cheese, lettuce, tomato, pickles, onion on a Broiche Bun`,
          price: 9
        },
        { title: `Joyce`, description: `Add BBQ Sauce, Bacon, and an Onion Ring`, price: 11 },
        { title: `Gassman`, description: `Add Cajun, Banana Peppers, Blue Cheese, and Hot Sauce`, price: 10 },
        { title: `Dude`, description: `Add a Hash brown`, price: 10 },
        { title: `Colin`, description: `Add Bacon Cheese Fries`, price: 11 },
        { title: `Mushroom Swiss`, description: `Add Grilled Mushrooms and Swiss`, price: 10 },
        { title: `Breakfast`, description: `Add a Fried Egg, Bacon, and Cheddar Cheese`, price: 11 },
        { title: `Red's`, description: `Add Jalapenos, Pepper Jack, Hot BBQ, and an Onion Ring`, price: 10 },
        { title: `Porky's`, description: `Add Pulled Pork and Swiss`, price: 11 }
      ]
    },
    {
      title: `Chicken`,
      description: `Comes with chips`,
      items: [
        { title: `Uncle Pat's`, description: `Grilled Chicken, lettuce, and tomato on a Broiche Bun`, price: 9 },
        { title: `Bacon Swiss`, description: `Add Bacon, Swiss, and Mayo`, price: 10 },
        { title: `Buffalo Blue`, description: `Add Mild Buffalo, Provolone, and Blue Cheese`, price: 10 },
        { title: `Club`, description: `Add Bacon, Swiss, and Mayo`, price: 10 },
        { title: `Cajun`, description: `Add Cajun, Pepper Jack, and Ranch`, price: 10 }
      ]
    }
  ];

  constructor(private _titleService: Title) {
    this._titleService.setTitle(`Menu - ${FAT_LITTLE_BUDDIES_TITLE}`);
  }
}
