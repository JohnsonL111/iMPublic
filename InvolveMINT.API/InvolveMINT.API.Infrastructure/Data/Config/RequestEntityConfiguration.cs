using Ardalis.Specification;
using InvolveMINT.API.Core.OfferAggregate;
using InvolveMINT.API.Core.RequestAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace InvolveMINT.API.Infrastructure.Data.Config
{
  public class RequestEntityConfiguration : IEntityTypeConfiguration<RequestEntity>
  {
    public void Configure(EntityTypeBuilder<RequestEntity> builder)
    {
      builder.HasKey(e => e.Id);

      builder.ToTable("Request");

      builder.Property(e => e.Id)
        .HasColumnName("id")
        .HasColumnType("text")
        .IsRequired();

      builder.Property(e => e.ChangeMakerId)
        .HasColumnName("changeMakerId")
        .HasColumnType("text");

      builder.Property(e => e.DateCreated)
          .HasDefaultValueSql("'2023-09-12 22:45:56.956236'::timestamp without time zone")
          .HasColumnType("timestamp without time zone")
          .HasColumnName("dateCreated");

      builder.Property(e => e.DateUpdated)
          .HasDefaultValueSql("'2023-09-12 22:45:56.956236'::timestamp without time zone")
          .HasColumnType("timestamp without time zone")
          .HasColumnName("dateUpdated");

      builder.Property(e => e.Description)
          .HasColumnType("character varying")
          .HasColumnName("description");

      builder.Property(e => e.ExchangePartnerId)
        .HasColumnName("exchangePartnerId")
        .HasColumnType("text");

      builder.Property(e => e.ImagesFilePaths)
          .HasDefaultValueSql("'{}'::text[]")
          .HasColumnName("imagesFilePaths");

      builder.Property(e => e.ListingStatus)
          .HasDefaultValueSql("'private'::text")
          .HasConversion(
            x => x.Name,
            x => RequestListingStatus.FromName(x, true))
          .HasColumnName("listingStatus");

      builder.Property(e => e.Name)
          .HasColumnType("character varying")
          .HasColumnName("name");

      builder.Property(e => e.Price).HasColumnName("price");

      builder.Property(e => e.PriceStatus).HasColumnName("priceStatus");

      builder.Property(e => e.ServePartnerId)
        .HasColumnName("servePartnerId")
        .HasColumnType("text");
    }
  }
}

