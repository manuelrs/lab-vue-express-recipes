const IngredientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  unity: String
});
module.exports = mongoose.model("Ingredient", IngredientSchema);
