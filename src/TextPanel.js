import ContentEditable from 'react-contenteditable'
import Button from '@mui/material/Button';

import { useState } from 'react';

const MODEL_TEXT =  "<em>model generated text</em>"; // actually a function of server

function TextPanel({server}) {
  const [text, updateText] = useState("Placeholder");

  function onChangeText(event) {
    updateText(event.target.value);
  }
  function getModelText() {
    updateText(text + MODEL_TEXT);
  }

// <ContentEditable
//               innerRef={this.contentEditable}
//               html={this.state.html} // innerHTML of the editable div
//               disabled={false}       // use true to disable editing
//               onChange={this.handleChange} // handle innerHTML change
//               tagName='article' // Use a custom HTML tag (uses a div by default)
//             />

  return (<div>
            <ContentEditable
              style={{height:100}}
              id="outlined-multiline"
              html={text}
              onChange={onChangeText}
            />
            <Button onClick={getModelText}>Get Model-Generated Text</Button>
            </div>
  );
}

export default TextPanel;
