const app = Vue.createApp({
    data() {
        return {
            product: 'T-Shirt',
            brand: 'Gekkode',
            image: 'assets/images/t-shirt.jpg',
            inStock: 1,
            inventory: 100,
            cart:0,
            variants: [
                { id: 2234, color: 'blue', image: 'assets/images/t-shirt.jpg',quantity:20 },
                { id: 2235, color: 'red', image: 'assets/images/tshirt-rouge.jpg',quantity:0 }
            ],
            selectedVariant: 0,
            style:"cursor:pointer"
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage, variantColor) {
            this.image = variantImage,
                this.product = variantColor
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return  this.product+ ' '+ this.brand
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
})

app.mount('#app')



//const product = 'T-Shirt'
