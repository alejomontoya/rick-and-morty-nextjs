import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  state = {
    darkMode: ''
  }

  componentDidMount() {
    if (localStorage.getItem('theme')) {
      this.setState({
        darkMode: localStorage.getItem('theme')
      })
    }
  }

  render() {
    return (
      <Html className={this.state.darkMode}>
        <Head />
        <body className='h-screen dark:bg-black'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
