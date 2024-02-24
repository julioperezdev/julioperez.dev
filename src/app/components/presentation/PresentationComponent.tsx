import ImageNext from "next/image";
import {Button, Link } from "@nextui-org/react";

import styles from "./PresentationComponent.module.css"
export default function PresentationComponent() {
  return (
    <div className={styles.base}>
      <div className={styles.content}>
        <h1 className={styles.title}>Aprende a programar</h1>
        <p className={styles.paragraph}>Con mi experiencia enfocada en el Backend, Cloud Computing y con algunos matices del Frontend.</p>
        <div className={styles.buttons}>
          <Link className="w-full" href="https://www.youtube.com/channel/UCcQifbSRJXkn4UxzaCQbeSA" size="lg">
            <Button className={styles.button}>Ver Contenido</Button>
          </Link>
          <Link className="w-full" size="lg" href="https://calendly.com/julioperez-contact/30min">
            <Button className={styles.button}>Asesorias</Button>
          </Link>
        </div>
      </div>
      <ImageNext src="/ide.png" width={800} height={500} className={styles.ideImage} alt="ide programacion java" />
    </div>
  )
}