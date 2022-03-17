using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyShop.Models.Products.Categories.Subcategories;

public class Subcategory
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public int SubcategoryId { get; set; }
    public string SubcategoryName { get; set; }
    public Category Category { get; set; }
    public string SubcategoryImageName { get; set; }
    [NotMapped]
    public IFormFile SubcategoryImage { get; set; }
    public ICollection<Product> Products { get; set; }
}