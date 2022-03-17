namespace MyShop.Models.WebModels;

public class WebSubcategory
{
    public string SubcategoryName { get; set; }
    public int CategoryId { get; set; }
    public IFormFile SubcategoryImage { get; set; }
}