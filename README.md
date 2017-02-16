# `merge-master-into-all`
> Merge master into all other git branches

This package is not on NPM, so installation is [pretty tedious](https://github.com/npm/npm/issues/3055).
```sh
# clone the repo
$ git clone https://github.com/slammayjammay/merge-master-into-all.git
$ cd merge-master-into-all
# install dependencies
$ npm install
# generate tarball
$ npm pack
# install the generated tarball (XXX is the semantic version)
$ npm install -g merge-master-into-all-X.X.X.tgz
# remove the repo
$ cd ../ && rm -rf merge-master-into-all
```

## Usage
First commit changes so nothing is lost!

```sh
merge-master-into-all
```

Merges master into ALLLL branches. Probably useful in very rare, specific use-cases.
