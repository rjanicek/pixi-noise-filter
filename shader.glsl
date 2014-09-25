precision mediump float;
varying vec2 vTextureCoord;
varying vec4 vColor;
uniform sampler2D uSampler;
uniform vec4 noiseLevelRGBA;

// The interval is from 0.0 to 1.0
float rand(vec2 co) {
      return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoord);

      float randomDelta = (rand(vTextureCoord) * 2.0) - 1.0;

      gl_FragColor.r += noiseLevelRGBA.r * randomDelta;
      gl_FragColor.g += noiseLevelRGBA.g * randomDelta;
      gl_FragColor.b += noiseLevelRGBA.b * randomDelta;
      gl_FragColor.a += noiseLevelRGBA.a * randomDelta;
}