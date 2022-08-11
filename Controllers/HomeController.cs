using Microsoft.AspNetCore.Mvc;
using Run_Map_Planner.Models;
using System.Diagnostics;
using Run_Map_Planner.Models.Home;
using System.Xml.Linq;
using System.Collections;

namespace Run_Map_Planner.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            Track track = new();
            Point point;
            XElement gpsIn = XElement.Load(@"TestData\TrailRun20220807165803.gpx");
            XNamespace ns = "http://www.topografix.com/GPX/1/0";
            IEnumerable<XElement> trk =
                from x in gpsIn.Descendants(ns + "trkpt")
                select x;
            foreach (XElement trkElement in trk)
            {
                point = new Point();
                point.Latitude = (decimal)trkElement.Attribute("lat");
                point.Longitude = (decimal)trkElement.Attribute("lon");
                //point.Timestamp = (DateTime)trkElement.Element("time");
                track.Add(point);
            }
            return View(track);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}