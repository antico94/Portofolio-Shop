using System.ComponentModel.DataAnnotations.Schema;
using MyShop.Models.Products.Categories.Subcategories;

namespace MyShop.Models.Products.Categories;

public class Category
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int CategoryId { get; set; }
    public string CategoryName { get; set; }
    public List<Subcategory> Subcategories { get; set; }
}