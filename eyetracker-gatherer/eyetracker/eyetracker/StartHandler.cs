﻿using System;
using System.Threading.Tasks;
using uhttpsharp;
using uhttpsharp.Headers;

namespace eyetracker
{
    internal class StartHandler : IHttpRequestHandler
    {
        public Task Handle(IHttpContext context, Func<Task> next)
        {
            ExperimentRunner.start(false);
            context.Response = HttpResponse.CreateWithMessage(HttpResponseCode.Ok, "Sample http-request-handler", context.Request.Headers.KeepAliveConnection());

            return Task.Factory.GetCompleted();
        }
    }
}