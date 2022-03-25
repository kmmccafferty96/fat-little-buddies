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
      title: `Starters`,
      items: [
        {
          title: `Basket of Todd's Flat or Fresh Cut Fries, Onion Rings, Tater Tots, or Homemade Chips (sm/lg)`,
          description: `Add bacon, cheddar cheese, and sour cream for $2`,
          price: '4 / 7'
        },
        { title: `Broccoli Cheddar Bites`, price: 7 },
        { title: `Fried Green Beans`, price: 7 },
        { title: `Panko Crusted Shrimp (sm/lg)`, price: '8 / 12' },
        { title: `Cheese Curds`, price: 7 },
        { title: `Potato Skins`, price: 8 },
        { title: `Spicy Pickle Slices`, price: 7 },
        { title: `Mozzarella Sticks`, price: 6 },
        { title: `Jalapeno Peppers`, price: 6 },
        { title: `Pizza Flat Fries`, price: 6 },
        { title: `Macaroni and Cheese Bites`, price: 10 },
        { title: `Breaded Mushrooms`, price: 6 },
        { title: `Jalapenos & Cheese Stuffed Pretzel`, price: 6 },
        { title: `Chicken Fingers`, description: `Choice of dip`, price: 6 },
        { title: `Pretzel Sticks`, price: 7 },
        { title: `Nachos`, description: `Choice of dip`, price: 7 },
        {
          title: `Lauren's Sweet Potato Fries`,
          description: `Sprinkled with cinnamon maple sugar`,
          price: 7
        },
        {
          title: `Loaded Beef, Chicken, or Pork Nachos`,
          description: `w/ cheddar cheese, tomato, black olives, salsa, and sour cream`,
          price: 11
        }
      ]
    },
    {
      title: `Pizza`,
      description: `Comes in both 9" and 12"`,
      items: [
        { title: `Cheese`, description: `Gallucci's Marinara or FLB Sauce`, price: '8 / 11' },
        {
          title: `BBQ Chicken`,
          description: `Grilled Chicken, BBQ Sauce, Bacon, and Mozzarella Cheese`,
          price: '10 / 14'
        },
        {
          title: `Buffalo Chicken`,
          description: `Grilled Chicken in Mild Buffalo, Hot Ranch, and Pepper Jack`,
          price: '10 / 14'
        },
        {
          title: `The Bulldog`,
          description: `Pepperoni, Sausage, Mushrooms, Banana Peppers, and Mozzarella`,
          price: '10 / 14'
        },
        {
          title: `Additional Toppings`,
          description: `Sausage, Pepperoni, Bacon, Onion, Mushroom, Peppers, Banana Peppers, Tomato, or Extra Cheese`,
          price: '1 / 2'
        }
      ]
    },
    {
      title: `Wings`,
      description:
        `Sauces: FLB (Hot Buffalo w/ Italian seasoning), ` +
        `MK's Hot Buffalo, Sear's Mild Buffalo, BBQ Jack, Hot BBQ (Southern BBQ), ` +
        `Sweet Hot Chili, Cajun Dry Rub, Teriyaki, Hot Teriyaki, Krabby's Bourbon, Garlic Parmesan, Hot Garlic, ` +
        `Hot Garlic Parmesan, Joe's Honey Mustard, and Weihn's Hot Ranch.`,
      items: [
        { title: `Half Dozen`, description: `Bone In or Boneless`, price: 7 },
        { title: `Dozen`, description: `Bone In or Boneless`, price: 13 },
        { title: `Blue Cheese or Ranch & Celery`, price: 1 },
        { title: `Extra Side Sauce`, price: 0.5 }
      ]
    },
    {
      title: `Quesadillas`,
      items: [
        { title: `Cheese`, description: `Shredded Cheddar Cheese, Tomato, and Sour Cream`, price: 8 },
        { title: `Veggie`, description: `Red and Green Peppers, Onions, Tomatoes, and Pepper Jack`, price: 11 },
        { title: `Chicken & Cheese`, description: `Grilled or Fried Chicken & Pepper Jack Cheese`, price: 11 },
        {
          title: `Fajita Chicken`,
          description: `Grilled Chicken, Red & Green Peppers, Onion, Mushrooms, and Pepper Jack`,
          price: 12
        },
        {
          title: `Fajita Steak`,
          description: `Grilled Steak, Red & Green Peppers, Onion, Mushrooms, and Pepper Jack`,
          price: 13
        },
        { title: `BBQ Chicken`, description: `BBQ sauce, Grilled or Fried Chicken, and Pepper Jack`, price: 12 },
        { title: `Chicken Mac`, description: `Grilled Chicken, Pepper Jack, and Mac and Cheese Bites`, price: 12 }
      ]
    },
    {
      title: `Salads`,
      description: `Dressings: Ranch, Blue Cheese, Italian, Honey Mustard, Greek, or Balsamic`,
      items: [
        {
          title: `House`,
          description: `Lettuce, Tomato, Celery, Peppers, Mushroom, Black Olives, Croutons, and Cheddar Jack`,
          price: 8
        },
        { title: `Caesar`, description: `Romaine, Tomatoes, Onion, Parmesan, and Croutons`, price: 8 },
        { title: `Greek`, description: `Romaine, Feta, Tomatoes, Olives, and Pepperoni`, price: 9 },
        {
          title: `Buffalo Chicken`,
          description: `Lettuce, FLB tossed Grilled or Fried Chicken, Celery, Banana Peppers, Tomatoes, and Crumbled Blue Cheese`,
          price: 12
        },
        {
          title: `Add Chicken`,
          price: 3
        }
      ]
    },
    {
      title: `Burgers`,
      description:
        `All burgers come with chips. Sub Fries, Tater Tots, Homestyle Chips, or Onion Rings for $2. ` +
        `Sub Side House Salad, Side Caesar, or Sweet Potato Fries for $3. Add Side of any Sauce for .50`,
      items: [
        {
          title: `FLB`,
          description: `1/3 lb. burger with choice of cheese, lettuce, tomato, pickles, onion on a Broiche Bun`,
          price: 9
        },
        { title: `Joyce`, description: `Add BBQ Sauce, Bacon, and an Onion Ring`, price: 11 },
        { title: `Gassman`, description: `Add Cajun, Banana Peppers, Blue Cheese, and Hot Sauce`, price: 10 },
        { title: `Dude`, description: `Add a Hash brown to the FLB`, price: 10 },
        { title: `Colin`, description: `Add Bacon Cheese Fries on top of FLB`, price: 11 },
        { title: `Mushroom Swiss`, description: `Add Grilled Mushrooms and Swiss`, price: 10 },
        { title: `Breakfast`, description: `Add a Fried Egg, Bacon, and Cheddar Cheese`, price: 12 },
        { title: `Red's`, description: `Add Jalapenos, Pepper Jack, Hot BBQ, and an Onion Ring`, price: 11 },
        { title: `Porky's`, description: `Add Pulled Pork and Swiss`, price: 11 }
      ]
    },
    {
      title: `Chicken`,
      description:
        `All sandwiches come with chips. Sub Fries, Tater Tots, Homestyle Chips, or Onion Rings for $2. ` +
        `Sub Side House Salad, Side Caesar, or Sweet Potato Fries for $3. Add Side of any Sauce for .50`,
      items: [
        { title: `Uncle Pat's`, description: `Grilled Chicken, Lettuce, and Tomato on a Broiche Bun`, price: 9 },
        { title: `Bacon Swiss`, description: `Add Bacon, Swiss, and Mayo`, price: 10 },
        { title: `Buffalo Blue`, description: `Add Mild Buffalo, Provolone, and Blue Cheese`, price: 10 },
        { title: `Club`, description: `Add Bacon, Swiss, and Mayo`, price: 10 },
        { title: `Cajun`, description: `Add Cajun Spice, Pepper Jack, and Ranch`, price: 10 },
        { title: `BBQ Chicken`, description: `BBQ sauce, Grilled or Fried Chicken, and Pepper Jack`, price: 10 }
      ]
    },
    {
      title: `Wraps`,
      description:
        `All wraps come with chips. Sub Fries, Tater Tots, Homestyle Chips, or Onion Rings for $2. ` +
        `Sub Side House Salad, Side Caesar, or Sweet Potato Fries for $3. Add Side of any Sauce for .50`,
      items: [
        { title: `BLT`, description: `Bacon, Lettuce, Tomato, and Mayo`, price: 8 },
        {
          title: `Veggie`,
          description: `Sauteed Mushrooms, Onion and Peppers, Lettuce, Tomato, and Pepper Jack`,
          price: 9
        },
        {
          title: `Buffalo Chicken`,
          description: `Grilled or Fried Chicken tossed with Mild Buffalo Sauce, Lettuce, Tomato, and Pepper Jack`,
          price: 10
        },
        {
          title: `BBQ Chicken`,
          description: `Grilled or Fried Chicken tossed with BBQ sauce, Lettuce, Tomato, and Pepper Jack`,
          price: 10
        },
        {
          title: `Chicken Caesar`,
          description: `Grilled or Fried Chicken with dressing, Lettuce, Tomato, and Parmesan Cheese`,
          price: 10
        },
        {
          title: `Chicken Parmesan`,
          description: `Grilled or Fried Chicken, Marinara, Provolone, and Parmesan Cheese`,
          price: 10
        },
        {
          title: `Chicken Ranch`,
          description: `Grilled or Fried Chicken, Bacon, Lettuce, Tomato, Ranch, and Jack Cheddar`,
          price: 10
        },
        {
          title: `Buffalo Blue Chicken`,
          description: `Grilled or Fried Chicken, Lettuce, Tomato, Hot Ranch, and Blue Cheese`,
          price: 10
        },
        {
          title: `Fajita Chicken`,
          description: `Grilled Steak, Red and Green Peppers, Onion, Mushroom, and Pepper Jack`,
          price: 12
        },
        {
          title: `Fajita Steak`,
          description: `Grilled Steak, Red and Green Peppers, Onion, Mushroom, and Pepper Jack`,
          price: 13
        }
      ]
    },
    {
      title: `Sandwiches`,
      description:
        `All sandwiches come with chips. Sub Fries, Tater Tots, Homestyle Chips, or Onion Rings for $2. ` +
        `Sub Side House Salad, Side Caesar, or Sweet Potato Fries for $3. Add Side of any Sauce for .50`,
      items: [
        { title: `BLT`, description: `Bacon, Lettuce, Tomato, and Mayo`, price: 8 },
        {
          title: `Polish Boy`,
          description: `Sausage on a Hoagie Roll, French Fries, Coleslaw, and BBQ sauce`,
          price: 8
        },
        { title: `Colleen's Yumbos`, description: `Two Ham & Swiss Sandwiches with Poppyseed Sauce`, price: 8 },
        { title: `TFO`, description: `Guinness cooked Corned Beef on Toasted Rye with Swiss`, price: 11 },
        { title: `Midge's Reuben`, description: `TFO, Add Sauerkraut and Thousand Island`, price: 12 },
        {
          title: `Sparky's Steak Philly`,
          description: `Grilled Steak, Mushrooms, Onions, Peppers, and Mozzarella on a Hoagie Roll`,
          price: 11
        },
        {
          title: `Betty's Chicken Philly`,
          description: `Grilled Chicken, Mushrooms, Onions, and Peppers and Mozzarella on a Hoagie Roll`,
          price: 11
        },
        { title: `Perch`, description: `Lightly Breaded fried Perch on a Hoagie Roll with Tartar Sauce`, price: 11 },
        {
          title: `Naughten's Meatball`,
          description: `Meatballs, Gallucci's Sauce, and Mozzarella served on a Hoagie Roll`,
          price: 9
        },
        {
          title: `Russell The Muscle`,
          description: `Fried Egg, Bacon, Tomato, American, Swiss, and Pepper Jack Cheese on White Bread`,
          price: 9
        },
        { title: `Pulled Pork`, description: `Pulled Pork and Pepper Jack on a Brioche Bun`, price: 10 },
        { title: `Mac-n-Cheese`, description: `A Grilled Cheese on White Bread with Mac and Cheese Bites`, price: 8 },
        { title: `Grilled Cheese`, description: `American Cheese on White Bread`, price: 6 },
        {
          title: `Big Chuck Sausage`,
          description: `Sausage, Gallucci's Marinara, and Mozzarella on a Hoagie Roll`,
          price: 9
        }
      ]
    },
    {
      title: `Entrees`,
      description:
        `All entrees come with a choice of Side, Coleslaw, Roll, and Butter. ` +
        `Sides - House Cut Fries, Flat Fries, Tater Tots, Homestyle Chips, Onion Rings, House or Caesar Salad. ` +
        `Add Sauteed Mushrooms and Onion or any Cheese for $2.`,
      items: [
        { title: `Sirloin 8oz`, price: 13 },
        { title: `Strip 10oz`, price: 17 },
        { title: `Perch`, description: `Lightly Breaded, Served with Tartar Sauce`, price: 16 },
        { title: `Walleye Bites`, description: `Breaded and Deep Fried`, price: 17 },
        { title: `BBQ Chicken`, price: 13 }
      ]
    }
  ];

  constructor(private _titleService: Title) {
    this._titleService.setTitle(`Menu - ${FAT_LITTLE_BUDDIES_TITLE}`);
  }
}
