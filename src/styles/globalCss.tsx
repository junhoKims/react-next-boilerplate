const globalCSS = (
  <style jsx global>{`
    html {
      font-size: 16px;
    }
    html,
    body,
    #root {
      height: 100%;
    }
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, Roboto;
      transition: background-color 1s ease;
    }
    ::selection {
      background: #ffe69b;
    }
    a {
      color: #2979ff;
    }
    a:hover {
      text-decoration: underline;
    }
    img {
      max-width: 100%;
      display: block;
    }
  `}</style>
)

export default globalCSS
