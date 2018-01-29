using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using Tobii.Interaction;
using uhttpsharp;
using uhttpsharp.Handlers;
using uhttpsharp.Listeners;
using uhttpsharp.RequestProviders;
using uhttpsharpdemo;
using uhttpsharpdemo.Handlers;

namespace eyetracker
{
    class Program
    {
        static void Main(string[] args)
        {
            ExperimentRunner.load();

            using (var httpServer = new HttpServer(new HttpRequestProvider()))
            {
                httpServer.Use(new TcpListenerAdapter(new TcpListener(IPAddress.Loopback, 1337)));

                httpServer.Use(new HttpRouter().With(string.Empty, new IndexHandler())
                     .With("start", new StartHandler())
                     .With("startdistraction", new StartWithDistractionHandler())
                     .With("stop", new StopHandler())
                     .With("strings", new RestHandler<string>(new StringsRestController(), JsonResponseProvider.Default)));

                httpServer.Use((context, next) => {
                    Console.WriteLine("Got Request!");
                    return next();
                });

                httpServer.Start();
                Console.ReadLine();
            }

        }
    }
}
