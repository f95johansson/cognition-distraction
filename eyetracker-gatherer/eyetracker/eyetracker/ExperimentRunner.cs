using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tobii.Interaction;

namespace eyetracker
{
    class ExperimentRunner
    {
        private static readonly string filename = "experiments.json";
        private static LinkedList<Experiment> experiments = new LinkedList<Experiment>();
        private static Host host = new Host();
        private static Stopwatch stopwatch;
        private static bool with_distraction;
        private static LinkedList<GazePoint> data;
        internal static void start(bool distraction)
        {
            with_distraction = distraction;
            stopwatch = new Stopwatch();
            stopwatch.Start();
            data = new LinkedList<GazePoint>();

            host.EnableConnection();
            var gazePointDataStream = host.Streams.CreateGazePointDataStream();

            gazePointDataStream.GazePoint((x, y, ts) => data.AddLast(new GazePoint(x, y)));
        }

        internal static void stop()
        {
            host.DisableConnection();
            stopwatch.Stop();
            var id = experiments.Count + 1;
            var experiment = new Experiment(id, stopwatch.Elapsed.Milliseconds, with_distraction, data);
            experiments.AddLast(experiment);
            save(id);
        }

        internal static void save(int id)
        {
            using (StreamWriter file = File.CreateText(filename))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(file, experiments);

                string full_path = ((FileStream)(file.BaseStream)).Name;
                Console.WriteLine($"Wrote results to: {full_path}");
                Console.WriteLine($"Experiment id: {id}");
            }
        }

        internal static void load()
        {
            try
            {
                using (StreamReader r = new StreamReader(filename))
                {
                    string json = r.ReadToEnd();
                    List<Experiment> items = JsonConvert.DeserializeObject<List<Experiment>>(json);
                }
            }
            catch (IOException ignore) { }
        }
    }
}
