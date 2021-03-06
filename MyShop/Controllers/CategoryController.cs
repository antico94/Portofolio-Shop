#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyShop.Models.Database;
using MyShop.Models.Products.Categories;
using MyShop.Models.WebModels;

namespace MyShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ItemContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public CategoryController(ItemContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            _hostEnvironment = hostEnvironment;
        }

        // GET: api/Category
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            return await _context.Categories.ToListAsync();
        }
        
        // GET: api/Category
        [HttpGet]
        [Route("categories-dropdown")]
        public ActionResult<IEnumerable<WebCategoryDropdown>> GetCategoriesForDropdown()
        {
            var menu = _context.Categories.Include(i => i.Subcategories);
            var returnedData = new List<WebCategoryDropdown>();
            foreach (var category in menu)
            {
                var subcategories = new List<WebSubcategoryDropdown>();
                foreach (var sub in category.Subcategories)
                {
                    subcategories.Add(new WebSubcategoryDropdown()
                    {
                        SubcategoryId = sub.SubcategoryId,
                        SubcategoryName = sub.SubcategoryName
                    });
                }
                returnedData.Add(
                    new WebCategoryDropdown()
                    {
                        CategoryId = category.CategoryId,
                        CategoryName = category.CategoryName,
                        Subcategories = subcategories
                    });
            }

            return returnedData;
        }

        // GET: api/Category/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);

            if (category == null)
            {
                return NotFound();
            }

            return category;
        }

        // PUT: api/Category/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategory(int id, Category category)
        {
            if (id != category.CategoryId)
            {
                return BadRequest();
            }

            _context.Entry(category).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Category
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Category>> PostCategory([FromForm] string categoryName)
        {
            var category = new Category
            {
                CategoryName = categoryName
            };
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            // return CreatedAtAction("GetCategory", new { id = category.CategoryId }, category);
            return StatusCode(201);
        }

        // DELETE: api/Category/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return NotFound();
            }

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoryExists(int id)
        {
            return _context.Categories.Any(e => e.CategoryId == id);
        }
    }
}
