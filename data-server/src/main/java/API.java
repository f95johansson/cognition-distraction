import com.google.gson.Gson;
import spark.Request;
import spark.Response;

import java.util.List;

/**
 * Author: Linus Lagerhjelm
 * File: API
 * Created: 2018-01-26
 * Description:
 */
public class API {
    List<EyeTrackerData> data;
    Gson parser = new Gson();

    public API(List<EyeTrackerData> data) {
        this.data = data;
    }

    public Object serveData(Request request, Response response) {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        return parser.toJson(data);
    }
}
