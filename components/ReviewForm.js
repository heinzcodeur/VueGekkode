app.component('review-form', {
    template: `
    <form>
<div class="mb-3">
    <label for="nom" class="form-label">nom</label>
<input type="text" class="form-control" id="nom">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
    <label for="avis" class="form-label">Avis</label>
    <textarea  class="form-control" id="avis"></textarea>
    </div>
    <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    }
})

