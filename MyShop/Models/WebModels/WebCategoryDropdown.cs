namespace MyShop.Models.WebModels;

public class WebCategoryDropdown
{
    public string CategoryName { get; set; }
    public int CategoryId { get; set; }
    public List<WebSubcategoryDropdown> Subcategories { get; set; }
}