using API.Modules.Bookstore.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Modules.Bookstore.Controllers
{
    [ApiController]
    [Route("api/BookOrders")]
    public class BookOrderController : Controller
    {
        private static readonly string[] BookTitles = new[]
        {
            "Cracking the PM Interview: How to Land a Product Manager Job in Technology (Cracking the Interview & Career)",
            "Fluent Python: Clear, Concise, and Effective Programming",
            "Software Engineering for Absolute Beginners: Your Guide to Creating Software Products",
            "The Manager's Path: A Guide for Tech Leaders Navigating Growth and Change",
            "The Staff Engineer's Path: A Guide for Individual Contributors Navigating Growth and Change",
        };

        /// <summary>
        /// Get all book orders.
        /// </summary>
        /// <returns>List of all book orders.</returns>
        [HttpGet]
        public IEnumerable<BookOrder> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new BookOrder
            {
                OrderNo = $"BO-{(new DateTimeOffset(DateTime.UtcNow).ToUnixTimeMilliseconds()) + index}",
                Title = BookTitles[Random.Shared.Next(BookTitles.Length)],
                Store = "Peter",
                Price = Random.Shared.Next(100, 200)
            })
            .ToArray();
        }
    }
}
