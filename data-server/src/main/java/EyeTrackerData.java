import com.google.gson.annotations.SerializedName;

import java.util.List;

/**
 * Author: Linus Lagerhjelm
 * File: EyeTrackerData
 * Created: 2018-01-26
 * Description:
 */
public class EyeTrackerData {
    @SerializedName("id")
    Integer id;

    @SerializedName("elapsed_time")
    Long elapsedTime;

    @SerializedName("with_distraction")
    Boolean distraction;

    @SerializedName("data")
    List<ScreenPosition> positions;
}

class ScreenPosition {
    double x;
    double y;
}
