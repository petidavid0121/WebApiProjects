using Microsoft.AspNetCore.Mvc;

namespace WebAPIBase.Controllers
{
    public class BoatController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
