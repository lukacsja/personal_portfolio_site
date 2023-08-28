
export default function Home() {
  return (
    <main className="flex flex-col justify-between h-screen bg-clr-accent-blue">
      <section>
        <p>Hi all. I am</p>
        <h1>Janos Lukacs</h1>
        <h2>Front-end developer</h2>
      </section>
      <section className="">
        <p>{`// find my profile on Github:`}</p>
        <p>{`const githubLink = "https://github.com/lukacsja`}</p>
      </section>
    </main>
  )
}
