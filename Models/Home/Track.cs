using System.Collections.Generic;

namespace Run_Map_Planner.Models.Home
{
    public class Track : List<Point>
    {
        public List<Point>? TrackPoints { get; set; }
    }
}
