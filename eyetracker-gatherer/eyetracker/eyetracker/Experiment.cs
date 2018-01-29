using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace eyetracker
{
    class Experiment
    {
        [JsonProperty(PropertyName = "id")]
        public int id { get; set; }

        [JsonProperty(PropertyName = "elapsed_time")]
        public int elapsed_time { get; set; }

        [JsonProperty(PropertyName = "with_distraction")]
        public bool with_distraction { get; set; }

        [JsonProperty(PropertyName = "data")]
        public LinkedList<GazePoint> data;

        public Experiment(int id, int elapsed_time, bool with_distraction, LinkedList<GazePoint> data)
        {
            this.id = id;
            this.elapsed_time = elapsed_time;
            this.with_distraction = with_distraction;
            this.data = data;
        }
    }
}
