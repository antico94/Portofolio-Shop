using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net.Mime;
using MyShop.Models.Products.Categories;
using MyShop.Models.Products.Categories.Subcategories;

namespace MyShop.Models.Products;

public class Product
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public int ProductId { get; set; }

    public Brand Brand { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public double Price { get; set; }
    public Subcategory Subcategory { get; set; }
    public string ImageName { get; set; }
    [NotMapped]
    public IFormFile Image { get; set; }
}