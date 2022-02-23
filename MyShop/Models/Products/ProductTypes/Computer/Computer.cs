using MyShop.Models.Products.ProductTypes.Components.Processors;
using MyShop.Models.Products.ProductTypes.Components.Rams;
using MyShop.Models.Products.ProductTypes.Components.VideoCards;

namespace MyShop.Models.Products.ProductTypes.Computer;

public class Computer : Product
{
    public VideoCard VideoCard { get; set; }
    public Processor Processor { get; set; }
    public Ram Ram { get; set; }
    
}