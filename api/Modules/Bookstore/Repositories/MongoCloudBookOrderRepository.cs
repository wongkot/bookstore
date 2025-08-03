using API.Configurations;
using API.Modules.Bookstore.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace API.Modules.Bookstore.Repositories
{
    public class MongoCloudBookOrderRepository : IBookOrderRepository
    {
        private readonly ConnectionStringsOptions connectionStringOptions;
        private readonly AppConfigOptions appConfigOptions;

        public MongoCloudBookOrderRepository(
            IOptions<ConnectionStringsOptions> connectionStringOptions,
            IOptions<AppConfigOptions> appConfigOptions
            )
        {
            this.connectionStringOptions = connectionStringOptions.Value;
            this.appConfigOptions = appConfigOptions.Value;
        }

        public async Task<IEnumerable<BookOrder>> GetAllBookOrdersAsync()
        {
            string? connectionString = connectionStringOptions.DefaultConnection;
            var settings = MongoClientSettings.FromConnectionString(connectionString);

            using (var dbClient = new MongoClient(settings))
            {
                var filter = Builders<BookOrder>.Filter.Empty;
                return await dbClient.GetDatabase(appConfigOptions.DatabaseName)
                    .GetCollection<BookOrder>(appConfigOptions.BookOrderTableName)
                    .Find(filter).ToListAsync();
            }
        }

        public async Task<BookOrder> CreateBookOrderAsync(BookOrder newBookOrder)
        {
            string? connectionString = connectionStringOptions.DefaultConnection;
            var settings = MongoClientSettings.FromConnectionString(connectionString);

            using (var dbClient = new MongoClient(settings))
            {
                var bookOrders = dbClient.GetDatabase(appConfigOptions.DatabaseName)
                    .GetCollection<BookOrder>(appConfigOptions.BookOrderTableName);

                await bookOrders.InsertOneAsync(newBookOrder);

                return newBookOrder;
            }
        }

        public async Task<string> RemoveAllBookOrdersAsync()
        {
            string? connectionString = connectionStringOptions.DefaultConnection;
            var settings = MongoClientSettings.FromConnectionString(connectionString);

            using (var dbClient = new MongoClient(settings))
            {
                await dbClient.GetDatabase(appConfigOptions.DatabaseName)
                    .DropCollectionAsync(appConfigOptions.BookOrderTableName);

                return "All book orders has been removed.";
            }
        }
    }
}
