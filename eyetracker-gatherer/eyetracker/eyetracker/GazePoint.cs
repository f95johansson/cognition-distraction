using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace eyetracker
{
    class GazePoint
    {
        [JsonProperty(PropertyName = "x")]
        double x { get; set; }

        [JsonProperty(PropertyName = "y")]
        double y { get; set; }

        public GazePoint(double x, double y)
        {
            this.x = x;
            this.y = y;
        }
    }
}
