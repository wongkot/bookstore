using API.Modules.Bookstore.Models;

namespace API.Modules.Bookstore.Repositories
{
    public interface IBookOrderRepository
    {
        Task<IEnumerable<BookOrder>> GetAllBookOrdersAsync();
        Task<BookOrder> CreateBookOrderAsync(BookOrder order);
        Task<string> RemoveAllBookOrdersAsync();
    }
}
