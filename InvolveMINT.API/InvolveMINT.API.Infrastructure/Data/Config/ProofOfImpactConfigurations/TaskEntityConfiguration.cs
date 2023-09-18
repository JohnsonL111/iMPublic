using Ardalis.Specification;
using InvolveMINT.API.Core.ProofOfImpactAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace InvolveMINT.API.Infrastructure.Data.Config.ProofOfImpactConfigurations
{
  public class TaskEntityConfiguration : IEntityTypeConfiguration<TaskEntity>
  {
    public void Configure(EntityTypeBuilder<TaskEntity> builder)
    {
      builder.HasKey(e => e.Id);

      builder.ToTable("Task");

      builder.Property(e => e.Id)
        .HasColumnName("id")
        .HasColumnType("text")
        .HasConversion(
            id => id.ToString(),
            str => Guid.Parse(str)
        )
        .IsRequired();

      builder.Property(e => e.PoiId)
        .HasColumnName("poiId")
        .HasColumnType("text")
        .HasConversion(
            id => id.ToString(),
            str => Guid.Parse(str)
        )
        .IsRequired();

    }
  }
}
