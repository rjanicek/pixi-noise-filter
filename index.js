/**
 * @author Richard Janicek http://janicek.co @RJanicek
 *
 * Adds a noise texture to your pixi.js displayObjects.
 */

var rfile = require('rfile');
var glsl = rfile('./shader.glsl');

module.exports = function (PIXI) {

    var Filter = function()
    {
        PIXI.AbstractFilter.call( this );

        this.passes = [this];

        this.uniforms = {
            noiseLevelRGBA: {type: '4fv', value: [0.05, 0.05, 0.05, 0]},
        };

        this.fragmentSrc = [glsl];
    };

    Filter.prototype = Object.create( PIXI.AbstractFilter.prototype );
    Filter.prototype.constructor = Filter;

    // How much noise to apply. Array of RGBA floats with values between 0 and 1.
    Object.defineProperty(Filter.prototype, 'noiseLevelRGBA', {
        get: function() { return this.uniforms.noiseLevelRGBA.value; },
        set: function(value) { this.uniforms.noiseLevelRGBA.value = value; }
    });

    return Filter;
};