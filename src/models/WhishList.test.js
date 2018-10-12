import { WhishListItem, WhishList } from "./WhishList";

it("can create an instance of model", () => {
  const item = WhishListItem.create({
    name: "Dan dana dan",
    price: 25
  });

  expect(item.price).toBe(25);
  expect(item.image).toBe("");
  item.changeName("Narnia");
  expect(item.name).toBe("Narnia");
});

it("can create a whishlist", () => {
  const list = WhishList.create({ items: [{ name: "asdasd", price: 25 }] });
  expect(list.items.length).toBe(1);
  expect(list.items[0].price).toBe(25);
});

it("can add new items to list", () => {
  const list = WhishList.create();
  list.add(WhishListItem.create({ name: "Someeme", price: 34 }));

  expect(list.items.length).toBe(1);
  expect(list.items[0].name).toBe("Someeme");
  list.items[0].changeName("CHANGED NAME");
  expect(list.items[0].name).toBe("CHANGED NAME");
});
