// Import required modules and dependencies
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
// const hbs = exphbs.create({ helpers });
const hbs = exphbs.create({ helpers: require("./utils/helpers") });

// Create express app and setting port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up session object with secret, cookie, and store
const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

// Use session middleware with session object
app.use(session(sess));

// Parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// IMPORTANT FOR PUBLIC FOLDERS - serving static files such as images from public directory
app.use(express.static("public"));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Use session middleware again with a different session object
app.use(
    session({
        secret: process.env.SECRET,
        store: new SequelizeStore({ db: sequelize }),
        resave: false,
        saveUninitialized: false,
    })
);

// Use routes from controller
app.use(routes);

// Synch sequelize models with database and starting server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});