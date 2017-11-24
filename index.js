/***************************************************************************
 *
 * Copyright (c) 2017 Wifi.com, Inc. All Rights Reserved
 * $Id$
 *
 * @file index.js
 * @author:  osdream(osdream.song@gmail.com)
 * @version: $Revision$
 * @date:    $Date: 2017/11/23 10:58:31$
 * @desc:    
 *
 **************************************************************************/

var tmp = require('tmp');
var copy = require('copy');
var q = require('q');
var path = require('path');

/**
 * Factory function for resolver
 * It is called only one time by Bower, to instantiate resolver.
 * You can instantiate here any caches or create helper functions.
 */
module.exports = function resolver (bower) {

    bower.force = true;

  // Resolver factory returns an instance of resolver
  return {

    // Match method tells whether resolver supports given source
    // It can return either boolean or promise of boolean
    match: function (source) {
      return source.indexOf('../') === 0
    },

    // Optional:
    // Can resolve or normalize sources, like:
    // "jquery" => "git://github.com/jquery/jquery.git"
    // locate: function (source) {
    //     return source;
    // },

    // Optional:
    // Allows to list available versions of given source.
    // Bower chooses matching release and passes it to "fetch"
    // releases: function (source) {
    //   var deferred = q.defer();
    //   md5Dir(source, function (err, hash) {
    //     if (err) {
    //         deferred.reject(new Error(err));
    //     }
    //     else {
    //         deferred.resolve([
    //           { target: hash, version: '0.0.1' }
    //         ]);
    //     }
    //   });
    //   return deferred.promise;
    // },

    // It downloads package and extracts it to temporary directory
    // You can use npm's "tmp" package to tmp directories
    // See the "Resolver API" section for details on this method
    fetch: function (endpoint, cached) {
      var source = endpoint.source;
      var deferred = q.defer();
      var tempDir = tmp.dirSync();
      copy(path.resolve(source, '**', '*'), tempDir.name, function (err, files) {
        if (err) {
            deferred.reject(new Error(err));
        }
        else {
            deferred.resolve({
              tempPath: tempDir.name,
              removeIgnores: true
            });
        }
      });
      return deferred.promise;
    }
  }
}



















/* vim: set ts=4 sw=4 sts=4 tw=100 : */
