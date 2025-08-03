using API.Modules.Bookstore.Models;
using API.Modules.Bookstore.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Modules.Bookstore.Controllers
{
    [ApiController]
    [Route("api/v1/bookstore")]
    public class BookstoreController : Controller
    {
        private readonly IBookstoreService bookstoreService;

        public BookstoreController(IBookstoreService bookstoreService)
        {
            this.bookstoreService = bookstoreService;
        }

        /// <summary>
        /// Get all book from peter's store.
        /// </summary>
        /// <returns>List of all book orders.</returns>
        [HttpGet]
        [Route("peter")]
        public IEnumerable<Book> GetFromPeterStore()
        {
            return bookstoreService.GetAllPeterStoreBooks();
        }

        /// <summary>
        /// Get all book from greta's store.
        /// </summary>
        /// <returns>List of all book orders.</returns>
        [HttpGet]
        [Route("greta")]
        public IEnumerable<Book> GetFromGretaStore()
        {
            return bookstoreService.GetAllGretaStoreBooks();
        }
    }
}
