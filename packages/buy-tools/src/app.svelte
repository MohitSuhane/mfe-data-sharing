<script>
  import fruit from "home/fruit";
  import store from "store/store";
  import "bootstrap/dist/css/bootstrap.css";

  let image = store.image;
  store.subscribe(() => {
    image = store.image;
  });
  const addToCart = () => {
    store.incrementCount();
    store.setFruit(fruit[image]);
  };
</script>

<div class="card card-dark" style="width: 19rem;">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img class="card-img-top" src={fruit[image].image} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title text-center">{fruit[image].name}</h5>
    <p class="card-text text-center">
      {fruit[image].description}
    </p>
    <button on:click={addToCart} class="btn btn-lg btn-lg btn-block btn-primary"
      >Add to Cart</button
    >
  </div>
</div>
