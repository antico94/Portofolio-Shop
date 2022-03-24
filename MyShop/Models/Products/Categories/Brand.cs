using System.ComponentModel.DataAnnotations.Schema;

namespace MyShop.Models.Products.Categories;

public class Brand
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int BrandId { get; set; }
    public string BrandName { get; set; }
}