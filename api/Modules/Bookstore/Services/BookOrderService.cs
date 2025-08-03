using API.Modules.Bookstore.Models;
using API.Modules.Bookstore.Repositories;
using MongoDB.Bson;

namespace API.Modules.Bookstore.Services
{
    public class BookOrderService : IBookOrderService
    {
        private readonly IBookOrderRepository bookOrderRepository;

        public BookOrderService(IBookOrderRepository bookOrderRepository)
        {
            this.bookOrderRepository = bookOrderRepository;
        }

        public async Task<IEnumerable<BookOrder>> GetAllBookOrdersAsync()
        {
            return await bookOrderRepository.GetAllBookOrdersAsync();
        }

        public async Task<BookOrder> CreateBookOrderAsync(CreateBookOrder order)
        {
            var newBookOrder = new BookOrder()
            {
                Id = ObjectId.GenerateNewId().ToString(),
                OrderNo = GenerateOrderNo(),
                Title = order.Title,
                Store = order.Store,
                Price = order.Price,
            };

            return await bookOrderRepository.CreateBookOrderAsync(newBookOrder);
        }

        public async Task<string> RemoveAllBookOrdersAsync()
        {
            return await bookOrderRepository.RemoveAllBookOrdersAsync();
        }

        private string GenerateOrderNo()
        {
            return $"BO-{new DateTimeOffset(DateTime.UtcNow).ToUnixTimeMilliseconds()}";
        }
    }
}
