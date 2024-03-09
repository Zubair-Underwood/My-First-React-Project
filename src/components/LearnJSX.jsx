export const LearnJSX = () => {

  let model = "G11234"

  return (

    <>
      {/* React.createElement("h1, "null", "learnJSX 1") */}
      <h1>Learn JSX 1</h1>

      {/* React.createElement("h1, "null", "learnJSX 2") */}
      <h1>Learn JSX 2</h1>

      {/* JavaScript Expression in JSX */}
      <h1>Price: {10 + 20}</h1>
      <h1>LG {model} </h1>


      {/* Attribute in JSX */}
      <h1 className="bg-primary">LearnJSX 3</h1>
      <h1 className={model}>Learn JSX 4</h1>
    </>
  )

}