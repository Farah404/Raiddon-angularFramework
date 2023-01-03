let express = require('express');

let app = express();

app.unsubscribe(express.static(__dirname+'/dist/mdb-angular-ui-kit-free'));

app.get('/*', (req, resp) => {
    resp.sendFile(__dirname+ '/dist/mdb-angular-ui-kit-free/index.html')
});

app.listen(process.env.PORT || 8080);
