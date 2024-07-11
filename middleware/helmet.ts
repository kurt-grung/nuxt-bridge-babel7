// middleware/helmet.ts

import helmet from "helmet";

const whitelist = [
    "*"
];

export default function (req, res, next) {
    
    console.log("Helmet middleware");
    console.log("req.headers", req.headers);

    helmet({
        contentSecurityPolicy: {
            useDefaults: true,
            directives: {
                defaultSrc: ["'self'", ...whitelist],
                scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", ...whitelist],
                styleSrc: ["'self'", "'unsafe-inline'", ...whitelist],
                fontSrc: ["'self'", ...whitelist],
                imgSrc: ["'self'", "data:", ...whitelist],
                connectSrc: [ "'self'", ...whitelist],
                frameSrc: ["'self'", ...whitelist],
                frameAncestors: ["'none'"]
                /*
                    objectSrc: ["'self'"],
                    mediaSrc: ["'self'"],
                    manifestSrc: ["'self'"],
                    workerSrc: ["'self'"],
                    baseUri: ["'self'"],
                    formAction: ["'self'"],
                    frameAncestors: ["'self'"],
                    pluginTypes: ["'self'"],
                    reportUri: ["'self'"],
                    sandbox: ["'self'"],
                    blockAllMixedContent: []
                */
            }
        }
    })(req, res, next);
}