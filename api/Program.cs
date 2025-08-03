using API.Configurations;
using API.Modules.Bookstore.Repositories;
using API.Modules.Bookstore.Services;
using System.Reflection;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(options =>
            {
                // using System.Reflection;
                var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
            });
            builder.Services.AddScoped<IBookOrderRepository, MongoCloudBookOrderRepository>();
            builder.Services.AddScoped<IBookOrderService, BookOrderService>();
            builder.Services.AddScoped<IBookstoreRepository, MockBookstoreRepository>();
            builder.Services.AddScoped<IBookstoreService, BookstoreService>();

            // Add CORS policy
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("Allow Angular Application", policy =>
                {
                    policy.WithOrigins("http://localhost:4200")
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                });
            });

            // Register configuration options
            builder.Services.Configure<ConnectionStringsOptions>(builder.Configuration.GetSection(ConnectionStringsOptions.ConnectionStrings));
            builder.Services.Configure<AppConfigOptions>(builder.Configuration.GetSection(AppConfigOptions.AppConfig));

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(options =>
                {
                    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
                    options.RoutePrefix = string.Empty;
                });
            }

            // Configure the HTTP request pipeline.
            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();

            // Use CORS policy
            app.UseCors("Allow Angular Application");

            app.Run();
        }
    }
}
