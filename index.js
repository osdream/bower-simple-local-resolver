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

/**
 * Factory function for resolver
 * It is called only one time by Bower, to instantiate resolver.
 * You can instantiate here any caches or create helper functions.
 */
module.exports = function resolver (bower) {

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
    locate: function (source) {
      return source;
    },

    // Optional:
    // Allows to list available versions of given source.
    // Bower chooses matching release and passes it to "fetch"
    releases: function (source) {
      return [
        // always v1.0.0 ...
        { target: 'v1.0.0', version: '1.0.0' }
      ]
    },

    // It downloads package and extracts it to temporary directory
    // You can use npm's "tmp" package to tmp directories
    // See the "Resolver API" section for details on this method
    fetch: function (endpoint) {
      return {
        tempPath: endpoint.source,
        removeIgnores: true
      }
    }
  }
}



















/* vim: set ts=4 sw=4 sts=4 tw=100 : */
