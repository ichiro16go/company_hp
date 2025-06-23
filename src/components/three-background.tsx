"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>(null)
  const rendererRef = useRef<THREE.WebGLRenderer>(null)
  const animationIdRef = useRef<number>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x0f0f0f, 15, 60)
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x0a0a0a, 1)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    rendererRef.current = renderer

    mountRef.current.appendChild(renderer.domElement)

    // Professional AI color palette
    const colors = {
      primary: 0x2563eb, // Professional blue
      secondary: 0x06b6d4, // Cyan accent
      accent: 0x10b981, // Success green
      neutral: 0x6b7280, // Gray
      light: 0xe5e7eb, // Light gray
      white: 0xffffff, // Pure white
      dark: 0x1f2937, // Dark gray
    }

    // Create neural network-like connections
    const networkNodes: THREE.Mesh[] = []
    const connections: THREE.Line[] = []

    // Create nodes (data points)
    for (let i = 0; i < 25; i++) {
      const nodeGeometry = new THREE.SphereGeometry(0.08, 16, 16)
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.7 ? colors.accent : colors.primary,
        transparent: true,
        opacity: 0.8,
      })

      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
      node.position.set((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 30)

      // Add glow effect
      const glowGeometry = new THREE.SphereGeometry(0.15, 16, 16)
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: nodeMaterial.color,
        transparent: true,
        opacity: 0.2,
      })
      const glow = new THREE.Mesh(glowGeometry, glowMaterial)
      glow.position.copy(node.position)
      scene.add(glow)

      scene.add(node)
      networkNodes.push(node)
    }

    // Create connections between nearby nodes
    for (let i = 0; i < networkNodes.length; i++) {
      for (let j = i + 1; j < networkNodes.length; j++) {
        const distance = networkNodes[i].position.distanceTo(networkNodes[j].position)
        if (distance < 8 && Math.random() > 0.6) {
          const points = [networkNodes[i].position, networkNodes[j].position]
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
          const lineMaterial = new THREE.LineBasicMaterial({
            color: colors.secondary,
            transparent: true,
            opacity: 0.3,
          })
          const line = new THREE.Line(lineGeometry, lineMaterial)
          scene.add(line)
          connections.push(line)
        }
      }
    }

    // Create floating geometric structures (representing AI processing)
    const aiStructures: THREE.Group[] = []

    for (let i = 0; i < 8; i++) {
      const structureGroup = new THREE.Group()

      // Main structure
      const mainGeometry = new THREE.BoxGeometry(1.2, 0.1, 1.2)
      const mainMaterial = new THREE.MeshBasicMaterial({
        color: colors.dark,
        transparent: true,
        opacity: 0.7,
      })
      const mainStructure = new THREE.Mesh(mainGeometry, mainMaterial)
      structureGroup.add(mainStructure)

      // Add wireframe overlay
      const wireframeGeometry = new THREE.EdgesGeometry(mainGeometry)
      const wireframeMaterial = new THREE.LineBasicMaterial({
        color: colors.primary,
        transparent: true,
        opacity: 0.8,
      })
      const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial)
      structureGroup.add(wireframe)

      // Add data flow indicators
      for (let j = 0; j < 4; j++) {
        const indicatorGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.3)
        const indicatorMaterial = new THREE.MeshBasicMaterial({
          color: colors.accent,
          transparent: true,
          opacity: 0.6,
        })
        const indicator = new THREE.Mesh(indicatorGeometry, indicatorMaterial)
        indicator.position.set((j - 1.5) * 0.3, 0.2, 0)
        indicator.rotation.x = Math.PI / 2
        structureGroup.add(indicator)
      }

      structureGroup.position.set((Math.random() - 0.5) * 25, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 25)
      structureGroup.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)

      scene.add(structureGroup)
      aiStructures.push(structureGroup)
    }

    // Create data stream particles
    const particleCount = 200
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleVelocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 40
      particlePositions[i + 1] = (Math.random() - 0.5) * 30
      particlePositions[i + 2] = (Math.random() - 0.5) * 40

      particleVelocities[i] = (Math.random() - 0.5) * 0.02
      particleVelocities[i + 1] = Math.random() * 0.01
      particleVelocities[i + 2] = (Math.random() - 0.5) * 0.02
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: colors.light,
      size: 0.03,
      transparent: true,
      opacity: 0.6,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Create holographic panels (representing AI interfaces)
    const panels: THREE.Mesh[] = []

    for (let i = 0; i < 6; i++) {
      const panelGeometry = new THREE.PlaneGeometry(2, 1.2)
      const panelMaterial = new THREE.MeshBasicMaterial({
        color: colors.primary,
        transparent: true,
        opacity: 0.15,
        side: THREE.DoubleSide,
      })

      const panel = new THREE.Mesh(panelGeometry, panelMaterial)
      panel.position.set((Math.random() - 0.5) * 20, Math.random() * 10 + 2, (Math.random() - 0.5) * 20)
      panel.rotation.set((Math.random() - 0.5) * 0.5, Math.random() * Math.PI, (Math.random() - 0.5) * 0.3)

      // Add panel border
      const borderGeometry = new THREE.EdgesGeometry(panelGeometry)
      const borderMaterial = new THREE.LineBasicMaterial({
        color: colors.secondary,
        transparent: true,
        opacity: 0.8,
      })
      const border = new THREE.LineSegments(borderGeometry, borderMaterial)
      border.position.copy(panel.position)
      border.rotation.copy(panel.rotation)
      scene.add(border)

      scene.add(panel)
      panels.push(panel)
    }

    // Professional lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(colors.primary, 0.6)
    mainLight.position.set(10, 10, 5)
    mainLight.castShadow = true
    scene.add(mainLight)

    const fillLight = new THREE.DirectionalLight(colors.secondary, 0.3)
    fillLight.position.set(-5, 5, -5)
    scene.add(fillLight)

    const accentLight = new THREE.PointLight(colors.accent, 0.4, 20)
    accentLight.position.set(0, 8, 0)
    scene.add(accentLight)

    camera.position.set(0, 8, 15)
    camera.lookAt(0, 0, 0)

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      const time = Date.now() * 0.001

      // Animate network nodes
      networkNodes.forEach((node, index) => {
        node.position.y += Math.sin(time * 0.5 + index) * 0.003
        node.rotation.x += 0.01
        node.rotation.y += 0.01
      })

      // Animate AI structures
      aiStructures.forEach((structure, index) => {
        structure.rotation.y += 0.005 + index * 0.001
        structure.position.y += Math.sin(time * 0.3 + index) * 0.01
      })

      // Animate panels
      panels.forEach((panel, index) => {
        panel.rotation.y += 0.002 + index * 0.0005
        panel.position.y += Math.sin(time * 0.4 + index) * 0.005
      })

      // Animate particles (data flow)
      const positions = particles.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += particleVelocities[i]
        positions[i + 1] += particleVelocities[i + 1]
        positions[i + 2] += particleVelocities[i + 2]

        // Reset particles that go too far
        if (Math.abs(positions[i]) > 20 || positions[i + 1] > 15 || Math.abs(positions[i + 2]) > 20) {
          positions[i] = (Math.random() - 0.5) * 40
          positions[i + 1] = -15
          positions[i + 2] = (Math.random() - 0.5) * 40
        }
      }
      particles.geometry.attributes.position.needsUpdate = true

      // Subtle camera movement
      camera.position.x = Math.sin(time * 0.1) * 3
      camera.position.z = 15 + Math.cos(time * 0.08) * 2
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return

      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 -z-10" style={{ pointerEvents: "none" }} />
}
