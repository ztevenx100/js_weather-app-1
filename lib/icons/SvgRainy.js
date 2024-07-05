
/**
 * Imagen en SVG.
 * @param {Object} props - atributos de la imagen
 * @param {number} props.width - ancho de la imagen
 * @param {number} props.height - alto de la imagen
 * @param {number} props.fill - color de la imagen
 * @returns Imagen SVG
 */
const SvgRainy = (props) => {
  return `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="_x32_"
    width="${props.width}"
    height="${props.height}"
    fill="${props.fill}"
    viewBox="0 0 512 512"
  >
    <g id="SVGRepo_iconCarrier">
      <style>{".st0{fill:${props.fill}}"}</style>
      <path
        d="M416.297 174.659h-.121c.056-1.594.121-3.178.121-4.791 0-76.635-62.134-138.759-138.759-138.759-71.789 0-130.848 54.52-138.024 124.417a107.63 107.63 0 0 0-31.846-4.791C48.211 150.735 0 198.936 0 258.395c0 59.458 48.211 107.66 107.669 107.66h308.628c52.852 0 95.703-42.842 95.703-95.703 0-52.851-42.851-95.693-95.703-95.693zM96.905 453.445c0 15.162 12.293 27.446 27.456 27.446 15.162 0 27.455-12.283 27.455-27.446 0-15.163-27.455-53.896-27.455-53.896s-27.456 38.733-27.456 53.896zM230.456 453.445c0 15.162 12.301 27.446 27.455 27.446 15.173 0 27.456-12.283 27.456-27.446 0-15.163-27.456-53.896-27.456-53.896s-27.455 38.733-27.455 53.896zM364.024 453.445c0 15.162 12.283 27.446 27.455 27.446 15.154 0 27.456-12.283 27.456-27.446 0-15.163-27.456-53.896-27.456-53.896s-27.455 38.733-27.455 53.896z"
        className="st0"
      />
    </g>
  </svg>
  `;
};

export default SvgRainy;