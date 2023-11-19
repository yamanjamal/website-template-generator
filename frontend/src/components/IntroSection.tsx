export default function IntroSection({
  description,
}: {
  description?: string
}) {
  if (!description)
    return (
      <p className="text-5xl mx-auto text-center my-48">
        there is no data for this section
      </p>
    )
  return (
    <div className="container mb-48 mt-24 mx-auto md:px-6 " id="intro-section">
      <section className="mb-32 text-center">
        <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
          Introduction
        </h2>
        <div>{description}</div>
      </section>
    </div>
  )
}
