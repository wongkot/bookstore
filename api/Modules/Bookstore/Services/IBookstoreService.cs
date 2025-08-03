using API.Modules.Bookstore.Models;

namespace API.Modules.Bookstore.Services
{
    public interface IBookstoreService
    {
        IEnumerable<Book> GetAllPeterStoreBooks();
        IEnumerable<Book> GetAllGretaStoreBooks();
    }
}
