namespace API.Modules.Bookstore.Models
{
    public class BookOrder
    {
        public string OrderNo { get; set; }
        public string Title { get; set; }
        public string Store { get; set; }
        public decimal Price { get; set; }
    }
}
