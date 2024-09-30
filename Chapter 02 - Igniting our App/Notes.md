NPM is a packaage Manager. These packages are known as depedencies.

package.json is a configuration for NPM

Bundlers
    webpack
    parcel
    Wheat

There are two types of depedencies
    dev : required in development phase
    normal : are used in production too.

^ caret : 
    Allow both minor and patch updates.
    Useful for staying up-to-date with new features and improvements, however, we have a risk of potentially breaking changes.
    Use it for libraries where you want to benefit from new features and bug fixes. Example: Jest, Prettier.        
~ Tilde : 
    Only allows patch updates.
    Useful for getting the latest bug fixes and security patches while maintaining stability.
    Use it for libraries where stability is crucial. Example: express framework.

package-lock.json : keep the track of exact version and record of the package and its dependencies
    integrity: hash of the curent development code

node-modules: contains all the code  of parcel bundler to fetch from npm. kind of DB that contain all data of the packages.

Transitive dependency : Parcel has dependencies which inturn depends on other, Like wise each library has its own depedency. Hence node-modules has lot of folders.

How is parcel managing all its own dependencies?
    It has its own package.json file and dependencies.

Is node-modules required in github/production? 
    No, we can use gitignore file at root level to skip github and production.

package.json & package-lock.json maintains the version of parcel bundler. Hence, both are required on production & github. We can use them to regenerate all node-modules. use npm install to recreate node-modules.

npx: executing a package. build and host a local app.

two ways to into an app
    using cdn links is not a preferred way because it is an expensive operation, making call to unpkg.com
    using npm is best way to obtain it.

Browser scripts cannot have imports or exports. - treats ./App.js as javascript. Using an attribute type="module" will treat it as React file.

Browser automatically updates the changes and reloads them using parcel.

npm init - package creation
npm install -D parcel - bundle 
npx parcel index.html - ignites the app; excutes it
npm i React - Obtaining react from npm
npm i ReactDOM - Obtaining react from npm
npx parcel build index.html - for prod

remove main: in package.json for building production bundle.

npx parcel index.html - dist folder is created; local server hosted on port.

parceljs.org
browserList.dev





