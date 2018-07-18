require('./library/helpers');

app.loadConfigs();

app.loadControllers();

app.loadMiddlewares();

app.loadModels();

app.set("views", _config('app.views'));
app.set("view engine", _config('app.view_engine'));