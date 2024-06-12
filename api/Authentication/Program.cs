using Authentication.EFCore;
using Authentication.Entities;
using Authentication.Extensions;
using Authentication.Options;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;
var databaseconnectionString = configuration.GetSection(DatabaseOptions.Name).Get<DatabaseOptions>()?.ConnectionString;
var allowedOrigins = configuration.GetSection(CorsOptions.Name).Get<CorsOptions>()?.AllowedOrigins!;

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "CorsPolicy",
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:5173")
                                .AllowAnyHeader()
                                .AllowAnyMethod()
                                .AllowCredentials();
                      });
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthorization();

builder.Services.AddAuthentication().AddCookie(IdentityConstants.ApplicationScheme);

builder.Services.AddIdentityCore<User>().AddEntityFrameworkStores<ApplicationDbContext>().AddApiEndpoints();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseMySql(databaseconnectionString, ServerVersion.AutoDetect(databaseconnectionString));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.ApplyMigrations();
}

app.UseHttpsRedirection();

app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

app.MapIdentityApi<User>();

app.Run();

