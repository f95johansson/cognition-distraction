import com.google.gson.Gson;
import spark.Request;
import spark.Response; /**
 * Author: Linus Lagerhjelm
 * File: API
 * Created: 2018-01-26
 * Description:
 */
public class API {
    EyeTrackerData data;
    Gson parser = new Gson();

    public API(EyeTrackerData data) {
        this.data = data;
    }

    public Object serveData(Request request, Response response) {
        return parser.toJson(data);
    }
}
