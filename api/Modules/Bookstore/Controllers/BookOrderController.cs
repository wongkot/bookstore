using API.Modules.Bookstore.Models;
using API.Modules.Bookstore.Repositories;
using API.Modules.Bookstore.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Modules.Bookstore.Controllers
{
    [ApiController]
    [Route("api/v1/book-orders")]
    public class BookOrderController : Controller
    {
        private readonly IBookOrderService bookOrderService;

        public BookOrderController(IBookOrderService bookOrderService)
        {
            this.bookOrderService = bookOrderService;
        }

        /// <summary>
        /// Get all book orders.
        /// </summary>
        /// <returns>List of all book orders.</returns>
        [HttpGet]
        public async Task<IEnumerable<BookOrder>> Get()
        {
            return await bookOrderService.GetAllBookOrdersAsync();
        }

        /// <summary>
        /// Create book order.
        /// </summary>
        /// <returns>List of all book orders.</returns>
        [HttpPost]
        public async Task<BookOrder> Create([FromBody]CreateBookOrder createBookOrder)
        {
            return await bookOrderService.CreateBookOrderAsync(createBookOrder);
        }

        /// <summary>
        /// Remove all book orders.
        /// </summary>
        /// <returns>List of all book orders.</returns>
        [HttpDelete]
        [Route("all")]
        public async Task<string> RemoveAll()
        {
            return await bookOrderService.RemoveAllBookOrdersAsync();
        }
    }
}
