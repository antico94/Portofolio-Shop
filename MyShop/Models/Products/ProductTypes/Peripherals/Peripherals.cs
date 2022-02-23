namespace MyShop.Models.Products.ProductTypes.Peripherals;

public class Peripherals : Product
{
    private readonly List<string> _validConnections = new() {"Wire", "Wireless"};
    public string ConnectionType { get; set; }

    public Peripherals(string connectionType)
    {
        if (_validConnections.All(i=>String.Equals(i, connectionType, StringComparison.CurrentCultureIgnoreCase)))
        {
            ConnectionType = connectionType;
        }
        else
        {
            throw new ArgumentException("The connection type is invalid. \nThe valid options are: Wire/Wireless");
        }
    }
    
}