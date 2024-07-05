
/**
 * Imagen en SVG.
 * @param {Object} props - atributos de la imagen
 * @param {number} props.width - ancho de la imagen
 * @param {number} props.height - alto de la imagen
 * @param {number} props.fill - color de la imagen
 * @returns Imagen SVG
 */
const SvgSnowy = (props) => {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48"
    width="${props.width}"
    height="${props.height}"
    fill="${props.fill}"
  >
    <title>{"ic_fluent_weather_snow_48_filled"}</title>
    <path
      fill="${props.fill}"
      fillRule="nonzero"
      d="M19.5 36a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM15 34a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM24.001 8c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365 0 4.068-3.306 7.365-7.384 7.365h-21.23c-4.078 0-7.384-3.297-7.384-7.365 0-4.067 3.306-7.365 7.384-7.365h.16C14.072 12.161 17.664 8 24.001 8Z"
    />
  </svg>
  `;
};

export default SvgSnowy;