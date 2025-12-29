"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";

function AnimatedSphere() {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.position.y = Math.sin(t / 1.5) / 4;
            meshRef.current.rotation.x = t / 4;
            meshRef.current.rotation.y = t / 2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} scale={2}>
                <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                <meshStandardMaterial
                    color="#FF4D4D"
                    roughness={0.1}
                    metalness={0.8}
                    emissive="#721C24"
                    emissiveIntensity={0.2}
                />
            </mesh>
        </Float>
    );
}

export default function Hero() {
    return (
        <section className="relative w-full min-h-[100dvh] md:min-h-screen flex items-center justify-center overflow-hidden bg-brand-light py-24 md:py-32">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-20 md:opacity-40">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <Environment preset="city" />
                    <AnimatedSphere />
                </Canvas>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-brand-red font-semibold text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest mb-4">
                        TechBridge Advisory Partners
                    </h2>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-dark leading-tight max-w-4xl mx-auto mb-6 text-balance">
                        Connecting Tech Companies to Their <span className="text-brand-red">Next Big Opportunity</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 text-balance">
                        Helping Telecom, CPaaS, SaaS, AI, and digital-platform founders raise capital, scale globally, and exit with confidence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#contact" className="px-8 py-4 bg-brand-red text-white font-medium rounded-full hover:bg-red-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Start Your Journey
                        </a>
                        <a href="#services" className="px-8 py-4 bg-white text-brand-dark font-medium rounded-full border border-gray-200 hover:border-brand-red hover:text-brand-red transition-all shadow-sm">
                            Explore Services
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
