using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyShop.Migrations
{
    public partial class renamed_models : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SubcategoryName",
                table: "Subcategories",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "SubcategoryImage",
                table: "Subcategories",
                newName: "Image");

            migrationBuilder.RenameColumn(
                name: "SubcategoryId",
                table: "Subcategories",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "CategoryName",
                table: "Categories",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "CategoryId",
                table: "Categories",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Subcategories",
                newName: "SubcategoryName");

            migrationBuilder.RenameColumn(
                name: "Image",
                table: "Subcategories",
                newName: "SubcategoryImage");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Subcategories",
                newName: "SubcategoryId");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Categories",
                newName: "CategoryName");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Categories",
                newName: "CategoryId");
        }
    }
}
