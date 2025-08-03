using API.Modules.Bookstore.Models;

namespace API.Modules.Bookstore.Repositories
{
    public class MockBookstoreRepository : IBookstoreRepository
    {
        public IEnumerable<Book> GetAllPeterStoreBooks()
        {
            return new List<Book>()
            {
                new Book()
                {
                    Id = "1",
                    Title = "Fluent Python: Clear, Concise, and Effective Programming",
                    Author = "Luciano Ramalho",
                    PublishedOn = "2024-03-06T09:57:50.587Z",
                    Price = 100
                },
                new Book()
                {
                    Id = "2",
                    Title = "The Manager's Path: A Guide for Tech Leaders Navigating Growth and Change",
                    Author = "Camille Fournier",
                    PublishedOn = "2024-03-08T09:56:50.587Z",
                    Price = 150
                },
                new Book()
                {
                    Id = "3",
                    Title = "Software Engineering for Absolute Beginners: Your Guide to Creating Software Products",
                    Author = "Nico Loubser",
                    PublishedOn = "2024-03-07T09:56:50.587Z",
                    Price = 200
                },
                new Book()
                {
                    Id = "4",
                    Title = "The Staff Engineer's Path: A Guide for Individual Contributors Navigating Growth and Change",
                    Author = "Tanya Reilly",
                    PublishedOn = "2024-03-03T09:56:50.587Z",
                    Price = 150
                },
                new Book()
                {
                    Id = "5",
                    Title = "Cracking the PM Interview: How to Land a Product Manager Job in Technology (Cracking the Interview & Career)",
                    Author = "Gayle Laakmann McDowell",
                    PublishedOn = "2024-03-02T08:56:50.587Z",
                    Price = 180
                }
            };
        }

        public IEnumerable<Book> GetAllGretaStoreBooks()
        {
            return new List<Book>()
            {
                new Book()
                {
                    Id = "1",
                    Title = "The Nature of Software Development: Keep It Simple, Make It Valuable, Build It Piece by Piece",
                    Author = "Ron Jeffries",
                    PublishedOn = "2024-03-06T09:56:50.587Z",
                    Price = 200
                },
                new Book()
                {
                    Id = "2",
                    Title = "Modern Software Engineering: Doing What Works to Build Better Software Faster",
                    Author = "David Farley, Amy Gordon, et al.",
                    PublishedOn = "2024-03-05T09:56:50.587Z",
                    Price = 100
                },
                new Book()
                {
                    Id = "3",
                    Title = "Software Engineering for Absolute Beginners: Your Guide to Creating Software Products",
                    Author = "Nico Loubser",
                    PublishedOn = "2024-03-07T09:56:50.587Z",
                    Price = 300
                },
                new Book()
                {
                    Id = "4",
                    Title = "Code: The Hidden Language of Computer Hardware and Software",
                    Author = "Charles Petzold",
                    PublishedOn = "2024-03-04T09:56:50.587Z",
                    Price = 150
                },
                new Book()
                {
                    Id = "5",
                    Title = "Software Development Pearls: Lessons from Fifty Years of Software Experience",
                    Author = "Karl Wiegers, Amy Gordon, et al.",
                    PublishedOn = "2024-03-04T08:56:50.587Z",
                    Price = 200
                }
            };
        }
    }
}
