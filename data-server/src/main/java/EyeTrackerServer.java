import java.util.Optional;

import static spark.Spark.*;

/**
 * Author: Linus Lagerhjelm
 * File: EyeTrackerServer
 * Created: 2018-01-26
 * Description:
 */
public class EyeTrackerServer {

    public static void main(String[] args) {
        MainWindow window = MainWindow.getInstance((selectedFile) -> {
            Optional<EyeTrackerData> data = FileHelper.getFile(selectedFile);

            API api = new API(data.get());
            get("/eyetracker", api::serveData);

        });
    }
}
