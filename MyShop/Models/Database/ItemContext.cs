using Microsoft.EntityFrameworkCore;
using MyShop.Models.Products;
using MyShop.Models.Products.Categories;
using MyShop.Models.Products.Categories.Subcategories;
using MyShop.Models.Products.ProductTypes.Components.Processors;
using MyShop.Models.Products.ProductTypes.Components.Rams;
using MyShop.Models.Products.ProductTypes.Components.VideoCards;
using MyShop.Models.Products.ProductTypes.Computer;
using MyShop.Models.Products.ProductTypes.Peripherals;
using MyShop.Models.Products.ProductTypes.PhotoAndVideo;

namespace MyShop.Models.Database;

public class ItemContext : DbContext
{
    public ItemContext(DbContextOptions<ItemContext> options) : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Subcategory> Subcategories { get; set; }
    public DbSet<Headphones> Headphones { get; set; }
    public DbSet<Mouse> Mouses { get; set; }
    public DbSet<Mousepad> Mousepads { get; set; }
    public DbSet<Keyboard> Keyboards { get; set; }
    public DbSet<Processor> Processors { get; set; }
    public DbSet<Ram> Rams { get; set; }
    public DbSet<VideoCard> VideoCards { get; set; }
    public DbSet<Computer> Computers { get; set; }
    public DbSet<Camera> Cameras { get; set; }
}