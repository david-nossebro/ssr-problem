import React from "react"

const IndexPage = () => {
  return  (
    <div className={isSSR() ? "server" : "client"}>
      <h1>Hello world from {isSSR() ? "server" : "client"}!</h1>
    </div>
  )

  function isSSR() {
    return typeof window === "undefined";
  }
}

export default IndexPage
