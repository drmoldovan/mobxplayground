import { types } from "mobx-state-tree";

const data = {
  name: "Dan dana dan",
  price: 24,
  image: "https://...src"
};

export const WhishListItem = types
  .model({
    name: types.string,
    price: types.number,
    image: ""
  })
  .actions(self => ({
    changeName(newName) {
      self.name = newName;
    },
    changePrice(newPrice) {
      self.price = newPrice;
    },
    changeImage(newImage) {
      self.image = newImage;
    }
  }));

export const WhishList = types
  .model({
    items: types.optional(types.array(WhishListItem), [])
  })
  .actions(self => ({
    add(item) {
      self.items.push(item);
    }
  }));
