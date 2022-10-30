app.component('product-display', {
    template:
    `
                <div id="app">
                <h1>{{ title }}</h1>
                <div class="row">
                    <div class="col-5 border border-dark">
                        <!--img v-bind:src="image" alt="" v-show="inStock" class="img-responsive" width="276" height="309"-->
                        <img v-bind:src="image" alt="" class="img-responsive" width="276" height="309">
                    </div>
                    <div class="col-7 border border-danger">
                        <p v-if="inventory > 10">En stock</p>
                        <p v-else-if="inventory <= 10 && inventory > 0">Presque en rupture!</p>
                        <p v-else>En rupture</p>
                        <br>

                        <!--div v-for="variant in variants" :key="variant.id" @mouseover="updateImage(variant.image, variant.color)" :style="style"-->
                        <div class="variants-wrapper">
                            <div v-for="(variant, index)  in variants" :key="variant.id"
                                 @mouseover="updateImage(variant)" class="color-circle" :style="{'background-color': variant.color}" >
<!--div v-for="(variant, index)  in variants" :key="variant.id"
                                 @mouseover="updateImage(variant.image)" class="color-circle" :style="{backgroundColor: variant.color}"-->

                            </div>
                        </div>
                        <br><br>
                        <button class="btn btn-primary" @click="addToCart" :class="{disabledButton: !inStock }">Ajouter au Panier</button>
                        <hr>
                        <div class="cart">Panier ({{ cart }})</div>

                        <!--button class="btn btn-primary" v-on:click="addToCart">Ajouter au Panier</button-->
                    </div>
                </div>
                <br>

            </div>

    `,
    data() {
        return {
            product: 'T-Shirt',
            brand: 'Gekkode',
            image: 'assets/images/t-shirt.jpg',
            inStock: true,
            inventory: 100,
            //cart: 0,
            variants: [
                {id: 2234, color: 'blue', image: 'assets/images/t-shirt.jpg', quantity: 20},
                {id: 2235, color: 'red', image: 'assets/images/tshirt-rouge.jpg', quantity: 0}
            ],
            selectedVariant: 0,
            style: "cursor:pointer"
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variant) {
            this.image = variant.image
            this.product = variant.color
            console.log(variant.quantity)
            console.log(this.inStock)
            if (variant.quantity > 0) {
                this.inStock = true
            } else {
                this.inStock = false
            }
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.product + ' ' + this.brand
        },
        /*image() {
            console.log(this.variants[this.selectedVariant].color)
            return this.variants[this.selectedVariant].image
        }*/
        inStock() {
            console.log(this.variants[this.selectedVariant].quantity + ' en stock')
            return this.variants[this.selectedVariant].quantity
        }
    }

})
