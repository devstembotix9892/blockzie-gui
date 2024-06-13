import sys
import io
import numpy as np
import pandas as pd
import math
# import cv2

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('python-editor.jsx')

@app.route('/run', methods=['POST'])
def run():
    code = request.form['code']
    sys.stdout = io.StringIO()  # Redirect stdout to capture output
    try:
        if "print(" in code:  # Check if the code contains "print("
            exec(code)
            output = sys.stdout.getvalue().strip()
        else:
            result = eval(code)
            output = str(result)
    except Exception as e:
        output = str(e)
    sys.stdout = sys.__stdout__  # Restore stdout
    return output

@app.route('/capture')
def capture():
    video = cv2.VideoCapture(0)
    frames = []
    while True:
        success, frame = video.read()
        if not success:
            break
        else:
            # Perform any desired image processing operations on the frame
            gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

            # Add the processed frame to the frames list
            frames.append(gray_frame)

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

    video.release()
    cv2.destroyAllWindows()

    # Convert frames list to a NumPy array
    frames = np.array(frames)

    # Process the frames array further as needed

    return 'Frames captured: ' + str(frames.shape[0])

if __name__ == '__main__':
    app.run(debug=True)

