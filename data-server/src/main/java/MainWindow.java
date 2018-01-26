import javax.swing.*;
import java.awt.*;
import java.util.Set;

/**
 * Author: Linus Lagerhjelm
 * File: MainWindow
 * Created: 2017-11-16
 * Description:
 */
class MainWindow {
    private static MainWindow instance = null;
    JFrame frame;
    JPanel mainPanel;

    private MainWindow() {
        /* defeat initialization */
    }

    static MainWindow getInstance(FileChooserTest.InvokeStart inv) {
        if (instance == null) instance = new MainWindow("EyeTracker", 400, 200, inv);
        return instance;
    }

    private MainWindow(String title, int width, int height, FileChooserTest.InvokeStart inv) {
        frame = new FileChooserTest(inv);
        mainPanel = new JPanel();
        SwingUtilities.invokeLater(() -> {
            frame.setPreferredSize(new Dimension(width, height));
            frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
            frame.add(mainPanel);
            frame.pack();
            frame.setVisible(true);
        });
    }
}
