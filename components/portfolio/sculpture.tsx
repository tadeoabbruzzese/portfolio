'use client';
import { useEffect, useRef, useState } from 'react';
import type * as THREE from 'three';

export function Sculpture({ paused }: { paused: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const live = useRef({ paused, variant: 0 });
  const [variant, setVariant] = useState(0);
  const [ready, setReady] = useState(false);
  useEffect(() => { live.current = { paused, variant }; }, [paused, variant]);
  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    void import('three').then(T => {
      if (disposed || !canvas.current) return;
      const element = canvas.current;
      let renderer: THREE.WebGLRenderer;
      try { renderer = new T.WebGLRenderer({ canvas: element, alpha: true, antialias: true, powerPreference: 'low-power' }); } catch { return; }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.65));
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = T.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(36, 1, .1, 100);
      camera.position.set(0, 0, 8.8);
      const geometry = new T.TorusKnotGeometry(1.38, .43, 180, 28, 2, 3);
      const material = new T.MeshPhysicalMaterial({ color: 0x4074ff, metalness: .64, roughness: .2, clearcoat: 1, clearcoatRoughness: .12 });
      const form = new T.Mesh(geometry, material);
      const group = new T.Group(); group.add(form); scene.add(group);
      const orbitGeometry = new T.TorusGeometry(2.25, .012, 8, 160);
      const orbitMaterial = new T.MeshBasicMaterial({ color: 0xa5c3ff, transparent: true, opacity: .32 });
      const orbit = new T.Mesh(orbitGeometry, orbitMaterial);
      orbit.rotation.set(.8, .5, -.35); group.add(orbit);
      scene.add(new T.HemisphereLight(0xffffff, 0x101737, 3));
      const key = new T.DirectionalLight(0xe0eeff, 7); key.position.set(-3, 4, 4); scene.add(key);
      const rim = new T.DirectionalLight(0x1f4bff, 6); rim.position.set(3, -2, 1); scene.add(rim);
      const fill = new T.DirectionalLight(0xffffff, 5); fill.position.set(1, 1, -3); scene.add(fill);
      const blue = new T.Color(0x4074ff), silver = new T.Color(0xcbd4ed);
      let px = 0, py = 0, tick = 0, frame = 0, previous = 0, visible = true;
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const resize = () => { const { width, height } = element.getBoundingClientRect(); if (!width || !height) return; renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.render(scene, camera); };
      const pointer = (e: PointerEvent) => { const b = element.getBoundingClientRect(); px = (e.clientX - b.left) / b.width - .5; py = (e.clientY - b.top) / b.height - .5; };
      const reset = () => { px = 0; py = 0; };
      const animate = (time: number) => {
        frame = requestAnimationFrame(animate);
        if (time - previous < 33 || !visible || document.hidden) return;
        const dt = Math.min((time - previous) / 1000, .05); previous = time;
        const moving = !live.current.paused && !motionQuery.matches;
        if (moving) tick += dt;
        group.rotation.y += ((moving ? px * .7 : 0) - group.rotation.y) * .06;
        group.rotation.x += ((moving ? py * .4 : 0) - group.rotation.x) * .06;
        form.rotation.set(.3 + tick * .14, tick * .2, -.45);
        form.scale.z += ((live.current.variant === 1 ? .63 : 1) - form.scale.z) * .05;
        form.scale.y += ((live.current.variant === 1 ? 1.15 : 1) - form.scale.y) * .05;
        material.color.lerp(live.current.variant === 1 ? silver : blue, .04);
        orbit.rotation.z = -.35 + tick * .08;
        group.position.y = Math.sin(tick * .7) * .08;
        renderer.render(scene, camera);
      };
      const observer = new ResizeObserver(resize); observer.observe(element);
      const intersection = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }); intersection.observe(element);
      element.addEventListener('pointermove', pointer); element.addEventListener('pointerleave', reset);
      resize(); frame = requestAnimationFrame(animate); setReady(true);
      cleanup = () => { cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect(); element.removeEventListener('pointermove', pointer); element.removeEventListener('pointerleave', reset); geometry.dispose(); material.dispose(); orbitGeometry.dispose(); orbitMaterial.dispose(); renderer.dispose(); };
    }).catch(() => {});
    return () => { disposed = true; cleanup(); };
  }, []);
  return <div className={`p-sculpture ${ready ? 'is-ready' : ''}`}><div className="p-orb-fallback" aria-hidden="true" /><canvas ref={canvas} aria-hidden="true" /><div className="p-sculpture-label"><span>Diseño + lógica + movimiento</span><span>Una idea, muchas formas.</span></div><div className="p-materials" role="group" aria-label="Material de la escultura"><button aria-label="Material azul" aria-pressed={variant === 0} onClick={() => setVariant(0)}><i className="blue" />Azul</button><button aria-label="Material plata" aria-pressed={variant === 1} onClick={() => setVariant(1)}><i className="silver" />Plata</button></div></div>;
}
