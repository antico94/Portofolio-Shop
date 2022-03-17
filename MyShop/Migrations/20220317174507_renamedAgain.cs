using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyShop.Migrations
{
    public partial class renamedAgain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Categories_CategoryId",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Subcategories",
                newName: "SubcategoryName");

            migrationBuilder.RenameColumn(
                name: "Image",
                table: "Subcategories",
                newName: "SubcategoryImageName");

            migrationBuilder.RenameColumn(
                name: "Image",
                table: "Products",
                newName: "ImageName");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Categories",
                newName: "CategoryName");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Categories",
                newName: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Subcategories_CategoryId",
                table: "Products",
                column: "CategoryId",
                principalTable: "Subcategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Subcategories_CategoryId",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "SubcategoryName",
                table: "Subcategories",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "SubcategoryImageName",
                table: "Subcategories",
                newName: "Image");

            migrationBuilder.RenameColumn(
                name: "ImageName",
                table: "Products",
                newName: "Image");

            migrationBuilder.RenameColumn(
                name: "CategoryName",
                table: "Categories",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "CategoryId",
                table: "Categories",
                newName: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Categories_CategoryId",
                table: "Products",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
