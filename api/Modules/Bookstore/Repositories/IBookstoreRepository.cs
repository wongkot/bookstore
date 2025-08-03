using API.Modules.Bookstore.Models;

namespace API.Modules.Bookstore.Repositories
{
    public interface IBookstoreRepository
    {
        IEnumerable<Book> GetAllPeterStoreBooks();
        IEnumerable<Book> GetAllGretaStoreBooks();
    }
}
