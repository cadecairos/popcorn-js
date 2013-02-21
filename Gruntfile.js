module.exports = function( grunt ) {

  grunt.loadNpmTasks( 'grunt-contrib-jshint' );

  var JS_WILDCARD = '/**/popcorn.*.js',
      TEST_WILDCARD = '/**/popcorn.*.unit.js',

      // JS
      CORE = './popcorn.js',
      PLUGINS = './plugins' + JS_WILDCARD,
      PARSERS = './parsers' + JS_WILDCARD,
      PLAYERS = './players' + JS_WILDCARD,
      EFFECTS = './effects' + JS_WILDCARD,
      MODULES = './modules' + JS_WILDCARD,
      WRAPPERS = './wrappers' + JS_WILDCARD,
      IE8 = './ie8' + JS_WILDCARD,

      // Unit tests
      CORE_TESTS = './test/popcorn.unit.js',
      PLUGIN_TESTS = './plugins' + TEST_WILDCARD,
      PARSER_TESTS = './parsers' + TEST_WILDCARD,
      PLAYER_TESTS = './players' + TEST_WILDCARD,
      EFFECTS_TESTS = './effects' + TEST_WILDCARD,
      MODULE_TESTS = './modules' + TEST_WILDCARD,
      WRAPPER_TESTS = './wrappers' + TEST_WILDCARD,

      // Ignore globs
      IGNORE_TESTS_GLOB = "!./**/popcorn.*.unit.js";
      IGNORE_JS_GLOB = "!./**/popcorn.*.js"


  grunt.initConfig({
    jshint: {
      options: {
        loopfunc: true,
        expr: true,
        eqnull: true,
        sub: true
      },
      "all": [
        CORE,
        PLUGINS,
        PLAYERS,
        EFFECTS,
        MODULES,
        WRAPPERS,
        IE8,
        IGNORE_TESTS_GLOB
      ],
      "lint-core": CORE,
      "lint-modules": [ MODULES, IGNORE_TESTS_GLOB ],
      "lint-wrappers": [ WRAPPERS, IGNORE_TESTS_GLOB ],
      "lint-plugins": [ PLUGINS, IGNORE_TESTS_GLOB ],
      "lint-parsers": [ PARSERS, IGNORE_TESTS_GLOB ],
      "lint-players": [ PLAYERS, IGNORE_TESTS_GLOB ],
      "lint-effects": [ EFFECTS, IGNORE_TESTS_GLOB ],
      "lint-core-tests": [ CORE_TESTS ],
      "lint-module-tests": [ MODULE_TESTS ],
      "lint-wrapper-tests": [ WRAPPER_TESTS ],
      "lint-plugin-tests": [ PLUGIN_TESTS ],
      "lint-parser-tests": [ PARSER_TESTS ],
      "lint-player-tests": [ PLAYER_TESTS ],
      "lint-effects-tests": [ EFFECTS_TESTS ],
      "lint-all-tests": [
        CORE_TESTS,
        MODULE_TESTS,
        WRAPPER_TESTS,
        PLUGIN_TESTS,
        PARSER_TESTS,
        PLAYER_TESTS,
        EFFECTS_TESTS
      ]
    }
  });

  grunt.registerTask( 'default', 'jshint' );
};