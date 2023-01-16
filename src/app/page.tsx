const content = new Array(100).fill(1).map((_, i) => (
  <div
    className="text-3xl"
    key={i}
  >
    HEJ {i}
  </div>
))

export default async function Home() {
  return <>{content}</>
}
