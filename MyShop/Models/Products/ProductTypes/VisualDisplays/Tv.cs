namespace MyShop.Models.Products.ProductTypes.VisualDisplays;

public class Tv : VisualDisplay
{
    private readonly List<string> _validImageQuality = new() {"4K", "2K", "FullHD", "HD"};
    public bool IsSmart { get; set; }
    public string ImageQuality { get; set; }

    public Tv(bool isSmart, string imageQuality)
    {
        IsSmart = isSmart;
        if (_validImageQuality.Any(i=>i.ToLower() == imageQuality.ToLower()))
        {
            ImageQuality = imageQuality;
        }
        else
        {
            throw new ArgumentException("The Image quality selected is not valid.\nValid options are 4K,2K,FullHD,HD");
        }
    }
}