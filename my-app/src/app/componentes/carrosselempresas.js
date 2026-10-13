"use client";

import { useState } from "react";
import styles from "./carrosselempresas.module.css";

const empresas = [
    { nome: 'Magalu', logo:"/empresas/magalu.png"},
    { nome: 'Ambev', logo:"/empresas/ambev.png"},
    { nome: 'Bosch', logo:"/empresas/bosch.png"},
    { nome: 'General Motors', logo:"/empresas/General-Motors.png"},
    { nome: 'Vivo', logo:"/empresas/vivo-logo.png"},
    { nome: 'Toyota', logo:"/empresas/toyota.jpg"},
    { nome: 'TOTVS', logo:"/empresas/totvs.jpg"},
    { nome: 'Mottu', logo:"/empresas/mottu-logo.png"},
    { nome: 'Itau', logo:"/empresas/itau-logo.png"},
    { nome: 'Michelin', logo:"/empresas/michelin.png"},
    { nome: 'Outback', logo:"/empresas/outback.png"},
    { nome: 'Sodexo', logo:"/empresas/sodexo.png"},
];

export default function CarrosselEmpresas() {
  return (
    <section className={styles.carrosselEmpresas} id="empresas">
      <h2>Empresas com Oportunidade em Destaque</h2>
      <p>
        Conheça algumas das empresas que oferecem oportunidades
        para dar o próximo passo na sua carreira.
      </p>

      <div className={styles.janelaCarrossel}>
        <div className={styles.trilhoCarrossel}>
          {[...empresas, ...empresas].map((empresa, index) => (
            <div
              className={styles.cardEmpresa}
              key={`${empresa.nome}-${index}`}
            >
              <img
                src={empresa.logo}
                alt={`Logo da ${empresa.nome}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}