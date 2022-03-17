using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MyShop.Models.Products.Categories.Subcategories;

namespace MyShop.Models.Products.Categories;

public class Category
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public int CategoryId { get; set; }
    public string CategoryName { get; set; }
    public ICollection<Subcategory> Subcategories { get; set; }
}