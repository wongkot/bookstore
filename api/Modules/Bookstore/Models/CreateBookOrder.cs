namespace API.Modules.Bookstore.Models
{
    public class CreateBookOrder
    {
        public string Title { get; set; }

        public string Store { get; set; }

        public decimal Price { get; set; }
    }
}
