using API.Modules.Bookstore.Models;
using API.Modules.Bookstore.Repositories;

namespace API.Modules.Bookstore.Services
{
    public class BookstoreService : IBookstoreService
    {
        private readonly IBookstoreRepository bookstoreRepository;

        public BookstoreService(IBookstoreRepository bookstoreRepository)
        {
            this.bookstoreRepository = bookstoreRepository;
        }
        public IEnumerable<Book> GetAllPeterStoreBooks()
        {
            return bookstoreRepository.GetAllPeterStoreBooks();
        }

        public IEnumerable<Book> GetAllGretaStoreBooks()
        {
            return bookstoreRepository.GetAllGretaStoreBooks();
        }
    }
}
