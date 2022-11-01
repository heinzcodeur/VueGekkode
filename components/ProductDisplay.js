app.component('product-display', {
    template:
        `
                <h1>{{ title }}</h1>
                <div class="row">
                    <div class="col-5 border border-dark">
                        <!--img v-bind:src="image" alt="" v-show="inStock" class="img-responsive" width="276" height="309"-->
                        <img v-bind:src="image" alt="" class="img-responsive" width="276" height="309">
                    </div>
                    <div class="col-7 border border-danger">
                        <p v-if="inStock">En stock</p>
                        <!--p v-if="inventory > 10">En stock</p>
                        <p v-else-if="inventory <= 10 && inventory > 0">Presque en rupture!</p-->
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
                        <hr>
                            <p>Livraison: {{ shipping }}</p>
                        <!--div class="cart">Panier ({{ cart }})</div-->
                        <button class="btn btn-primary" @click="addToCart" :class="{disabledButton: !inStock }">Ajouter au Panier</button>

                        <!--button class="btn btn-primary" v-on:click="addToCart">Ajouter au Panier</button-->
                    </div>
                </div>
    `,
    data() {
        return {
            product: 'T-Shirt',
            brand: 'Gekkode',
            image: 'assets/images/tshirt-rouge.jpg',
            inStock: true,
            inventory: 100,
            titre: 't-shirt rouge',
            variants: [
                {id: 2234, color: 'blue', image: 'assets/images/t-shirt.jpg', quantity: 20, name: 't-shirt bleu'},
                {id: 2235, color: 'red', image: 'assets/images/tshirt-rouge.jpg', quantity: 0, name: 't-shirt rouge'}
            ],
            selectedVariant: 1,
            style: "cursor:pointer"
        }
    },
    methods: {
        updateImage(variant) {
            this.image = variant.image
            this.product = variant.color
            this.titre = variant.name
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
        },
        updateTitle(variant) {
            return variant.name
        },
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        }
    },
    props: {
        premium: {
            type: Boolean,
            required: true
        },
        stock: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        title() {
            //console.log('change')
            return this.titre
            //return this.variants[this.selectedVariant].name
                //= this.variants[this.selectedVariant].name + ' ' + this.brand
            //return this.variants[this.selectedVariant].name + ' ' + this.brand
        },
        image() {
            console.log(this.variants[this.selectedVariant].color)
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            //console.log(this.variants[this.selectedVariant].quantity + ' en stock')
            if (this.variants[this.selectedVariant].quantity > 0) {
                return true
            }
            return false
        },
        shipping() {
            console.log(this.premium)
            // return
            if (this.premium) {
                console.log(this.brand)
                return 'Gratuit'
            }
            return "2,99€"
        }
    }

})
