namespace Authentication.Options
{
	public class CorsOptions
	{
        public const string Name = "AllowedOrigins";

        public string AllowedOrigins { get; set; } = string.Empty;
    }
}

