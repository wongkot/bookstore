using API.Modules.Bookstore.Models;

namespace API.Modules.Bookstore.Services
{
    public interface IBookOrderService
    {
        Task<IEnumerable<BookOrder>> GetAllBookOrdersAsync();
        Task<BookOrder> CreateBookOrderAsync(CreateBookOrder order);
        Task<string> RemoveAllBookOrdersAsync();
    }
}
