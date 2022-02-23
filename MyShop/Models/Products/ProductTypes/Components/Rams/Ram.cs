namespace MyShop.Models.Products.ProductTypes.Components.Rams;

public class Ram
{
    private readonly List<string> _validMemoryType = new() {"DDR", "DDR2", "DDR3", "DDR4", "DDR5"};
    public int Frequency { get; set; }
    public int Capacity { get; set; }
    public string MemoryType { get; set; }

    public Ram(int frequency, int capacity, string memoryType)
    {
        Frequency = frequency;
        Capacity = capacity;
        if (_validMemoryType.All(i=>i == memoryType.ToUpper()))
        {
            MemoryType = memoryType;
        }
        else
        {
            throw new ArgumentException(
                "The memory type is not valid. \nValid options are: DDR, DDR2, DDR3, DDR4, DDR5");
        }
    }
}