export default function CountryImage({ img }) {
  return (
    <img
      src={img.svg}
      alt="a flag of a country"
      className="country-card-image"
    />
  )
}
