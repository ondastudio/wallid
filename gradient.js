let pauseIt = false;
let runAgain = false;
const container = document.querySelector(".wallid-gradient-container");
let contW, contH, wd, ht;
const dpr = window.devicePixelRatio;
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  stencil: false,
  preserveDrawingBuffer: false
});

setupQuality();

const scene = new THREE.Scene();
const camera = new THREE.Camera();

let uniforms = {};

// MOUSE VARIABLES
let mouse = false;
let tmouseX = null;
let tmouseY = null;
let mouseX = null;
let mouseY = null;

const vert = `void main() {
  gl_Position = vec4( position, 1.0 );
}`;

const frag = `#ifdef GL_ES
precision highp float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_dpr;
uniform vec3 u_col1;
uniform vec3 u_col2;
uniform vec3 u_col3;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453) / u_dpr;
}

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

vec4 circle(vec2 st, vec2 center, float radius, float blur, vec3 col){
    float dist = distance(st,center)*2.0;
    vec4 f_col = vec4(1.0-smoothstep(radius, radius + blur, dist));
    f_col.r *= col.r;
    f_col.g *= col.g;
    f_col.b *= col.b;
    return f_col;
}

void main(){
    // UNCHANCHED ST
    vec2 fst = gl_FragCoord.xy/u_resolution.xy;
    
    // ASPECT RATIO
    float aspect = u_resolution.x/u_resolution.y;

    // PURPLE & GREEN BLOB ST
    vec2 pst = fst * vec2(aspect, 1.);

    // MINT BLOB ST
    vec2 mst = fst;

    // MOUSE
    vec2 m = u_mouse.xy/u_resolution.xy;
    m *= u_dpr;
    m.x *= aspect;

    // HEADER COLORS
    vec3 col1 = u_col1 / 255.;
    vec3 col2 = u_col2 / 255.;
    vec3 col3 = u_col3 / 255.;

    // INIT MAIN COLOR
    vec4 color = vec4(0.);

    // PURPLE BLOB VARIABLES
    vec2 purpleC = vec2(.5+sin(u_time*.1)*.5*cos(u_time*.6)*.5, .5+sin(u_time*.5)*.5*cos(u_time*.3)*.5);//vec2(m.x, 1.-m.y);
    float purpleR = .3;
    float purpleB = .9;
    vec3 purpleCol = col1;

    // MINT BLOB VARIABLES
    vec2 mintC = vec2(.5+sin(u_time*.4)*.5*cos(u_time*.2)*.5, .5+sin(u_time*.3)*.5*cos(u_time*.5)*.5);
    float mintR = .5;
    float mintB = .9;
    vec3 mintCol = col2;

    // GREEN BLOB VARIABLES
    vec2 greenC = vec2((.5+cos(u_time*.5)*.5*sin(u_time*.2)*.5)*aspect, .5+cos(u_time*.4)*(.5)*sin(u_time*.3)*.5);
    float greenR = .5;
    float greenB = .9;
    vec3 greenCol = col3;

    // DISTORT PURPLE & GREEN BLOBS
    pst.x += sin(u_time*.15+pst.x*19.)*.37 * cos(u_time*.46+pst.y*25.)*.28;
    pst.y += cos(u_time*.27+pst.x*4.)*.45 * sin(u_time*.24+pst.y*8.)*.22;

    // DISTORT MINT BLOB
    mst.x += cos(u_time*.37+mst.x*15.)*.21 * sin(u_time*.14+mst.y*7.)*.29 * (m.x - .5 * u_dpr) * 4.;
    mst.y += sin(u_time*.15+mst.x*13.)*.37 * cos(u_time*.36+mst.y*5.)*.12 * (m.y - .5 * u_dpr) * 4.;

    vec4 color1 = vec4(0.); // BLOB FOR PURPLE
    vec4 color2 = vec4(0.); // BLOB FOR GREEN
    vec4 color3 = vec4(0.); // PURPLE BLOB
    vec4 color4 = vec4(0.); // GREEN BLOB
    vec4 color5 = vec4(0.); // GREEN BLOB
    vec4 color6 = vec4(0.);

    // add WHITE BLOB for PURPLE BLOB
    color1 += vec4(
        (circle(mst, mintC, mintR, mintB, vec3(1.))
         // remove mint blob from purple blob
         - circle(mst, mintC, mintR, mintB, vec3(1.)) * circle(mst, greenC, greenR, greenB, vec3(1.))
        )
    );

    // add WHITE BLOB for GREEN BLOB
    color2 += vec4(
        // RGB
        (circle(mst, mintC, mintR, mintB, vec3(1.))
         // remove mint blob from green blob
         - circle(mst, mintC, mintR, mintB, vec3(1.)) * circle(mst, purpleC, purpleR, purpleB, vec3(1.))
        )
    );

    // remove white information from purple and green blobs intersection
    color1 -= color1 * color2;
    color2 -= color1 * color2;

    // give them the purple and green colors
    color3 = color1;
    color4 = color2;

    color3.rgb *= purpleCol;
    color4.rgb *= greenCol;

    // add them to the main color
    color += color3;
    color += color4;

    color5 += vec4(
        // RGB
        (circle(mst, greenC, greenR, greenB, vec3(1.))
         // remove mint blob from green blob
         - circle(mst, greenC, greenR, greenB, vec3(1.)) * circle(mst, mintC, mintR, mintB, vec3(1.))
        )
    );

    color5 -= color1 * color2;

    color5.rgb *= mintCol;

    color += color5;

    // add MINT BLOB
    color += circle(mst, mintC, mintR, mintB, mintCol)
        * (color1 - circle(mst, mintC, mintR, mintB, vec3(1.)))
        * (color2 - circle(mst, mintC, mintR, mintB, vec3(1.)));

    gl_FragColor = color;
}`;

setup();

function setup() {
  if (container) {
    contW = container.getBoundingClientRect().width;
    contH = container.getBoundingClientRect().height;

    wd = contW;
    ht = contH;
  } else {
    wd = window.innerWidth;
    ht = window.innerHeight;
  }

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > ht) pause();
    else {
      if (runAgain) start();
    }
  });

  camera.position.z = 1;

  const plane = new THREE.PlaneBufferGeometry(2, 2);

  uniforms = {
    u_time: { type: "f", value: 1.0 },
    u_resolution: { type: "v2", value: new THREE.Vector2() },
    u_mouse: { type: "v2", value: new THREE.Vector2() },
    u_dpr: { type: "f", value: dpr },
    u_col1: { type: "v3", value: new THREE.Vector3(159, 226, 255) },
    u_col2: { type: "v3", value: new THREE.Vector3(194, 252, 241) },
    u_col3: { type: "v3", value: new THREE.Vector3(181, 241, 246) }
  };

  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vert,
    fragmentShader: frag
  });

  const mesh = new THREE.Mesh(plane, material);
  scene.add(mesh);

  container.appendChild(renderer.domElement);

  resize();
  window.addEventListener("resize", resize, false);

  document.onmousemove = (e) => {
    tmouseX = e.clientX;
    tmouseY = e.clientY;
    mouse = true;
  };

  animate();
}

function animate() {
  if (pauseIt) {
    cancelAnimationFrame(animate);
  } else {
    requestAnimationFrame(animate);
  }

  if (mouse) {
    mouseX += (tmouseX - mouseX) * 0.04;
    mouseY += (tmouseY - mouseY) * 0.04;
  } else {
    mouseX = wd * 0.5;
    mouseY = ht * 0.5;
  }

  uniforms.u_mouse.value.x = mouseX;
  uniforms.u_mouse.value.y = mouseY;

  uniforms.u_time.value += 0.04;
  renderer.render(scene, camera);
}

function setupQuality() {
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.autoUpdate = false;
  renderer.shadowMap.enabled = false;
  renderer.shadowMap.autoUpdate = false;
  renderer.shadowMap.enabled = false;
  renderer.gammaFactor = 2.2;
  renderer.powerPreference = "high-performance";

  renderer.setPixelRatio(dpr);
}

function resize() {
  if (container) {
    contW = container.offsetWidth;
    contH = container.offsetHeight;

    wd = contW;
    ht = contH;
  } else {
    wd = window.innerWidth;
    ht = window.innerHeight;
  }

  renderer.setSize(wd, ht);
  uniforms.u_resolution.value.x = wd * dpr;
  uniforms.u_resolution.value.y = ht * dpr;
}

function pause() {
  pauseIt = true;
  runAgain = true;
}

function start() {
  pauseIt = false;
  animate();
  runAgain = false;
}
