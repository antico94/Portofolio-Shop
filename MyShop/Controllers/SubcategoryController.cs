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
using MyShop.Models.Products.Categories.Subcategories;
using MyShop.Models.WebModels;

namespace MyShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubcategoryController : ControllerBase
    {
        private readonly ItemContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public SubcategoryController(ItemContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            _hostEnvironment = hostEnvironment;
        }

        // GET: api/Subcategory
        [HttpGet]
        
        public async Task<ActionResult<IEnumerable<Subcategory>>> GetSubcategories()
        {
            return await _context.Subcategories.ToListAsync();
        }
        
        // GET: api/Subcategory/category-id/5
        [HttpGet]
        [Route("category-id/{id}")]
        public async Task<ActionResult<IEnumerable<Subcategory>>> GetSubcategoriesByCategoryId(int id)
        {
            return await _context.Subcategories.Where(i=>i.Category.CategoryId == id).ToListAsync();
        }

        // GET: api/Subcategory/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Subcategory>> GetSubcategory(int id)
        {
            var subcategory = await _context.Subcategories.FindAsync(id);

            if (subcategory == null)
            {
                return NotFound();
            }

            return subcategory;
        }

        // PUT: api/Subcategory/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubcategory(int id, Subcategory subcategory)
        {
            if (id != subcategory.SubcategoryId)
            {
                return BadRequest();
            }

            _context.Entry(subcategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubcategoryExists(id))
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

        // POST: api/Subcategory
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Subcategory>> PostSubcategory([FromForm] WebSubcategory webModel)
        {
            var subcategory = new Subcategory
            {
                Category = GetCategoryById(webModel.CategoryId),
                SubcategoryName = webModel.SubcategoryName,
                SubcategoryImageName = await SaveImage(webModel.SubcategoryImage)
            };
            _context.Subcategories.Add(subcategory);
            await _context.SaveChangesAsync();

            // return CreatedAtAction("GetSubcategory", new { id = subcategory.Id }, subcategory);
            return StatusCode(201);
        }

        // DELETE: api/Subcategory/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubcategory(int id)
        {
            var subcategory = await _context.Subcategories.FindAsync(id);
            if (subcategory == null)
            {
                return NotFound();
            }

            _context.Subcategories.Remove(subcategory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SubcategoryExists(int id)
        {
            return _context.Subcategories.Any(e => e.SubcategoryId == id);
        }

        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName =
                new string(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(" ", "-");
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }

            return imageName;
        }

        [NonAction]
        public Category GetCategoryById(int id)
        {
            var categories = _context.Categories;
            if (categories.Any(i => i.CategoryId == id))
            {
                return categories.First(i => i.CategoryId == id);
            }

            throw new Exception("invalid category id");
        }
    }
}