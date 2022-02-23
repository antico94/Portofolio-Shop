namespace MyShop.Models.Products.ProductTypes.Components.Processors;

public class Processor : Product
{
    private readonly List<string> _validSockets = new() {"2066", "1200", "1155", "1151", "AM4"};
    public string ProcessorFamily { get; set; }
    public string Socket { get; set; }
    public int Cores { get; set; }

    public Processor(string socket, int cores)
    {
        ProcessorFamily = Brand.ToString();
        if (_validSockets.All(i => i.ToLower() != socket.ToLower()))
        {
            throw new ArgumentException("Socket does not exist.");
        }
        Socket = socket;

        if (cores%2!=0)
        {
            throw new ArgumentException("Cores can only be even.");
        }
        Cores = cores;
    }
}