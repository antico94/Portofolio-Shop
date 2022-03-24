namespace MyShop.Models.WebModels;

public class WebProduct
{
    public int Brand { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public double Price { get; set; }
    public int SubcategoryId { get; set; }
    public IFormFile ImageFile{ get; set; }
}