using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace API.Modules.Bookstore.Models
{
    public class BookOrder
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("orderNo")]
        public string OrderNo { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("store")]
        public string Store { get; set; }

        [BsonElement("price")]
        public decimal Price { get; set; }
    }
}
