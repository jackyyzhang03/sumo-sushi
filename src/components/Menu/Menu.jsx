import * as React from "react";
import MenuItem from "./MenuItem";
import MenuContainer from "./MenuContainer";

const Menu = () => {
  return (
    <MenuContainer>
      <div className="content">
        <h1>Appetizers</h1>
        <div className="group">
          <MenuItem name="A1. MISO SOUP" price="$2.50">
            Soy bean served with seaweed, mushrooms, and green onion
          </MenuItem>
          <MenuItem name="A2. SPICY FISH SOUP" price="$7.00">
            Fresh white fish with seafood, vegetables and tofu
          </MenuItem>
          <MenuItem name="A3. MANDU SOUP" price="$6.00">
            Wonton soup with beaten egg folded in
          </MenuItem>
          <MenuItem name="A4. SO MYUN SOUP" price="$6.00">
            Thin Japanese noodles with fish broth
          </MenuItem>
          <MenuItem name="A5. GREEN SALAD" price="$6.00">
            Crispy garden greens delightfully arranged with special house
            dressing
          </MenuItem>
          <MenuItem name="A6. SEAWEED SALAD" price="$6.00">
            Sliced cucumber, seaweed, shrimp, octopus, crabmeat
          </MenuItem>
          <MenuItem name="A7. SOFT SHELL CRAB" price="$15.00">
            Deep fried soft shell crab with house sauce
          </MenuItem>
          <MenuItem name="A8. SUSHI PIZZA" price="$12.00">
            Deep fried sushi rice topped with salmon, tobiko and green onion
          </MenuItem>
          <MenuItem name="A9. GYOZA" price="$7.00">
            Deep fried wontons (5 pcs)
          </MenuItem>
          <MenuItem name="A10. EDAMAME" price="$6.00">
            Broiled soybeans
          </MenuItem>
        </div>
        <hr></hr>
        <h1>Sushi</h1>
        <MenuItem header price="Sushi (2 pc)" secondaryPrice="Sashimi (3 pc)" />
        <MenuItem name="SAKE Salmon" price="$6.00" secondaryPrice="$9.00" />
        <MenuItem name="MAGURO Tuna" price="$7.00" secondaryPrice="$10.00" />
        <MenuItem
          name="HAMACHI Yellow Tail"
          price="$8.00"
          secondaryPrice="$11.00"
        />
        <MenuItem
          name="KAIBA­SHIRA Scallop"
          price="$10.00"
          secondaryPrice="$12.00"
        />
        <MenuItem
          name="UNI Sea Urchin"
          price="$12.00"
          secondaryPrice="$15.00"
        />
        <MenuItem name="TAKO Octopus" price="$6.00" secondaryPrice="$8.00" />
        <hr></hr>
        <h1>Maki</h1>
        <MenuItem
          header
          price="Roll (6 pc)"
          secondaryPrice="Hand roll (1 pc)"
        />
        <MenuItem
          name="CALI­FORNIA MAKI"
          price="$6.95"
          secondaryPrice="$4.95"
        />
        <MenuItem name="SAKE MAKI" price="$6.95" secondaryPrice="$5.95" />
        <MenuItem name="SPICY TUNA MAKI" price="$8.95" secondaryPrice="$6.95" />
        <MenuItem
          name="SPICY SALMON MAKI"
          price="$7.95"
          secondaryPrice="$5.95"
        />
        <MenuItem
          name="SPICY SCALLOP MAKI"
          price="$8.95"
          secondaryPrice="$6.95"
        />
        <MenuItem name="SNOW CRAB MAKI" price="$10.95" secondaryPrice="$7.95" />
      </div>
    </MenuContainer>
  );
};

export default Menu;
