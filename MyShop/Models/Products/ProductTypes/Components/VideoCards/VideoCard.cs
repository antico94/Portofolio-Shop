namespace MyShop.Models.Products.ProductTypes.Components.VideoCards;

public class VideoCard : Product
{
    public VideoProcessor VideoProcessor { get; set; }
    public string Chipset { get; set; }
    public int Memory { get; set; }

    public VideoCard(VideoProcessor videoProcessor, int memory)
    {
        VideoProcessor = videoProcessor;
        Memory = memory;
        Chipset = videoProcessor == VideoProcessor.Radeon ? "AMD" : "NVidia";
    }
}