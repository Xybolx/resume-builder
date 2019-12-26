import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

class App extends Component {
    render() {
        return (
            <div className="App">
              <div className="text-center">
                <h2>CKEditor 5 using a custom build - DecoupledEditor</h2>
              </div>
                <CKEditor
                    onInit={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                    } }
                    editor={ DecoupledEditor }
                    onChange={ ( event, editor ) => {
                      const data = editor.getData();
                      console.log(data);
                  } }
                  onBlur={ ( event, editor ) => {
                      console.log( 'Blur.', editor );
                  } }
                  onFocus={ ( event, editor ) => {
                      console.log( 'Focus.', editor );
                  } }
                />
            </div>
        );
    }
}

export default App;
