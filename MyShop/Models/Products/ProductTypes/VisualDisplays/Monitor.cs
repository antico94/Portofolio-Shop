namespace MyShop.Models.Products.ProductTypes;

public class Monitor : VisualDisplay
{
    private readonly List<string> _validPanels = new()
    {
        "IPS",
        "TN",
        "PLS",
        "VA"
    };

    public bool IsGaming { get; set; }
    public int RefreshRate { get; set; }
    public string PanelType { get; set; }

    public Monitor(bool isGaming, int refreshRate, string panelType)
    {
        IsGaming = isGaming;
        RefreshRate = refreshRate;
        if (_validPanels.Any(i=>String.Equals(i, panelType, StringComparison.CurrentCultureIgnoreCase)))
        {
            PanelType = panelType;
        }
        else
        {
            throw new ArgumentException("The panel type is not valid. \nValid panels are: PN, TN, PLS, VA");
        }
    }
}