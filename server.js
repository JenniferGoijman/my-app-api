const express = require("express");
const cors = require("cors");
const { uploadFiles } = require('./upload-files');

const app = express();
 
app.use(cors());
app.use(express.static(__dirname + '/public'));
 
app.post("/upload", 
  uploadFiles.single('file'), (req, res) => {
    if (!req.file){
      return res.send({ success: false });
    } else {
      return res.send({ success: true })
    }
  }
);
 
app.listen(3001, () => {
  console.log("Server running successfully on 3001");
});