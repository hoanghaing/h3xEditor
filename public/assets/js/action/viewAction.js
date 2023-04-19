const event = new Event("fullscreen");
const fullscreen = () => {
  const editorContainer = document.getElementById('editor-container')
  if (editorContainer.requestFullscreen) {
    editorContainer.requestFullscreen();
  }
   else if (editorContainer.webkitRequestFullscreen) { /* Safari */
    editorContainer.webkitRequestFullscreen();
  } else if (editorContainer.msRequestFullscreen) { /* IE11 */
    editorContainer.msRequestFullscreen();
  }
  document.dispatchEvent(event);
}
const handle = (type) => {
  switch (type) {
    case 'fullscreen': 
      fullscreen();
      break;
    default:
      break;  
  }
}
export {
  handle
}