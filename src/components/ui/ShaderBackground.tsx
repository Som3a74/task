"use client";

import { useEffect, useRef } from "react";

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const gl = canvas.getContext('webgl') || (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);
    if (!gl) return;
    
    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_texCoord;

void main() {
    vec2 uv = v_texCoord;
    float time = u_time * 0.15;
    
    // Slow, deep obsidian flows
    float n1 = sin(uv.x * 1.5 + time) * 0.5 + 0.5;
    float n2 = cos(uv.y * 2.0 - time * 0.7) * 0.5 + 0.5;
    float n3 = sin((uv.x - uv.y) * 1.2 + time * 1.1) * 0.5 + 0.5;
    
    // Luxury Palette: Near black to deep charcoal with a hint of midnight
    vec3 col1 = vec3(0.02, 0.02, 0.03); // Near black
    vec3 col2 = vec3(0.04, 0.04, 0.06); // Deep charcoal
    vec3 col3 = vec3(0.06, 0.07, 0.09); // Dark midnight
    
    vec3 color = mix(col1, col2, n1 * n2);
    color = mix(color, col3, n3 * 0.2);
    
    // Ambient "lighting" glow
    float glow = smoothstep(0.8, 0.0, distance(uv, vec2(0.5, 0.8)));
    color += vec3(0.05, 0.06, 0.08) * glow;

    // Subtle grain for texture
    float grain = (sin(uv.x * 600.0) * sin(uv.y * 600.0) * 0.5 + 0.5) * 0.01;
    color += grain;

    gl_FragColor = vec4(color, 1.0);
}`;
    
    function cs(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }
    
    const prog = gl.createProgram();
    if (!prog) return;
    
    const vertexShader = cs(gl.VERTEX_SHADER, vs);
    const fragmentShader = cs(gl.FRAGMENT_SHADER, fs);
    if (!vertexShader || !fragmentShader) return;
    
    gl.attachShader(prog, vertexShader);
    gl.attachShader(prog, fragmentShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);
    
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    
    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    
    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;
    
    function render(t: number) {
      if (!gl || !canvas) return;
      if (typeof ResizeObserver === 'undefined') syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }
    
    render(0);

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full" style={{ display: "block" }}>
      <canvas
        ref={canvasRef}
        id="shader-canvas-ANIMATION_15"
        style={{ display: "block", width: "100%", height: "100%" }}
      ></canvas>
    </div>
  );
}
