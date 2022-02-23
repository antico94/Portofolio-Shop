using System.ComponentModel.DataAnnotations.Schema;

namespace MyShop.Models.Products.Categories.Subcategories;

public class Subcategory
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int SubcategoryId { get; set; }
    public string SubcategoryName { get; set; }
    public List<string> Criteriums { get; set; }
}