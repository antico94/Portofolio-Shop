﻿using MyShop.Models.Products.Categories.Subcategories;

namespace MyShop.Models.Products.ProductTypes;

public class VisualDisplay : Product
{
    public string VisualType { get; set; }
    public double Diagonal { get; set; }
}