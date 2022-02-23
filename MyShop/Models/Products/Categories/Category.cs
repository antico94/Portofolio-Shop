namespace MyShop.Models.Products.Categories;

public class Category
{
    public CategoryEnum CategoryName { get; set; }
    public List<Enum> Subcategories { get; set; }

    public Category(string name)
    {
        
    }
}