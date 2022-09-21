const createStore = () => {
  let count = 0;
  let image = 0;
  let fruit = [];
  const subscribers = [];

  return {
    get count() {
      return count;
    },
    incrementCount() {
      count += 1;
      subscribers.forEach((fn) => fn());
    },
    get image() {
      return image;
    },
    set image(img) {
      image = img;
      subscribers.forEach((fn) => fn());
    },
    get fruit() {
      return fruit;
    },
    setFruit(item) {
      let newFruit = { ...item, id: count };

      fruit.push(newFruit);
      subscribers.forEach((fn) => fn());
    },
    subscribe(fn) {
      subscribers.push(fn);
    },
  };
};

const store = createStore();

export default store;
