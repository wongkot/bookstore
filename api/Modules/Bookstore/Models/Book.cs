﻿namespace API.Modules.Bookstore.Models
{
    public class Book
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string PublishedOn { get; set; }
        public decimal Price { get; set; }
    }
}
