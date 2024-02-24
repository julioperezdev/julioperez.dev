import React from "react";
import ImageNext from "next/image";
import { Image, Button, Link } from "@nextui-org/react";

import styles from "./RdpHomeComponent.module.css"

export default function RdpHomeComponent() {
  return (
    <div className={styles.base}>
      <div className={styles.designBase}>
        <Image
          className={styles.particularDesing}
          isZoomed
          width={240}
          alt="Ropa de programador design of SQL Buenos Aires"
          src="/design1.png"
        />
        <Image
          className={styles.particularDesing}
          isZoomed
          width={240}
          alt="Ropa de programador design of Java Logo con Mate"
          src="/design2.png"
        />
        <Image
          className={styles.particularDesing}
          isZoomed
          width={240}
          alt="Ropa de programador design of Mapa de latino america con lenguajes de programacion"
          src="/design3.png"
        />
      </div>
      <div className={styles.contentBase}>
        <div className={styles.content}>
          <div>
            <q>Usar lo que te representa es parte del ser humano</q>
            <p>ChatGPT</p>
          </div>
          <ImageNext src="/logoRDP.png" width={500} height={500} className={styles.imageRDP} alt="ide programacion java" />
        </div>
        <Link className="w-full" href="https://julioperez.flashcookie.com" size="lg">
          <Button className={styles.button}>Visita Ropadeprogramador.com</Button>
        </Link>
      </div>
    </div>
  )
}