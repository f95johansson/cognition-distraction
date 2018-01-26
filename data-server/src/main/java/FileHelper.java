import com.google.gson.Gson;

import javax.swing.*;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

/**
 * Author: Linus Lagerhjelm
 * File: FileHelper
 * Created: 2018-01-26
 * Description:
 */
public class FileHelper {
    public static boolean checkAvailable(JFileChooser c) {
        try {
            new FileReader(c.getSelectedFile());
        } catch (IOException e) { return false; }
        return true;
    }

    public static Optional<List<EyeTrackerData>> getFile(File selectedFile) {
        Gson parser = new Gson();
        try {
            EyeTrackerData[] d = parser.fromJson(new FileReader(selectedFile), EyeTrackerData[].class);
            return Optional.of(Arrays.asList(d));

        } catch (IOException e) {
            return Optional.empty();
        }
    }
}
