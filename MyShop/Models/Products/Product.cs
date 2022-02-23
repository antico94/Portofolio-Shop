using System.Net.Mime;
using MyShop.Models.Products.Categories;

namespace MyShop.Models.Products;

public class Product
{
    public int Id { get; set; }
    public Brand Brand { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public Byte Image { get; set; }
    public double Price { get; set; }
    public Category Category { get; set; }
}