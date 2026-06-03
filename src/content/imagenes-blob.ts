const basePublico = "";

const blobProyecto01Url = "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/proyectos/proyecto-01.png";
const blobProyecto02Url = "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/proyectos/proyecto-02.jpg";
const blobProyecto03Url = "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/proyectos/proyecto03-pastoralunsa.png";

const resolverRutaImagen = (rutaLocal: string): string => {
  if (!basePublico) return rutaLocal;
  return `${basePublico}${rutaLocal}`;
};

export const imagenesBlob = {
  proyectos: [
    blobProyecto01Url || resolverRutaImagen("/images/proyecto-01.png"),
    blobProyecto02Url || resolverRutaImagen("/images/proyecto-02.jpg"),
    blobProyecto03Url || resolverRutaImagen("/images/proyecto-03.jpg"),
  ],
} as const;

export type ImagenesBlob = typeof imagenesBlob;
