import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

import javax.swing.*;


public class FileChooserTest extends JFrame {
    public interface InvokeStart {
        void invoke(File selectedFile);
    }

    private JTextField filename = new JTextField(), dir = new JTextField();
    private JLabel info = new JLabel("Press open to select data file");
    private JLabel error = new JLabel("Could not open file");

    private JButton open = new JButton("Open");
    private JButton start = new JButton("Start");

    private InvokeStart startInvoker;
    private File selectedFile;

    public FileChooserTest(InvokeStart cb) {
        startInvoker = cb;
        JPanel p = new JPanel();
        open.addActionListener(new OpenL());
        p.add(open);
        start.addActionListener(new SaveL());
        start.setEnabled(false);
        p.add(start);
        Container cp = getContentPane();
        cp.add(p, BorderLayout.SOUTH);
        dir.setEditable(false);
        filename.setEditable(false);
        p = new JPanel();
        p.setLayout(new GridLayout(4, 1));
        p.add(info);
        p.add(filename);
        p.add(dir);
        error.setVisible(false);
        error.setForeground(Color.RED);
        p.add(error);
        cp.add(p, BorderLayout.NORTH);
    }

    class OpenL implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            JFileChooser c = new JFileChooser();
            // Demonstrate "Open" dialog:
            int rVal = c.showOpenDialog(FileChooserTest.this);
            if (rVal == JFileChooser.APPROVE_OPTION) {
                if (FileHelper.checkAvailable(c)) {
                    filename.setText(c.getSelectedFile().getName());
                    dir.setText(c.getCurrentDirectory().toString());
                    selectedFile = c.getSelectedFile();
                    start.setEnabled(true);
                } else {
                    error.setVisible(true);
                }
            }
            if (rVal == JFileChooser.CANCEL_OPTION) {
                filename.setText("");
                dir.setText("");
            }
        }
    }

    class SaveL implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            startInvoker.invoke(selectedFile);
            if (Desktop.isDesktopSupported()) {
                try {
                    Desktop.getDesktop().browse(new URI("http://www.google.com"));

                } catch (URISyntaxException | IOException ignore) {/* Ignore */}
            }
        }
    }
}